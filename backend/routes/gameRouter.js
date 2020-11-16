const express = require('express');
const router = express.Router();
const Card = require('../models/cardModel')

router.get('/', async (req, res) => {
  try {
    const game = await Card.find();
    res.json(game);    
  } catch (error) {
    res.send(500).end();
  }
})

module.exports = router;
