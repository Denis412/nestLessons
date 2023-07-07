"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationModule = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const moderation_service_1 = require("./moderation.service");
const moderation_controller_1 = require("./moderation.controller");
const moderation_processor_1 = require("./moderation.processor");
let ModerationModule = exports.ModerationModule = class ModerationModule {
};
exports.ModerationModule = ModerationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: "moderation",
            }),
        ],
        controllers: [moderation_controller_1.ModerationController],
        providers: [moderation_service_1.ModerationService, moderation_processor_1.ModerationProcessor],
    })
], ModerationModule);
//# sourceMappingURL=moderation.module.js.map