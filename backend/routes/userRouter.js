const express = require('express');
// const bcrypt = require('bcrypt');
require('dotenv').config();

const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;
 
  try {
    console.log("req.body", req.body);

    // const userPassword = await bcrypt.hash(password, 10);

    let newUser = User.create({
      name,
      email,
      password,
    });
    
    req.session.user = newUser;

    return res.json({
      id: newUser._id,
      login: newUser.name,
      email: newUser.email,
      status: 'ok',
    });
  } catch (error) {
    return res.json({ error: 'User is already exists or data is not correct!'})
  }
});

router.post('/login', async (req, res) => {

  const {email, password} = req.body;
  console.log("trying to login :>>>>>>>req.body", req.body);

  try {
    const findUser = await User.findOne({email});
    if ((findUser) && findUser.password === password) {
      req.session.user = findUser;
      console.log('login status: success>>>>')
      return res.json({
        id: findUser._id,
        login: findUser.name,
        email: findUser.email,
        status: 'ok',
      })
    }
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
