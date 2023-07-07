import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";
import { Task } from "src/tasks/entities/task.entity";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "src/comments/entities/comment.entity";

describe("UsersController", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeORMMySqlTestingModule([Task, Comment, User]), TypeOrmModule.forFeature([User])],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
