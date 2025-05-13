const express = require("express");
const app = express();
const databaseConnection = require("./config/database");
const User = require("./model/user");
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("user saved successfully");
  } catch (err) {
    res.status(400).send('Error saving the user: '+err.message);
  }
});

app.get("/getUser", async (req, res) => {
  try {
    const userData = await User.find();
     res.send(userData);
  } catch (err) {
    res.status(400).send('something went wrong');
  }
});

app.delete('/user/:id',async (req,res)=>{  
try{
    const userId = req.params.id;
    //const UserId = req.body.userId ;
    await User.findByIdAndDelete(userId);
    res.send('user deleted successfully');
}catch(err){
    res.status(400).send('something wents wrong');
}
});

app.patch('/user/:id',async (req,res)=>{
    try{
    const userId  = req.params.id ;
    await User.findByIdAndUpdate(userId,req.body,{ runValidators: true, context: 'query' });
    res.send('user updated successfully');
    }catch(err){
     res.status(400).send('error on updateing data '+ err.message);
    }
})

databaseConnection()
  .then((result) => {
    console.log("database connected successfully");
    app.listen(7777, () => {
      console.log("server starts on port 7777");
    });
  })
  .catch((err) => {
    console.log("error in db connection");
  });
