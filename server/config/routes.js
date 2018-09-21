const router = require('express').Router();
const playlistServices = require('../controllers/playlist/playlistServices');
const userServices = require('../controllers/user/userServices');
const categoryServices = require('../controllers/category/categoryServices');
const albumServices = require('../controllers/album/albumServices');
const songServices = require('../controllers/song/songServices');

router.use('/user', userServices);
router.use('/playlist', playlistServices);
//Care
router.use('/music', categoryServices);
router.use('/album', albumServices);
router.use('/song', songServices);
module.exports = router;
