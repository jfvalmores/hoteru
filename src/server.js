// require('dotenv').config();
import 'dotenv/config';

const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const database = require('./app/core/Database');

const cors = require('cors');
const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: true });

const PORT = process.env.PORT;
const APP_SECRET = process.env.APP_SECRET;
const APP_SESS_AGE = process.env.APP_SESS_AGE;
const APP_CLIENT_URL = process.env.APP_CLIENT_URL;

const corsOptions = {
  credentials: true,
  origin: [APP_CLIENT_URL]
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(jsonParser);
app.use(urlEncoded);
app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: APP_SECRET,
  cookie: {
    maxAge: 300000,
  }
}));

/**
  app.use('/api', [
    // ROUTES
  ]);
 */

database.once('error', console.error.bind(console, 'MongoDB connection failed!'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/test', (req, res) => {
  const tests = require('./tests');
  res.send(tests.run());
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));