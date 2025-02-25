import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UsersService } from '../service/users.service';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  const mockUsersService = {
    createUser: jest.fn((dto) => ({ id: '1', ...dto })),
    getUserById: jest.fn((id) => ({
      id,
      name: 'John',
      lastname: 'Doe',
      email: 'johndoe@example.com',
    })),
    updateUser: jest.fn((id, dto) => ({ id, ...dto })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('should create an user', async () => {
    const dto: CreateUserDto = {
      name: 'John',
      lastname: 'Doe',
      birthdate: new Date('1990-01-01'),
      cellphone: '1234567890',
      username: 'johndoe',
      profilePicture: 'profile.jpg',
      email: 'johndoe@example.com',
      password: 'password123',
    };

    const result = await usersController.register(dto);
    expect(result).toEqual({ id: '1', ...dto });
    expect(usersService.createUser).toHaveBeenCalledWith(dto);
  });

  it('should get an user by id', async () => {
    const result = await usersController.getUser(1);
    expect(result).toEqual({
      id: 1,
      name: 'John',
      lastname: 'Doe',
      email: 'johndoe@example.com',
    });
    expect(usersService.getUserById).toHaveBeenCalledWith(1);
  });

  it('should update an user', async () => {
    const dto: UpdateUserDto = { name: 'Updated Name' };
    const result = await usersController.update(1, dto);
    expect(result).toEqual({ id: 1, name: 'Updated Name' });
    expect(usersService.updateUser).toHaveBeenCalledWith(1, dto);
  });
});
