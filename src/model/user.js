const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
        validate(value){
              if(value.length <= 3){
          throw new Error('Name must be at least 3 characters long');
              }
        }
    
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
    trim:true,
    validate(value){
       if(!validator.isEmail(value)){
        throw new Error("Invalid email id "+value);
       }
    }

  },
  age: {
    type: Number,
    min: 18,
  },
  number: {
    type: Number,
  },
  gender:{
    type:String,
    validate(value){
     if(!['male','female','others'].includes(value)){
          throw new Error('Gender data is not valid');
     }
    }
  },
  skills:{
    type:[String]
  },
  photoUrl: {
    type: String,
    default:
      "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png",
  }
},
{
    timestamps : true
}
);

module.exports = mongoose.model("User", userSchema);
