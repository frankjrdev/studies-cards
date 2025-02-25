import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ProjectsController } from './controller/projects.controller';
import { Project } from './project.entity';
import { ProjectsService } from './service/projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), UsersModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService], // Exporta el servicio si es necesario en otros módulos
})
export class ProjectsModule {}
