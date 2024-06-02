const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    // console.log("in Userservice");
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
      console.log("");
      throw { error: "Something went wrong in service layer" };
    }
  }

  async singIn(email, plainPassowrd) {
    try {
      //step 1 -> Fetch the user using email
      const user = await this.userRepository.getByEmail(email);

      //step 2-> Check for correct password
      const passwordMatch = this.checkPassword(plainPassowrd, user.password);

      if (!passwordMatch) {
        console.log("Password Doesnt match");
        throw { error: "Incorrect Password" };
      }
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("Something went gone while Signing In");
      throw error;
    }
  }

  // we do not need async function for jwt creation and verificatin
  createToken(data) {
    try {
      const token = jwt.sign(data, JWT_KEY, { expiresIn: "1h" });
      return token;
    } catch (error) {
      console.log("cant able to create a json web token");
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
        const response = this.verifyToken(token);
        if(!response){
            throw {error:"Invalid token"};
        }
        const user = this.userRepository.getById(response.id);
        if(!user){
            throw {error:"No user with the corresponding token exists"};
        }

        return user.id;

    } catch (error) {
         console.log("something went wrong in service authentication");
         throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in verfing token");
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in password comparison");
      throw error;
    }
  }
}

module.exports = UserService;
