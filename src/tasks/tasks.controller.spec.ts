import { Test, TestingModule } from "@nestjs/testing";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { Comment } from "src/comments/entities/comment.entity";

describe("TasksController", () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeORMMySqlTestingModule([Task, Comment, User]), TypeOrmModule.forFeature([Task])],
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
