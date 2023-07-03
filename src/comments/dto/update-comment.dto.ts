import { PartialType } from "@nestjs/mapped-types";
import { CreateCommentDto } from "./create-comment.dto";
import * as Joi from "joi";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  description?: string;
}

export const UpdateCommentSchema = Joi.object({
  description: Joi.string(),
});
