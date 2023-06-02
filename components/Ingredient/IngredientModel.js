const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ingredientSchema = new mongoose.Schema({
  id: { type: ObjectId },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
});

module.exports = mongoose.models.ingredient || mongoose.model('Ingredient', ingredientSchema);