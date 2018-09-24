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

    const selectedAlbumId = mongoose.Types.ObjectId(selectedAlbum._id);
    const song = await Song.create({ title, author, selectedAlbumId });
    const songId = mongoose.Types.ObjectId(song._id);
    
    selectedAlbum.songs.push(songId);
    await selectedAlbum.save();

    return res.status(201).json(song);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    if (!songs) {
      return res.status(404).json('Not found');
    }

    return res.status(200).json(songs);
  } catch (error) {
    return res.status(400).json(error);
  }
};

router.post('/songs/add', addSong).get('/songs/all', getSongs);

module.exports = router;
