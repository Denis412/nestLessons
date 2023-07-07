import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeORMMySqlTestingModule } from "./test-utils/TypeORMMySqlTestingModule";
import { Task } from "./tasks/entities/task.entity";
import { Comment } from "./comments/entities/comment.entity";
import { User } from "./users/entities/user.entity";
import { ConfigModule } from "@nestjs/config";
import { BullModule } from "@nestjs/bull";
import { TasksModule } from "./tasks/tasks.module";
import { ModerationModule } from "./moderation/moderation.module";
import { CommentsModule } from "./comments/comments.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeORMMySqlTestingModule([Task, Comment, User]),
        BullModule.forRoot({
          redis: {
            host: "localhost",
            port: 6379,
          },
        }),
        TasksModule,
        ModerationModule,
        CommentsModule,
        UsersModule,
        AuthModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
