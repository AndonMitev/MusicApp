const router = require('express').Router();
const checkAuth = require('../../middleware/check-auth');
const Category = require('mongoose').model('Category');
const json = require('../../middleware/responseJSON');

const createCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const category = await Category.create({ title });
 
    return json(res, 201, category)
  } catch (error) {
    return json(res, 400, error)
  }
};

router.post('/create', createCategory);

module.exports = router
