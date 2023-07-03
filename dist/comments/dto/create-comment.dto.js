"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentSchema = exports.CreateCommentDto = void 0;
const task_entity_1 = require("../../tasks/entities/task.entity");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const Joi = require("joi");
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Текст комментария",
    }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Связанный пользователь",
    }),
    __metadata("design:type", user_entity_1.User)
], CreateCommentDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Связанная задача",
        minimum: 1,
    }),
    __metadata("design:type", task_entity_1.Task)
], CreateCommentDto.prototype, "task", void 0);
exports.CreateCommentSchema = Joi.object({
    description: Joi.string().required(),
    user: Joi.number().required().min(1),
    task: Joi.number().required().min(1),
});
//# sourceMappingURL=create-comment.dto.js.map