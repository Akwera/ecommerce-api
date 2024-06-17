const UserModel = require("./model");

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { username: req.body.username },
    });

    if (user) {
      if (user.password == req.body.password) {
        res.send({ error: false, message: "login successful", data: user });
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("wrong username");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const deleteUserById=async (req, res)=>{
    const id=req.params.id
    try {
        
        const user= await UserModel.findByPk(id)
        if(user){
            await user.destroy()
              res.send({ error: false, message: "user deleted successfully", data:[] })
        }else{
            res.send({ error: true, message: `user of id ${id} not registered`, data: [] })   
        }
      
    } catch (error) {
        res.send(error.message)
    }
}
const getUsers=async (req,res)=>{
    try {
       const users=await UserModel.findAll()
       res.send({error:false,message:"users retrieved",data:users})
    } catch (error) {
        res.send(error.message)
    }
}
const getUserById=async (req,res)=>{
    const id=req.params.id
    try {
       
        const user=await UserModel.findByPk(id)
        if(user){
            res.send({ error: false, message: "user retrieved successfully", data: user })
        }
        else{
          res.send({ error: true, message: `user of id ${id} not registered`, data: [] })  
        }
    } catch (error) {
        res.send(error.message)
    }
}
const register = async (req, res) => {
  console.log(req.body);
  try {
    const userdata = await UserModel.create({
      userName: req.body.username,
      password: req.body.password,
      role: req.body.role,
      phoneNumber: req.body.phone,
    });
    if (userdata) {
      res.send("user created successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = { login, register,getUserById,deleteUserById,getUsers };
