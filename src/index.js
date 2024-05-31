const express = require("express");
const bodyparser = require("body-parser");
const apiRoutes = require("./Routes/index");
// const bcrypt = require("bcrypt");
const app = express();

// const { User } = require("./models/index");
// const serviceRepository = require("./services/user-service");

const { PORT,JWT_KEY } = require("./config/serverConfig");

function setupAndStartServer() {
  
  app.listen(PORT, async () => {

    // middlewares
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    // const serviceRepo = new serviceRepository();
                                                                              
    // const token = serviceRepo.createToken({email:'Wedding@gmail.com',id:'3'});
    // console.log(token);
    // const reponse = serviceRepo.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IldlZGRpbmdAZ21haWwuY29tIiwiaWQiOiIzIiwiaWF0IjoxNzE3MDU3NzkwLCJleHAiOjE3MTcwNjEzOTB9.gCnpzGc9WVrzlTFooGLGr1VGzFx5ZyinmdQoepbVk4E');
    // console.log(reponse);

    console.log(`Server Started at PORT ${PORT}`);
  });
}

setupAndStartServer();
