const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv').config();

const cors = require('cors');
const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: true });

const PORT = 8080;


const app = express();

app.use(cors());
app.use(helmet());
app.use(jsonParser);
app.use(urlEncoded);


app.get('/', (req, res) => {
  res.send('Hoteru says "Hello"!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));