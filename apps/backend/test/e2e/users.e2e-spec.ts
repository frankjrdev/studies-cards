import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { AppModule } from '../../src/app.module';
import { User } from '../../src/users/user.entity';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<User>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get<Repository<User>>(
      getRepositoryToken(User),
    );
  });

  afterEach(async () => {
    await userRepository.clear(); // Limpia la base de datos después de cada test
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users/register (POST) - should create a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/users/register')
      .send({ email: 'test@example.com', password: '123456' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('test@example.com');
  });

  it('/users/:id (GET) - should return a user', async () => {
    const user = await userRepository.save({
      email: 'getuser@example.com',
      password: 'secure',
    });

    const response = await request(app.getHttpServer())
      .get(`/users/${user.id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('getuser@example.com');
  });
});
