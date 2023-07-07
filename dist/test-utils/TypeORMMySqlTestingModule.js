"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMMySqlTestingModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const TypeORMMySqlTestingModule = (entities) => typeorm_1.TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Raskat_561",
    database: process.env.DB_NAME || "posts_1t",
    entities: [...entities],
    synchronize: true,
});
exports.TypeORMMySqlTestingModule = TypeORMMySqlTestingModule;
//# sourceMappingURL=TypeORMMySqlTestingModule.js.map