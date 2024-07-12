const express = require("express");
const router = express.Router();
const {handleGetAllUsers,handleGetUserById, handleUpdateUserById,handleCreateNewUser,handleDeleteUserById} = require("../controllers/user");


//   router.get("/users",async (req,res)=>{
//    const allDbUsers = await User.find({});
//       const html = `<ul>
//         ${ allDbUsers.map((user)=>`<li>${user.firstName}-${user.email}</li>`).join("")}
        
//       </ul>`;
  
//       return res.send(html);
//   });
router.get("/",handleGetAllUsers);
  router.
  route("/:id").get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);


  router.get("/logs", (req, res) => {
    fs.readFile("log.txt", 'utf8', (error, data) => {
      if (error) {
      
        res.status(500).send('Error reading log file');
        return ;
      }
      console.log(data);
      return res.json({message:"Reading logs"})
    });
  });
  
  router.post("/signup",handleCreateNewUser);
  
   module.exports = router;