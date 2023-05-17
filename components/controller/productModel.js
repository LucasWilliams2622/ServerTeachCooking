const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price:{type: Number},
    quantity:{type:Number},
    date:{type:Date,default:null},//khoa ngoai
});

module.exports =mongoose.models.product || mongoose.model('product', productSchema);