const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  question: [{
    title: String,
    answer: String,
    price: Number,
  }],
});

module.exports = mongoose.model('Card', cardSchema);
