import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/comments (GET)", () => {
    return request(app.getHttpServer()).get("/comments").expect(200).expect([]);
  });

  it("/comments (POST)", () => {
    return request(app.getHttpServer())
      .post("/tasks")
      .send({ title: "Task1", user: 1 })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
          })
        );
      });
  });

  it("/tasks/9 (GET)", () => {
    return request(app.getHttpServer()).get("/tasks/9").expect(200).expect({
      id: 9,
      title: "Task1",
    });
  });

  it("/tasks/10 (DELETE)", () => {
    return request(app.getHttpServer()).delete("/tasks/10").expect(200).expect("");
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer()).get("/").expect(200).expect("Hello World!");
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
