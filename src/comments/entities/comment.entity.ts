import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne((type) => Task, (task) => task.comments, { eager: true })
  task: Task;
}
