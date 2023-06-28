import { Comment } from "src/comments/entities/comment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany((type) => Comment, (comment) => comment.task)
  comments: Comment[];
}
