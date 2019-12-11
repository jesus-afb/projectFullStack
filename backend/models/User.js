const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');
const mongoose  = require('mongoose');

const userSchema = new Schema(
  {
    address: {
      type: String,
    //  required:true
    },
    email:{ 
      type:String,
      //required:true
    },
    name:{
      type:String,
     // required: true
    },
    clave_edificio:{
      type:String,
     // required:true
    },
    phone:{
      type:String
    },
    administrator:{
      type:Boolean,
      default:false,
     // required: true
    },

    id_building:{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref:'Building',
     // required: true
  }},
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
