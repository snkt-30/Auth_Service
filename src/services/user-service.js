const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");

const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    // console.log("in Userservice");
  }

  async create(data) {
    try {
      const userRepository = new UserRepository();
      const user = await userRepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
      throw { error: "Something went wrong in service layer" };
    }
  }

  createToken(data) {
    try {
      const token = jwt.sign(data, JWT_KEY,{expiresIn:'1h'});
      return token;
    } catch (error) {
      console.log("cant able to create a json web token");
    }
  }

  verifyToken(token){
    try {
         const response = jwt.verify(token,JWT_KEY);
         return response;
    } catch (error) {
      console.log("Something went wrong in verfing token");
      throw error;
    }
  }
}

module.exports = UserService;
