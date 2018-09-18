const mongoose = require('mongoose');
const encryption = require('../utils/encryption');

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  hashedPassword: { type: String }
});

userSchema.method({
  authenticate: function(password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.hashedPass
    );
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
