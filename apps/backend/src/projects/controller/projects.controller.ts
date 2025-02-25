import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../../users/service/users.service';
import { ProjectsService } from '../service/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly usersService: UsersService,
  ) {}

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

  @Get(':userId')
  async getProjects(@Param('userId') userId: number) {
    return this.projectsService.getProjectsByUser(userId);
  }
}
