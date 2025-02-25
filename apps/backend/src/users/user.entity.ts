
import { Project } from '../projects/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => Project, (project) => project.owner, { cascade: true })
  projects: Project[];

    
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}