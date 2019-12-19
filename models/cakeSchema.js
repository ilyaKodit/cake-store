const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cakeSchema = new Schema({
    name: String,
    cost: Number,
    image: String,
    kind: String,
});

module.exports = mongoose.model('cake', cakeSchema);
