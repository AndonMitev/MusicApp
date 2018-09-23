const router = require('express').Router();
const mongoose = require('mongoose');
const Song = mongoose.model('Song');
const Album = mongoose.model('Album');

const addSong = async (req, res) => {
  try {
    const { album, title, author } = req.body;

    const selectedAlbum = await Album.findOne()
      .where('title')
      .equals(album);

    if (!selectedAlbum) {
      return res.status(404).json(`Not Found`);
    }

    const song = await Song.create({ title, album, author });
    const songId = mongoose.Types.ObjectId(song._id);
    selectedAlbum.songs.push(songId);
    await selectedAlbum.save();

    return res.status(201).json(song);
  } catch (error) {
    return res.status(400).json(error);
  }
};

router.post('/songs/add', addSong);

module.exports = router;
