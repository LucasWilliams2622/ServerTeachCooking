const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const stepSchema = new mongoose.Schema({
  id: { type: ObjectId },
  description:{
    type:String,
  },
  order:{
    type:Number,
  },
  idRecipes: [{
    type: ObjectId,
    ref: 'Recipe'
  }]
});


module.exports = mongoose.models.step || mongoose.model('Step', stepSchema);
