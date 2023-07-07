import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { LocalStrategy } from "./local.strategy";
import { JWTStrategy } from "./jwt.strategy";
import { TypeORMMySqlTestingModule } from "src/test-utils/TypeORMMySqlTestingModule";
import { User } from "src/users/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "src/tasks/entities/task.entity";
import { Comment } from "src/comments/entities/comment.entity";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        PassportModule,
        TypeORMMySqlTestingModule([Task, Comment, User]),
        TypeOrmModule.forFeature([Task, Comment, User]),
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: "3600s" },
        }),
      ],
      providers: [AuthService, LocalStrategy, JWTStrategy],
      exports: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
