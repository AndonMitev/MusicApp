const jwt = require('jsonwebtoken');
const env = require('../config/envoirment');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const verify = jwt.verify(req.body.token, env.dev.JWT_KEY);
    req.userData = verify;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};
