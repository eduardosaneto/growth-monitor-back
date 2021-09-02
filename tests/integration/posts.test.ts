import "../../src/setup";
import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";

import { clearDatabase } from "../utils/database";

import * as postsFactory from "../factories/postsFactory";

const test = supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("get /", () => {
  it("should answer status 200 and an array with all posts", async () => {
    await postsFactory.createUsers();
    await postsFactory.createPosts();
    const response = await test.get("/");
    expect(response.body.length).toEqual(5);
    expect(response.status).toBe(200);
  });
});
