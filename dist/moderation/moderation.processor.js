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
exports.ModerationProcessor = void 0;
const bull_1 = require("@nestjs/bull");
let ModerationProcessor = exports.ModerationProcessor = class ModerationProcessor {
    async moderate(job) {
        const start = Date.now();
        console.log("Start");
        for (let i = 0; i < 100; i++) {
            console.log("Выполнено: " + i);
            await job.progress(i);
            for (let j = 0; j < 100000; j++) {
                for (let k = 0; k < 5000; k++) {
                    j + i;
                }
            }
        }
        console.log("End - " + (Date.now() - start));
        return {};
    }
};
__decorate([
    (0, bull_1.Process)("moderate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModerationProcessor.prototype, "moderate", null);
exports.ModerationProcessor = ModerationProcessor = __decorate([
    (0, bull_1.Processor)("moderation")
], ModerationProcessor);
//# sourceMappingURL=moderation.processor.js.map