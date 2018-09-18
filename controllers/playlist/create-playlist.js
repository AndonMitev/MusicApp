const router = require('express').Router();
const checkAuth = require('../../middleware/check-auth');

const playlist = (req, res) => {
  res.json({
    message: 'You need to be haaaaaaaaaaaaah'
  });
};

const postPlaylist = (req, res) => {
  res.json({
    message: 'Authenticated onwaly'
  });
};

router
  .get('/my', playlist)
  .post('/add', checkAuth, postPlaylist);

module.exports = router;
