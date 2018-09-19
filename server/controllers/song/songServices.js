const router = require('express').Router();
const mongoose = require('mongoose');
const Song = mongoose.model('Song');
const Album = mongoose.model('Album');
const json = require('../../middleware/responseJSON');

const addSong = async (req, res) => {
  try {
    const { album, title, author } = req.body;

    const selectedAlbum = await Album.findOne()
      .where('title')
      .equals(album);

    if (!selectedAlbum) {
      return json(res, 400, 'Invalid album');
    }

    const song = await Song.create({ title, album, author });
    const songId = mongoose.Types.ObjectId(song._id);
    selectedAlbum.songs.push(songId);
    await selectedAlbum.save();

    return json(res, 201, 'Success', song);
  } catch (error) {
    return json(res, 400, error);
  }
};

router.post('/create', addSong);

module.exports = router;
