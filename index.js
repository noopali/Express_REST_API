const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
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
app.get("/api/users/:id",(req,res)=>{
    id = Number(req.params.id);
    // const html = `<ul> ${users.map((users)=>`<li>${users.first_name}</li>`)}<ul>`
    user = users.find((user)=>user.id == id);
    return res.json(user);
});
app.listen(8000,()=>{console.log("Server Started at 8000")});