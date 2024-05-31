const validateUserAuth = (req, res, next) => {

    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:true,
            data:{},
            message:"Something went wrong",
            err:"Email or Password missing in the signup process",
        })
    }
    next();
};

module.exports={
    validateUserAuth,
}
