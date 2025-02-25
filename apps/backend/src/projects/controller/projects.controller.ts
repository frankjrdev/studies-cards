import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from '../../users/service/users.service';
import { ProjectsService } from '../service/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly usersService: UsersService,
  ) {}

  @ApiOperation({ summary: 'Create new project' })
  @ApiResponse({ status: 201, description: 'Proyecto creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Post()
  async createProject(
    @Body()
    body: {
      name: string;
      description: string;
      isPublic: boolean;
      ownerId: number;
    },
  ) {
    const owner = await this.usersService.getUserById(body.ownerId);
    return this.projectsService.createProject(
      body.name,
      body.description,
      body.isPublic,
      owner,
    );
  }

  @ApiOperation({ summary: 'Get project by userId' })
  @ApiResponse({ status: 201, description: 'Proyectos obtenidos exitosamenet' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Get(':userId')
  async getProjects(@Param('userId') userId: number) {
    return this.projectsService.getProjectsByUser(userId);
  }
}
