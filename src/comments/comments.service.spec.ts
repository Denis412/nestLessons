import { Test, TestingModule } from "@nestjs/testing";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "./entities/comment.entity";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";
import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";

describe("CommentsService", () => {
  let service: CommentsService;

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

    service = module.get<CommentsService>(CommentsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
