const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log(error);
      throw { error: "Something wrong in repository level" };
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log(error);
      throw { error: "Something wrong in repository level" };
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id", "password"],
      });
      return user;
    } catch (error) {
      console.log("something went wrong on repository level");
      throw error;
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });

      if (user == null) {
        console.log(`No user found with ${userEmail} in database`);
        throw error;
      }
      return user;
    } catch (error) {
      console.log("Something went wrong while fetching user using email");
      throw error;
    }
  }
}

module.exports = UserRepository;
