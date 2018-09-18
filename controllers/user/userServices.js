const User = require('mongoose').model('User');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const env = require('../../config/envoirment');

const registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const userExist = await User.findOne({ username });

    if (userExist) {
      return res.status(409).json({
        message: 'Username already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ username, email, hashedPassword });

    return res.status(201).json({
      message: 'User created',
      username,
      email,
      userId: user._id
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const loginUser = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({
        message: info || 'Login error',
        user
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }

      const { username, email, _id } = user;
      jwt.sign(
        { username, _id },
        env.dev.JWT_KEY,
        { expiresIn: '2h' },
        (error, token) => {
          if (error) {
            return res.json({ error });
          }
          return res.status(200).json({ username, email, _id, token });
        }
      );
    });
  })(req, res);
};

const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(_id);

    if (deletedUser) {
      return res.status(200).json({
        message: 'User were succesfully deleted.'
      });
    }

  } catch (error) {
    res.status(500).json({ error });
  }
};

router
  .post('/register', registerUser)
  .post('/login', loginUser)
  .delete('/delete/:id', deleteUser);

module.exports = router;
