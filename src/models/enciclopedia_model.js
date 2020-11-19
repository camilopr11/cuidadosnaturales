const mongoose = require('mongoose');
const { Schema } = mongoose;

const enciclopediaSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('enciclopedia', enciclopediaSchema);