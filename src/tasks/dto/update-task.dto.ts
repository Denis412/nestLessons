import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";
import { Comment } from "src/comments/entities/comment.entity";
import * as Joi from "joi";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title?: string;
  comments?: Comment[];
}

export const UpdateTaskSchema = Joi.object({
  title: Joi.string(),
  comments: Joi.number(),
});
