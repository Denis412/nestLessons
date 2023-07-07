"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskSchema = exports.UpdateTaskDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_task_dto_1 = require("./create-task.dto");
const Joi = require("joi");
class UpdateTaskDto extends (0, mapped_types_1.PartialType)(create_task_dto_1.CreateTaskDto) {
}
exports.UpdateTaskDto = UpdateTaskDto;
exports.UpdateTaskSchema = Joi.object({
    title: Joi.string(),
    comments: Joi.number(),
});
//# sourceMappingURL=update-task.dto.js.map