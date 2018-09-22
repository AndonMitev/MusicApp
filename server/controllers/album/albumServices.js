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
      return json(res, 400, 'Invalid Category');
    }

    category = selectedCategory.title;

    const album = await Album.create({ title, image, year, category, author });
    const albumId = mongoose.Types.ObjectId(album._id);
    selectedCategory.albums.push(albumId);
    await selectedCategory.save();

    return json(res, 201, 'Success', album);
  } catch (error) {
    return json(res, 400, 'Error', error);
  }
};

router.post('/albums/add', createAlbum);

module.exports = router;
