const UserService = require("../services/user-service");

const userService = new UserService();
const create = async (req, res) => {
  try {
    let userInfo = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await userService.create(userInfo);

    return res.status(201).json({
      data: user,
      message: "User created successfully",
      success: true,
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      data: {},
      message: "Something went wrong , User cant create",
      success: false,
      error: error,
    });
  }
};

module.exports = {
  create,
};
