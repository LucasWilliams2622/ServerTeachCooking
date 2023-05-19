const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        ref: 'User'
    }
});

const Ingredient = mongoose.model('Comment', commentSchema);

module.exports = Ingredient;
