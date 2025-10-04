require("dotenv").config();
const app = require("./app");
const { PORT } = require("./config/config");

async function startServer() {
  try {
    app.listen(PORT, () => console.log(`Server online. Running on port: ${PORT}`));
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
}

startServer();