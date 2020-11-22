const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  users: [{
      login: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      score: {type: Number, default: 0},
  }]
});

module.exports = mongoose.model('Game', gameSchema);
