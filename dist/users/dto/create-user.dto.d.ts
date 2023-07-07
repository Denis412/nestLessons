import * as Joi from "joi";
export declare class CreateUserDto {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
export declare const CreateUserSchema: Joi.ObjectSchema<any>;
