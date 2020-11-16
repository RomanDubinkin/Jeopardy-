const mongoose = require('mongoose');
const Card = require('./models/cardModel')

async function createTable() {
  let theme1 = await new Card({
    title: 'Money',
    question: [{
      title: 'Что изображено на купюре 50 рублей?',
      answer: 'Санкт-Петербург',
      price: 200,
    }, {
      title: 'Что изображено на купюре 100 рублей?',
      answer: 'Москва',
      price: 400,
    }, {
      title: 'Что изображено на купюре 200 рублей?',
      answer: 'Севастополь',
      price: 600,
    }, {
      title: 'Что изображено на купюре 500 рублей?',
      answer: 'Архангельск',
      price: 800,
    }, {
      title: 'Что изображено на купюре 5000 рублей?',
      answer: 'Хабаровск',
      price: 1000,
    }]
  })
  await theme1.save();
}

module.exports = createTable;
