const express = require('express');

const router = express.Router();
const Card = require('../models/cardModel');

router.get('', async (req, res) => {
  try {
    const themes = await Card.find({}, 'title').lean();
    console.log(themes);
    res.json(themes);
  } catch (error) {
    res.send(500).end();
  }
});

router.get('/:title', async (req, res) => {
  try {
    const game = await Card.findOne({ title: req.params.title }).lean();
    res.json(game);
  } catch (error) {
    res.send(500).end();
  }
});

module.exports = router;
