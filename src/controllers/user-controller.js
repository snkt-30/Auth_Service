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

const singIn = async (req, res) => {
  try {
     const response = await userService.singIn(req.body.email, req.body.password); 
     return res.status(200).json({
      data:response,
      success: true,
      message:"User has successfully singed In",
      err :{}
     })
  } catch (error) {
    return res.status(500).json({
      data:{},
      success: true,
      message:"Signed In is not successful",
      err :error
     })
  }
};


const isAuthenticated = async (req,res)=>{
  try {
    // console.log(req.headers);
      const token = req.headers['x-access-token'];
      const response = await userService.isAuthenticated(token);
      return res.status(200).json({
        data:response,
        success:true,
        message:"User is authenticated",
        err:{}
      })
  } catch (error) {
    return res.status(500).json({
      data:{},
      success: true,
      message:"Signed In is not successful",
      err :error
     })
  }
}

module.exports = {
  create,
  singIn,
  isAuthenticated,
};
