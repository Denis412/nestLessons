import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import * as Joi from "joi";
export declare class CreateCommentDto {
    description: string;
    user: User;
    task: Task;
}
export declare const CreateCommentSchema: Joi.ObjectSchema<any>;
