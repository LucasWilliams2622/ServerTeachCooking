const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const favoriteSchema = new Schema({
    id: { type: ObjectId },
    idRecipe:{type:ObjectId,ref:'Recipe'},
    idUser:{type:ObjectId,ref:'User'},
})
module.exports = mongoose.models.favorite || mongoose.model('Favorite', favoriteSchema);