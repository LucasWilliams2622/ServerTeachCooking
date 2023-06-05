const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const recipeSchema = new mongoose.Schema({
  id: { type: ObjectId },
  title: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: true, },

  ingredients: { type:Array, ref: 'Ingredient', required: true },
  steps: { type: [String], ref: 'Step', required: true },
  category: { type: [String], ref: 'Category' },
  idComment: { type: [String], ref: 'Comment', },
  author: { type: [String], required: true, ref: 'User', },

  idVideo: { type: String, },
  difficulty: { type: String, },
  mealType: { type: String, },
  time: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now, },
  updatedAt: { type: Date, default: Date.now, },

});


module.exports = mongoose.models.recipe || mongoose.model('Recipe', recipeSchema);
