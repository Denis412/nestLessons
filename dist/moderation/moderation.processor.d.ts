import { Job } from "bull";
export declare class ModerationProcessor {
    moderate(job: Job): Promise<{}>;
}
