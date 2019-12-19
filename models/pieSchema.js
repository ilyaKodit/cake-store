const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pieSchema = new Schema({
    name: String,
    cost: Number,
    image: String,
});

module.exports = mongoose.model('pie', pieSchema);
