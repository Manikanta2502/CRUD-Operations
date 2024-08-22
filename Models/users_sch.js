const mongoose = require('mongoose');

const user_Schema = new mongoose.Schema({
     name: {
        type : String,
        required: true,
        min: 6
     },
     email: {
        type: String,
        required: true,
        min: 6,
        max: 255
     },
     password: {
        type: String,
        required: true,
        min: 6
     },
     items : [
      {
         type: mongoose.Schema.Types.ObjectId,ref: 'Items'
      }
     ],
     date: {
        type: Date,
        default: Date.now
     }

});

const Users = mongoose.model('Users',user_Schema)

module.exports = Users;