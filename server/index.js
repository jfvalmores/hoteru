const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const database = require('./app/core/Database');

const cors = require('cors');
const db = require('./app/core/Database');
const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: true });

const PORT = process.env.PORT;


const app = express();

app.use(cors());
app.use(helmet());
app.use(jsonParser);
app.use(urlEncoded);

db.once('error', console.error.bind(console, 'MongoDB connection failed:'));


app.get('/', (req, res) => {
  res.send('Hoteru says "Hello"!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));