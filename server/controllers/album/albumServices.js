const mongoose = require('mongoose');
const router = require('express').Router();
const Album = mongoose.model('Album');
const Categories = mongoose.model('Categories');
const json = require('../../middleware/responseJSON');

const createAlbum = async (req, res) => {
  try {
    let { title, image, year, author } = req.body;
    year = +year;
    const categories = await Categories.findById(req.body.categories._id);

    if (!categories) {
      return res.status(400).json(selectedCategory);
    }

    const album = await Album.create({
      title,
      image,
      year,
      categories,
      author
    });
    const albumId = mongoose.Types.ObjectId(album._id);
    categories.albums.push(albumId);

    await categories.save();
    return res.status(201).json(album);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate('categories');
    console.log(albums);
    return res.status(200).json(albums);
  } catch (error) {
    return res.status(400).json(error);
  }
};

router.post('/albums/add', createAlbum).get('/albums/all', getAllAlbums);

module.exports = router;
