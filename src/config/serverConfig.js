const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

// to configure the enviorment variabe
dotenv.config();

// export the PORT for accessing throughout the project
module.exports = {
  PORT: process.env.PORT,
  SALT: bcrypt.genSaltSync(10),
  JWT_KEY: process.env.JWT_KEY,
};
