const mongoose = require('mongoose');
const router = require('express').Router();
const Album = mongoose.model('Album');
const Category = mongoose.model('Category');
const json = require('../../middleware/responseJSON');

const createAlbum = async (req, res) => {
  try {
    let { title, image, year, category, author } = req.body;
    year = +year;

    const selectedCategory = await Category.findOne()
      .where('title')
      .equals(category);

    if (!selectedCategory) {
      return res.status(400).json(selectedCategory);
    }

    category = selectedCategory.title;

    const album = await Album.create({ title, image, year, category, author });
    const albumId = mongoose.Types.ObjectId(album._id);
    selectedCategory.albums.push(albumId);
    await selectedCategory.save();

    return res.status(201).json(album);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    return res.status(400).json(error);
  }
};

router.post('/albums/add', createAlbum).get('/albums/all', getAllAlbums);

module.exports = router;
