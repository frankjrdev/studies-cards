import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { UsersService } from './users.service';
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

describe('UserService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  jest.mock('bcryptjs', () => ({
    hash: jest.fn(() => Promise.resolve('hashedPassword')),
    compare: jest.fn(() => Promise.resolve(true)),
  }));

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('debería crear un usuario correctamente', async () => {
    const userDto = {
      name: 'John',
      lastname: 'Doe',
      email: 'test@example.com',
      username: 'johndoe',
      password: '123456',
      cellphone: '1234567890',
    };

    jest.spyOn(repository, 'findOne').mockResolvedValue(null);
    jest.spyOn(repository, 'create').mockReturnValue(userDto as User);
    jest.spyOn(repository, 'save').mockResolvedValue(userDto as User);

    const user = await service.createUser(userDto);
    expect(user.email).toEqual(userDto.email);
  });

  it('debería fallar si el usuario ya existe', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValue({} as User);

    await expect(
      service.createUser({
        name: 'John',
        lastname: 'Doe',
        email: 'test@example.com',
        username: 'johndoe',
        password: '123456',
        cellphone: '1234567890',
      }),
    ).rejects.toThrow('Email o username ya están en uso');
  });
});
