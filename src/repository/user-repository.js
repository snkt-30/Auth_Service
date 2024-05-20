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
}

module.exports = UserRepository;
