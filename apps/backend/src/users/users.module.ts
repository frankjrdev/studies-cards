import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { Project } from 'src/projects/project.entity';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ProjectsModule], // Registra la entidad en TypeORM
  exports: [TypeOrmModule], providers: [UsersService], controllers: [UsersController],
})
export class UsersModule {}