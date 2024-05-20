const express = require("express");
const bodyparser = require("body-parser");
const apiRoutes = require("./Routes/index");

// const bcrypt = require("bcrypt");
const app = express();

// const { User } = require("./models/index");

const { PORT } = require("./config/serverConfig");

function setupAndStartServer() {
  app.listen(PORT, async () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    // const incomingPassword = '123456';
    // const user = await User.findByPk(2);

    // console.log(user); 
    // const response = bcrypt.compareSync(incomingPassword,user.password);
    // console.log(response);

    console.log(`Server Started at PORT ${PORT}`);
  });
}

setupAndStartServer();
