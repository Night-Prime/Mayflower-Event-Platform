const { initializeDatabase, sequelize } = require("../src/config/db");

describe("Synchronize Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
    await initializeDatabase();
  });

  it("it should synchronize models with the database", async () => {
    jest.spyOn(sequelize, "sync").mockResolvedValueOnce();

    await initializeDatabase();
    expect(sequelize.sync).toHaveBeenCalled();
  });

  it("it should have created the expected tables", async () => {
    const [result] = await sequelize.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            `);

    const tables = result.map((row) => row.table_name);

    expect(tables).toContain("Users");
    expect(tables).toContain("packages");
    expect(tables).toContain("bookings");
  });
});
