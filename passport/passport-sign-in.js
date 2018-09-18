const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, cb) => {
      try {
        const user = await User.findOne({ username });

        if (!user || !user.authenticate(password)) {
          return cb(null, false, {
            message: 'Incorrect username or password'
          });
        }

        return cb(null, user, {
          message: 'Logged in successfully'
        });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
