const mongoose = require('mongoose');


const loginSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      pasword:{
        type:String,
        required:true
      },
    
})


module.exports = mongoose.model('login',loginSchema);

