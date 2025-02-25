import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AsignaturesService } from '../../asignatures/service/asignatures.service';
import { CardsService } from '../service/cards.service';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly cardsService: CardsService,
    private readonly projectsService: AsignaturesService,
  ) {}

  @ApiOperation({ summary: 'Create new card' })
  @ApiResponse({ status: 201, description: 'Flash-card creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Post()
  async createCard(
    @Body() body: { question: string; answer: string; projectId: number },
  ) {
    const project = await this.projectsService.getAsignatureById(
      body.projectId,
    );
    if (!project) {
      throw new Error('Asignature not found');
    }
    return this.cardsService.createCard(body.question, body.answer, project);
  }

  @ApiOperation({ summary: 'Get cards by project' })
  @ApiResponse({ status: 201, description: 'consulta exitosa' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Patch(':cardId')
  async updateCardStats(
    @Param('cardId') cardId: number,
    @Body() body: { isCorrect: boolean },
  ) {
    return this.cardsService.updateCardStats(cardId, body.isCorrect);
  }
}
