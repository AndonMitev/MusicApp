const jwt = require('jsonwebtoken');
const env = require('../config/envoirment');

module.exports = (req, res, next) => {
  try {
    console.log(req.body);
    const verify = jwt.verify(req.body.token, env.dev.JWT_KEY);
    req.userData = verify;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};
