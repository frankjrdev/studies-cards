import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Asignature } from '../asignatures/asignatures.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column({ default: 0 })
  timesCorrect: number;

  @Column({ default: 0 })
  timesIncorrect: number;

  @Column({ default: 0 })
  timesAsked: number;

  @ManyToOne(() => Asignature, (project) => project.cards)
  project: Asignature;

  // Contador de respuestas correctas e incorrectas
  @Column({ default: 0 })
  correctAnswers: number;

  @Column({ default: 0 })
  incorrectAnswers: number;
}
