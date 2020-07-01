// require('dotenv').config();
import 'dotenv/config';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import database from './app/core/Database';

const cors = require('cors');
const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: true });

const APP_SECRET = process.env.APP_SECRET;
const APP_SESS_AGE = process.env.APP_SESS_AGE;
const APP_CLIENT_URL = process.env.APP_CLIENT_URL;

const corsOptions = {
  credentials: true,
  origin: [APP_CLIENT_URL]
};

const server = express();

server.use(helmet());
server.use(cors(corsOptions));
server.use(jsonParser);
server.use(urlEncoded);
server.use(session({
  resave: true,
  saveUninitialized: false,
  secret: APP_SECRET,
  cookie: {
    maxAge: 300000,
  }
}));

export default server;