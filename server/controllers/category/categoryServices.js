const router = require('express').Router();
const checkAuth = require('../../middleware/check-auth');
const Category = require('mongoose').model('Category');
const json = require('../../middleware/responseJSON');

const createCategory = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const category = await Category.create({ title, imageUrl });

    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCategories = async (req, res) => {
  try {
    console.log(req.userData);
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).error;
  }
};

const likeCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const userId = req.userData._id;
    let category = await Category.findById(categoryId);

    if (category.likes.indexOf(userId) !== -1) {
      category.likes = category.likes.filter(id => id != userId);
    } else {
      category.likes.push(userId);
    }

    await category.save();

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const categoryDetails = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCategoryByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    const category = await Category.findOne({ title });
    console.log(category);

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json(error);
  }
};

/*const editCategory = async (req, res) => {
  console.log(req.body);
  try {
    //const category = await Category.findById
  } catch (error) {
    return res.status(400).json(error);
  }
}; */

router
  .post('/categories/create', createCategory)
  .get('/categories/all', getCategories)
  .put('/categories/like/:id', checkAuth, likeCategory)
  .get('/categories/details/:id', categoryDetails)
  .get('/categories/:title', getCategoryByTitle);

module.exports = router;
