const mongoose = require('mongoose');

const databaseConnection = async ()=>{
  await  mongoose.connect('mongodb://localhost:27017/devTinder');
}
 

module.exports = databaseConnection ;