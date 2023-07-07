import { Test, TestingModule } from "@nestjs/testing";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "./entities/comment.entity";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";
import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { LocalStrategy } from "src/auth/local.strategy";
import { JWTStrategy } from "src/auth/jwt.strategy";

describe("CommentsController", () => {
  let controller: CommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMMySqlTestingModule([Task, Comment, User]),
        TypeOrmModule.forFeature([Comment]),
      ],
      providers: [CommentsService],
      controllers: [CommentsController],
      exports: [CommentsService],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
