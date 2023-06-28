import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { TasksModule } from "./tasks/tasks.module";
import { CommentsModule } from "./comments/comments.module";
import { Task } from "./tasks/entities/task.entity";
import { Comment } from "./comments/entities/comment.entity";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Task, Comment],
      synchronize: true,
    }),
    TasksModule,
    CommentsModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
