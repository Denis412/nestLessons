import { ApiProperty } from "@nestjs/swagger";
import * as Joi from "joi";
import { User } from "src/users/entities/user.entity";

export class CreateTaskDto {
  @ApiProperty({
    description: "Название задачи",
  })
  title: string;

  @ApiProperty({
    description: "Связанный пользователь",
  })
  user: User;
}

export const CreateTaskSchema = Joi.object({
  title: Joi.string().required(),
  user: Joi.number().required().min(1),
});
