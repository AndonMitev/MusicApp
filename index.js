const express = require('express');
const env = require('./config/envoirment');
require('./config/database');

const app = express();

require('./config/express')(app);

app.listen(env.dev.port, () =>
  console.log(`Server is running on port: ${env.dev.port}...`)
);
