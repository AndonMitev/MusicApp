const mongoose = require('mongoose');
const env = require('./envoirment').dev;
mongoose.Promise = global.Promise;
require('../models/User');
require('../models/Playlist');
require('../models/Category');
require('../models/Album');
require('../models/Song');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

const dbConnection = mongoose.connect(
  env.connectionString,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Mongoose is ready!`);
  }
);

module.exports = dbConnection;
