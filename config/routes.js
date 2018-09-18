const router = require('express').Router();
const playlistServices = require('../controllers/playlist/playlistServices');
const userServices = require('../controllers/user/userServices');
const categoryServices = require('../controllers/category/categoryServices');

router.use('/user', userServices);
router.use('/playlist', playlistServices);
router.use('/category', categoryServices);
module.exports = router;
