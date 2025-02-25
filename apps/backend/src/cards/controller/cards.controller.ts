import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ProjectsService } from '../../projects/service/projects.service';
import { CardsService } from '../service/cards.service';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly cardsService: CardsService,
    private readonly projectsService: ProjectsService,
  ) {}

  @Post()
  async createCard(
    @Body() body: { question: string; answer: string; projectId: number },
  ) {
    const project = await this.projectsService.getProjectById(body.projectId);
    if (!project) {
      throw new Error('Project not found');
    }
    return this.cardsService.createCard(body.question, body.answer, project);
  }

  @Patch(':cardId')
  async updateCardStats(
    @Param('cardId') cardId: number,
    @Body() body: { isCorrect: boolean },
  ) {
    return this.cardsService.updateCardStats(cardId, body.isCorrect);
  }
}
