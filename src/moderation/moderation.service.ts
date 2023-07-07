import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { InjectQueue } from "@nestjs/bull";

@Injectable()
export class ModerationService {
  constructor(@InjectQueue("moderation") private moderationQueue: Queue) {}

  async moderate(task_id: number) {
    this.moderationQueue.add("moderate", {
      task_id,
    });
  }

  async getJobjs() {
    return await this.moderationQueue.getJobs(["active", "completed"]);
  }
}
