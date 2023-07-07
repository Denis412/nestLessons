"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = exports.CreateUserDto = void 0;
const Joi = require("joi");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
exports.CreateUserSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(6),
});
//# sourceMappingURL=create-user.dto.js.map