import { TypeOrmModule } from "@nestjs/typeorm";

export const TypeORMMySqlTestingModule = (entities: any[]) =>
  TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Raskat_561",
    database: process.env.DB_NAME || "posts_1t",
    entities: [...entities],
    synchronize: true,
  });
