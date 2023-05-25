const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const commentSchema = new mongoose.Schema({
    id: {
        type: ObjectId
    },
    name: {
        type: String,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        ref: 'User'
    }
});

const Ingredient = mongoose.model('Comment', commentSchema);

module.exports = Ingredient;
