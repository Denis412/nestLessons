import { CreateCommentDto } from "./create-comment.dto";
import * as Joi from "joi";
declare const UpdateCommentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentDto>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    description?: string;
}
export declare const UpdateCommentSchema: Joi.ObjectSchema<any>;
export {};
