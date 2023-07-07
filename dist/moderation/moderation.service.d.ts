import { Queue } from "bull";
export declare class ModerationService {
    private moderationQueue;
    constructor(moderationQueue: Queue);
    moderate(task_id: number): Promise<void>;
    getJobjs(): Promise<import("bull").Job<any>[]>;
}
