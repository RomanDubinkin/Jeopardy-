require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const path = require('path');
const dbConnect = require('./db');
const gameRouter = require('./routes/gameRouter')
const createTable = require('./seed')
const ws = require('ws');


const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3100;

dbConnect();
// createTable();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const FileStore = sessionFileStore(session);
app.use(
  session({
    name: app.get('session cookie name'),
    secret: process.env.SESSION_SECRET,
    store: new FileStore({
      secret: process.env.SESSION_SECRET,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user.login;
  }
  next();
});

// app.use('/', userRouter);
app.use('/game', gameRouter);

const clients = [];
const httpsServer = app.listen(PORT);
const wsServer = new ws.Server({ server: httpsServer });
wsServer.on('connection', (client) => {
  clients.push(client);
  client.on('message', (data) => {
    console.log(data);
    clients.forEach((c) => c.send(data));
  });
});
