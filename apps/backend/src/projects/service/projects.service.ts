import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Project } from '../project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async createProject(
    name: string,
    description: string,
    isPublic: boolean,
    owner: User,
  ) {
    const project = this.projectRepository.create({
      name,
      description,
      isPublic,
      owner,
    });
    return this.projectRepository.save(project);
  }

  async getProjectsByUser(userId: number) {
    return this.projectRepository.find({
      where: { owner: { id: userId } },
      relations: ['owner', 'cards'],
    });
  }

  async getProjectById(projectId: number) {
    return this.projectRepository.findOne({
      where: { id: projectId },
      relations: ['owner', 'cards'],
    });
  }
}
