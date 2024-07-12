const mongoose = require("mongoose");
//schema
const userSchema = new mongoose.Schema({
    firstName:{
      type:String,
      required: true,
    }
    ,lastName:{
      type:String,
      required: false,
    }
    ,email:{
      type:String,
      required:true,
      unique:true
    },
    jobTitle:{
      type: String,
  
    }
    ,
    gender:{
      type:String,
      required: true
    }
  });
  const Users = mongoose.model("Users",userSchema);
  //middleware
 
  module.exports = Users;