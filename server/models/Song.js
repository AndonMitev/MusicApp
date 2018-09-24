const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const songSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Name song is required.'] },
  author: { type: String, required: [true, 'Singer name is required.'] },
  selectedAlbumId: {
    type: ObjectId,
    ref: 'Album',
    required: [true, 'Album is required.']
  },
  likes: { type: [ObjectId], ref: 'User', default: [] },
  createdOn: { type: Date, default: Date.now }
});
const Song = mongoose.model('Song', songSchema);
module.exports = Song;
