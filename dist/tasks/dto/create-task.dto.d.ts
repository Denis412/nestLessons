import * as Joi from "joi";
import { User } from "src/users/entities/user.entity";
export declare class CreateTaskDto {
    title: string;
    user: User;
}
export declare const CreateTaskSchema: Joi.ObjectSchema<any>;
