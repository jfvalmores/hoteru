const mongoose = require('mongoose');

mongoose
  .connect(`${process.env.DB_HOST}${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connection successful.'))
  .catch(e => console.error('Database connection error.', e.message));

const db = mongoose.connection;

module.exports = db;