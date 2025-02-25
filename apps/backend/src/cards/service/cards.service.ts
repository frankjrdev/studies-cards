import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignature } from '../../asignatures/asignatures.entity';
import { Card } from '../card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async createCard(question: string, answer: string, project: Asignature) {
    const card = this.cardRepository.create({ question, answer, project });
    return this.cardRepository.save(card);
  }

  async updateCardStats(cardId: number, isCorrect: boolean) {
    const card = await this.cardRepository.findOne({ where: { id: cardId } });
    if (!card) return null;

    if (isCorrect) {
      card.correctAnswers += 1;
    } else {
      card.incorrectAnswers += 1;
    }

    return this.cardRepository.save(card);
  }
}
