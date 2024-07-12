const express = require("express");
// const User = require("./MOCK_DATA.json");
const userRouter  = require("./routes/user");
const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middlewares");
const app = express();
const port = 8000;
//connection
connectMongoDb("mongodb://127.0.0.1:27017/MyApp");


//middleware
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users",userRouter);


app.listen(port,()=>{console.log("Server Started at "+port)});
module.exports = app