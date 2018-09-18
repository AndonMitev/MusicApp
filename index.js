const express = require('express');
const env = require('./config/envoirment');
require('./config/database');
require('./passport/passport-sign-in');
const app = express();

require('./config/express')(app);

app.listen(env.dev.port, () =>
  console.log(`Server is running on port: ${env.dev.port}...`)
);
