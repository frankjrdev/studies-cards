import { User } from "../users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;
  
    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.projects)
    owner: User;

}