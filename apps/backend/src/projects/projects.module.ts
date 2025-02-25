import { Module } from '@nestjs/common';
import { ProjectsController } from './controller/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), UsersModule],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
