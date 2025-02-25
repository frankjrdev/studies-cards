import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Asignature } from '../asignatures/asignatures.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  birthdate: Date;

  @Column({ unique: true })
  cellphone: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Asignature, (project) => project.owner, { cascade: true })
  projects: Asignature[];

  // Estadísticas globales del usuario
  @Column({ default: 0 })
  totalCorrectAnswers: number;

  @Column({ default: 0 })
  totalIncorrectAnswers: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
