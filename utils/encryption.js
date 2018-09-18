const crypto = require('crypto');

const generateSalt = () => crypto.randomBytes(128).toString('base64');

const generateHashedPassword = (salt, password) =>
  crypto
    .createHmac('sha256', salt)
    .update(password)
    .digest('hex');

module.exports = { generateSalt, generateHashedPassword };
