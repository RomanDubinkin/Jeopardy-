const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { unique: true, required: true, type: String },
  password: { required: true, type: String },
  name: {required: true, type: String}
  score: 0,
});

module.exports = mongoose.model('User', userSchema);
