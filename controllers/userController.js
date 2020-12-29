const User = require("../models/user");

module.exports.userRegister = async(req,res)=>{
    try {
        let user = new User;
    user.userType = req.body.userType;
    user.name = req.body.name;
    user.email= req.body.email;
    user.password = req.body.password;
    await user.save();
    return res.status(200).json({
        message:"user registered"
    });
    } catch (error) {
        return res.status(400).json({
            message:error
        });
    }
};

module.exports.userLogin = async(req,res)=>{
    const user=await User.findOne({email:req.body.email,password:req.body.password});
    if(user){
        return res.status(200).json({
            user:user
        });
    }
    else{
        return res.status(400).json({
            message : "Invalid Request"
        });
    }
};

module.exports.userEdit = async (req,res)=>{
    const user = await User.findOne({email : req.body.oemail,password:req.body.opassword});
    if(user){
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            await user.save();
            return res.status(200).json({
                user:user
            });
    }
    else{
        return res.status(400).json({
            message : "Invalid Request"
        });
    }
};
