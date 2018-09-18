const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const playlistSchema = new mongoose.Schema({
  owner: {
    type: ObjectId,
    ref: 'User',
    required: [true, 'User is required to create playlist']
  },
  playlistName: {
    type: String,
    required: [true, 'Playlist name is required'],
    unique: [true, 'Playlist name must be unique']
  },
  createdOn: { type: Date, default: Date.now },
  songsUrl: [{ type: String, default: [] }]
});
const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
