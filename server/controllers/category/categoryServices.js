const router = require('express').Router();
const checkAuth = require('../../middleware/check-auth');
const Category = require('mongoose').model('Category');
const json = require('../../middleware/responseJSON');

const createCategory = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const category = await Category.create({ title, imageUrl });

    return json(res, 201, category);
  } catch (error) {
    return json(res, 400, error);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return json(res, 200, 'All categories', categories);
  } catch (error) {
    return json(res, 404, 'Not found');
  }
};

router
  .post('/categories/create', createCategory)
  .get('/categories/all', getCategories);

module.exports = router;
