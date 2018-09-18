const mongoose = require('mongoose');
const env = require('./envoirment').dev;
require('../models/User');

const dbConnection = mongoose.connect(
  env.connectionString,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Mongoose is ready!`);
  },
);

module.exports = dbConnection;
