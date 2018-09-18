const router = require('express').Router();
const checkAuth = require('../../middleware/check-auth');
const Playlist = require('mongoose').model('Playlist');
const json = require('../../middleware/responseJSON');

const myPlaylist = async (req, res) => {
  try {
    const playlistId = req.params.id;
    const playlist = await Playlist.findOne({ _id: playlistId });

    if (playlist) {
      return json(res, 200, 'Success', playlist);
    }

    return json(res, 404, 'Invalid playlist');
  } catch (error) {
    return json(res, 500, error);
  }
};

const createPlaylist = async (req, res) => {
  try {
    const { playlistName } = req.body;
    const owner = req.userData._id;
    const playlist = await Playlist.create({ owner, playlistName });

    return json(res, 201, 'Playlist created', playlist);
  } catch (error) {
    return json(res, 400, error);
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const playlistId = req.params.id;
    const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);

    if (deletedPlaylist) {
      return json(res, 200, 'Deleted');
    }

    return json(res, 404, 'Invalid playlist');
  } catch (error) {
    return json(res, 500, error);
  }
};

const editPlaylist = async (req, res) => {
  try {
    const playlistId = req.params.id;
    const playlistToEdit = await Playlist.findById(playlistId);

    if (!playlistToEdit) {
      return json(res, 404, 'Invalid playlist');
    }

    const { playlistName } = req.body;
    playlistToEdit.playlistName = playlistName;
    const newPlaylist = await playlistToEdit.save();

    return json(res, 200, 'Playlist successfully updated', newPlaylist);
  } catch (error) {
    return json(res, 400, error);
  }
};

router
  .get('/:id', checkAuth, myPlaylist)
  .post('/add', checkAuth, createPlaylist)
  .delete('/delete/:id', checkAuth, deletePlaylist)
  .put('/edit/:id', checkAuth, editPlaylist);

module.exports = router;
