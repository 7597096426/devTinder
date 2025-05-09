const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req,res) => {

  const user = new User(req.body);

  try{
  await user.save();
  res.send("user added successfully");
  }catch(err){
   res.status(400).send("something went wrong");
  }
});

connectDb()
  .then(() => {
    console.log("db connected successfully");
    app.listen(7777, () => {
      console.log("server running successfully");
    });
  })
  .catch((err) => {
    console.log("error in db connection");
  });
