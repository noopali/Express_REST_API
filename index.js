const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({extended:false}));
app.get("/api/users",(req,res)=>{
   return  res.json(users);
});

//REST API
app.get("/users",(req,res)=>{
    const html = `<ul>
      ${ users.map((users)=>`<li>${users.first_name}</li>`)};
    </ul>;`;
    return res.send(html);
});
app.
route("/api/users/:id").get((req,res)=>{
    id = Number(req.params.id);
    // const html = `<ul> ${users.map((users)=>`<li>${users.first_name}</li>`)}<ul>`
    user = users.find((user)=>user.id == id);
    return res.json(user);
})
.put((req,res)=>{
  //update user with id
  return res.json({status:pending});
})
.delete((req,res)=>{
  //delete user with id
  return res.json({status:"pending"});
});


app.post("/api/users",(req,res)=>{
  // create a new user
  const body = req.body;
  console.log(body);
  users.push({...body,id: users.length+1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{});
  return res.json({status:"sucess",id:users.length+1});
});
app.listen(8000,()=>{console.log("Server Started at 8000")});