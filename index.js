const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
//middleware
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
  console.log("Middleware 1:");
  fs.appendFile("log.txt",` ${Date.now()}     ${req.method}      ${req.path}\n`,(err,data)=>{
    next();
  });

  //return res.json({message:"middleware 1"})
});
app.use((req,res,next)=>{
  console.log("Hello from middleware 2");
  next();
});
app.get("/api/users",(req,res)=>{
  console.log(users);
  res.setHeader("X-myName","Shankarsan")
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
    if(!user) return res.status(404).json({error:"Not found"});
    console.log(user)
    return res.status(200).json(user);
})
.patch((req,res)=>{
  //update user with id
  return res.json({status:pending});
  id = Number(req.params.id);
})
.delete((req,res)=>{
  //delete user with id
  return res.status(200).json({status:"pending"});
});
app.get("/logs", (req, res) => {
  fs.readFile("log.txt", 'utf8', (error, data) => {
    if (error) {
    
      res.status(500).send('Error reading log file');
      return ;
    }
    console.log(data);
    return res.json({message:"Reading logs"})
  });
});


app.post("/api/users",(req,res)=>{
  // create a new user
  const body = req.body;
  if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
    return res.status(400).json({message:"all fields are required"
    })  };
  console.log(body);
  users.push({...body,id: users.length+1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{});
  return res.json({status:"sucess",id:users.length});
});
app.listen(8000,()=>{console.log("Server Started at 8000")});