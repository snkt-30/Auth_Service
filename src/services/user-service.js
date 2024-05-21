const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    console.log("in Userservice");
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
}

module.exports = UserService;
