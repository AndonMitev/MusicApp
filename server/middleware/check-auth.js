const jwt = require('jsonwebtoken');
const env = require('../config/envoirment');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const verify = jwt.verify(token, env.dev.JWT_KEY);
    req.userData = verify;
    console.log(req.userData);
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};
