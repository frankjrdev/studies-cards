import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from 'src/projects/projects.module';
import { Card } from './card.entity';
import { CardsController } from './controller/cards.controller';
import { CardsService } from './service/cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([Card]), ProjectsModule],
  controllers: [CardsController],
  providers: [CardsService],
  exports: [CardsService],
})
export class CardsModule {}
