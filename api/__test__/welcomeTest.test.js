const request = require("supertest");
const app = require("../app");
const { initializeDatabase } = require("../src/config/db");

beforeAll(async () => {
  await initializeDatabase(); // Make sure DB is initialized before tests
});

describe("Welcome to May Gardens", () => {
  it("should return a 200 response", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
