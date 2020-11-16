const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  question: [{
    title: String,
    answer: String,
    price: Number,
  }],
});


module.exports = mongoose.model('Card', cardSchema);
