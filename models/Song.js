const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Name song is required.'] },
  author: { type: String, required: [true, 'Singer name is required.'] },
  createdOn: { type: Date, default: Date.now }
});
const Song = mongoose.model('Song', songSchema);
module.exports = Song;
