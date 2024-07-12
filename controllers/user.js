const User = require("../models/user");

async function handleGetAllUsers(req,res){
        res.setHeader("X-reqType","AllUsers");
        const allDbUsers = await User.find({});
          console.log(allDbUsers);
         return  res.json(allDbUsers);
      }



async function handleGetUserById(req,res){
        // id = Number(req.params.id);
        id = req.params.id;
         const user = await User.findById(id);
         return res.status(200).json(user);
     }



async function handleUpdateUserById(req,res){
    const updateUser = await User.findByIdAndUpdate(req.params.id,{lastName:"changed"});
    res.json({status:"Changed"});
}


async function handleDeleteUserById(req,res){
     //delete user with id
     const deleteUser = await User.findByIdAndDelete(req.params.id);
  
     return res.status(200).json({status:"Deleted"});
}



async function handleCreateNewUser(req,res){
    const body = req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
      return res.status(400).json({message:"all fields are required"});
     }
     const result = await User.create( {
      firstName : body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title
     });
    console.log(body);
    // users.push({...body,id: users.length+1});
    // fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{});
    // return res.json({status:"sucess",id:users.length});
    return res.status(201).json({message:"new user added"});
}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}