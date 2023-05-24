const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const recipeSchema = new mongoose.Schema({
  id: { type: ObjectId },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  ingredients: {
    type: [String],
    required: true
  },
  steps: {
    type: [String],
    required: true
  },
  time: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,

  },
  mealType: {
    type: String,

  },
  author: {
    type: String,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.models.recipe || mongoose.model('Recipe', recipeSchema);
