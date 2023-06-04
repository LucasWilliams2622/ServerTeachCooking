const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " @ "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":"
  + currentdate.getSeconds();

const userSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String, },
  email: { type: String, default: "", unique: true },
  description:{type:String},
  password: { type: String, required: true },

  gender: { type: Boolean, default: true },//true female false male
  dob: { type: Date, default: Date.now },
  avatar: { type: String, default: "" },
  createAt: { type: Date, default: Date.now },
  updateAt:{ type: Date, default: Date.now },

  role: { type: Number, default: 1 },
  isLogin:{type:Boolean,default:false},
  isActive:{type:Boolean,default:true},
  // isVerified: { type: Boolean , default: false},
  // verificationCode: { type: String },
 
});

module.exports = mongoose.models.user || mongoose.model('User', userSchema);
