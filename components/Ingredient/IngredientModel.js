const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ingredientSchema = new mongoose.Schema({
  id: { type: ObjectId },

  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  idRecipe: {
    type: ObjectId,
    ref: 'Recipe',
    required: true
  }
});

module.exports = mongoose.models.ingredient || mongoose.model('Ingredient', ingredientSchema);