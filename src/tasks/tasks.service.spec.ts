import { Test, TestingModule } from "@nestjs/testing";
import { TasksService } from "./tasks.service";
import { Task } from "./entities/task.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";

describe("TasksService", () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeORMMySqlTestingModule([Task, Comment, User]), TypeOrmModule.forFeature([Task])],
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
