/// <reference types="bull" />
import { ModerationService } from "./moderation.service";
export declare class ModerationController {
    private readonly moderationService;
    constructor(moderationService: ModerationService);
    create(body: any): Promise<{
        message: string;
    }>;
    findALl(): Promise<import("bull").Job<any>[]>;
}
