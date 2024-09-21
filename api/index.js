const app = require("./app");
const { initializeDatabase } = require("./src/config/db");
const PORT = process.env.PORT || 5000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Mayflower Service running on PORT:${PORT}`);
  });
});
