const mongoose = require('mongoose');


const cardsSchema = new mongoose.Schema({
    Header:{
        type:String,
        required:true
      },
      title:{
        type:String,
        required:true
      },
      text:{
        type:String,
        required:true
      },
      number:{
        type:String,
        required:true
      }

    
})


module.exports = mongoose.model('card',cardsSchema);

