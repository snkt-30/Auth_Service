const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");

function setupAndStartServer() {
  app.listen(PORT, async () => {
    console.log(`Server Started at PORT ${PORT}`);
  });
}

setupAndStartServer();
