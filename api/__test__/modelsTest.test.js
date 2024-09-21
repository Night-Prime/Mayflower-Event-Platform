const { User, Package, Booking, sequelize } = require("../src/models");

describe("Model Associations", () => {
  beforeAll(async () => {
    // Sync the models before testing associations
    await sequelize.sync({ force: true }); // force: true drops tables first, ensuring a clean start
  });

  it("should have a one-to-many relationship between User and Package", async () => {
    // Create a User instance
    const user = await User.create({
      name: "Test User",
      email: "testuser@example.com", // Required field
      googleId: "google123456789", // Required field
    });

    // Create a Package instance and associate it with the user
    const packageModel = await Package.create({
      userId: user.id,
      name: "Test Package",
      price: 1000,
    });

    // Check if userId foreign key exists
    expect(packageModel.userId).toBeDefined();

    // Confirming the association between both models
    expect(User.associations.packages).toBeDefined();
    expect(User.associations.packages.foreignKey).toBe("userId");
  });

  it("should have a one-to-many relationship between Package and Booking", async () => {
    const packageModel = await Package.create({
      name: "Gold Standard",
      description: "for 100 people",
      capacity: "400",
      price: 1000,
    });

    const booking = await Booking.create({
      packageId: packageModel.id,
      clientName: "Abati",
      clientEmail: "abati@example.com",
      clientPhone: "08957585954",
      eventTitle: "Starboy Concert",
      eventDate: "2025-09-09",
      eventTime: "09:00",
      scheduled: true,
    });

    expect(booking.packageId).toBe(packageModel.id);

    expect(Package.associations.bookings).toBeDefined();
    expect(Package.associations.bookings.foreignKey).toBe("packageId");
  });

  it("should have a belongs-to relationship between Booking and Package", async () => {
    const packageModel = await Package.create({
      name: "Premium Package",
      price: 1500,
    });

    const booking = await Booking.create({
      packageId: packageModel.id,
      clientName: "Abati",
      clientEmail: "abati@example.com",
      clientPhone: "08957585954",
      eventTitle: "Starboy Concert",
      eventDate: "2025-09-09",
      eventTime: "09:00",
      scheduled: true,
    });

    expect(booking.packageId).toBe(packageModel.id);

    expect(Booking.associations.packages).toBeDefined();
    expect(Booking.associations.packages.foreignKey).toBe("packageId");
  });

  afterAll(async () => {
    await sequelize.close(); // Close the connection after tests are done
  });
});
