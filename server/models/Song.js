const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const songSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Name song is required.'] },
  album: { type: objectId, required: [true, 'Album is required'] },
  author: { type: String, required: [true, 'Singer name is required.'] },
  createdOn: { type: Date, default: Date.now }
});
const Song = mongoose.model('Song', songSchema);
module.exports = Song;
