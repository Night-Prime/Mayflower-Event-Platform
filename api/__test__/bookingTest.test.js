const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../src/config/db");
const Package = require("../src/models/Package");
const { UUIDGenerator } = require("../src/helper");
const { Booking } = require("../src/models");

// mocking the my auth middleware
jest.mock("passport", () => ({
  use: jest.fn(),
  serializeUser: jest.fn(() => (req, res, next) => next()),
  initialize: jest.fn(() => (req, res, next) => next()),
  session: jest.fn(() => (req, res, next) => next()),
  deserializeUser: jest.fn(() => (req, res, next) => next()),
  authenticate: jest.fn((strategy, options, callback) => (req, res, next) => {
    const mockUser = { id: 1, name: "Mock User" };
    callback(null, mockUser);
  }),
}));

let packageModel, booking;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  const event = UUIDGenerator();
  packageModel = await Package.create({
    name: "Gold Package",
    description: "Includes 100 guests",
    capacity: 100,
    price: 1500,
  });

  booking = await Booking.create({
    packageId: packageModel.id,
    clientName: "Abati",
    clientEmail: "abati@example.com",
    eventDescription: "A starboy concert",
    clientPhone: "08957585954",
    eventTitle: "Starboy Concert",
    eventDate: "2025-09-09",
    eventTime: "09:00",
    scheduled: true,
    eventId: event,
  });
});

describe("Booking Routes", () => {
  it("should get all bookings with GET /booking/all", async () => {
    const mockToken = "test-access-token";
    const response = await request(app)
      .get("/api/v1/booking/all")
      .set("Cookie", [`accessToken=${mockToken}`]);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it("should return 401 if no access token is provided", async () => {
    const response = await request(app).get("/api/v1/booking/all");

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty("message", "Unauthorized Token!");
  });

  //  Would fail for now as i haven't mocked sendEmail function
  //   it("should create booking with POST /booking/ ", async () => {
  //     const id = UUIDGenerator();
  //     const packageModel = await Package.create({
  //       id: id,
  //       name: "Gold Standard",
  //       description: "for 100 people",
  //       capacity: "400",
  //       price: 1000,
  //     });
  //     const event = UUIDGenerator();

  //     const response = await request(app).post("/api/v1/booking/").send({
  //       packageId: packageModel.id,
  //       clientName: "Abati",
  //       clientEmail: "abati@example.com",
  //       eventDescription: "A starboy concert",
  //       clientPhone: "08957585954",
  //       eventTitle: "Starboy Concert",
  //       eventDate: "2025-09-09",
  //       eventTime: "09:00",
  //       scheduled: true,
  //       eventId: event,
  //     });

  //     expect(response.statusCode).toBe(201);
  //   });

  //   it("should get bookings through GET by /booking/:id with status 200", async () => {
  //     const response = await request(app).get(`/api/v1/booking/${booking.id}`);

  //     expect(response).toBe(200);
  //   });
});

afterAll(async () => {
  //   await Booking.destroy({ where: {} });
  //   await Package.destroy({ where: {} });
  await sequelize.close();
});
