import { Task } from "src/tasks/entities/task.entity";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import * as Joi from "joi";

export class CreateCommentDto {
  @ApiProperty({
    description: "Текст комментария",
  })
  description: string;

  @ApiProperty({
    description: "Связанный пользователь",
  })
  user: User;

  @ApiProperty({
    description: "Связанная задача",
    minimum: 1,
  })
  task: Task;
}

export const CreateCommentSchema = Joi.object({
  description: Joi.string().required(),
  user: Joi.number().required().min(1),
  task: Joi.number().required().min(1),
});
