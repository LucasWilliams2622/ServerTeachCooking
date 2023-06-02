const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const stepSchema = new mongoose.Schema({
  id: { type: ObjectId },
  content:{
    type:String,
  },
  numStep:{
    type:Number,
  }

});


module.exports = mongoose.models.step || mongoose.model('Step', stepSchema);
