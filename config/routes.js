const router = require('express').Router();
const playlistServices = require('../controllers/playlist/create-playlist');
const userServices = require('../controllers/user/userServices');

router.use('/user', userServices);
router.use('/playlist', playlistServices);
module.exports = router;
