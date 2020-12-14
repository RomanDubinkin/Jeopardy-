require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const path = require('path');
// const bcrypt = require('bcrypt');
const dbConnect = require('./db');
const gameRouter = require('./routes/gameRouter')
const userRouter = require('./routes/userRouter')
const createTable = require('./seed')
const ws = require('ws');


const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3100;

dbConnect();
// createTable();
app.set('session cookie name', 'sid');
app.set('trust proxy', 1);
app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Credentials', true);
  res.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Credentials");
  res.send('ok');
});


app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      path: '/',
      maxAge: 1000*60*2,
      sameSite: 'none',
      secure: true,
      httpOnly: false,
    },
  })
);

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user.login;
  }
  next();
});

app.use('/', userRouter);
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
