const express = require('express');

const router = express.Router();
const Card = require('../models/cardModel');

router.get('/:title', async (req, res) => {
  try {
    const game = await Card.findOne({ title: req.params.title }).lean();
    console.log(game);
    res.json(game);
  } catch (error) {
    res.send(500).end();
  }
});

module.exports = router;
