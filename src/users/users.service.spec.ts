import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";
import { Task } from "src/tasks/entities/task.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeORMMySqlTestingModule([Task, Comment, User]), TypeOrmModule.forFeature([User])],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
