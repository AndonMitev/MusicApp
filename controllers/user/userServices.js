const User = require('mongoose').model('User');
const router = require('express').Router();
const bcrypt = require('bcrypt');
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

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid data' });
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.hashedPassword
    );

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid data' });
    }

    const { email, username, _id } = user;
    const token = await jwt.sign({ email, username, _id }, env.dev.JWT_KEY, {
      expiresIn: '7d'
    });

    return res
      .status(200)
      .json({ message: 'Successfully logged', token, email, username, _id });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
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
