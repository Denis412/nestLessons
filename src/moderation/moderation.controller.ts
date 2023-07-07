import { Body, Controller, Get, Post } from "@nestjs/common";
import { ModerationService } from "./moderation.service";

@Controller("moderation")
export class ModerationController {
  constructor(private readonly moderationService: ModerationService) {}

  @Post()
  async create(@Body() body: any) {
    this.moderationService.moderate(parseInt(body.task_id));

    return {
      message: "Добавлено в очередь",
    };
  }

  @Get()
  findALl() {
    return this.moderationService.getJobjs();
  }
}
