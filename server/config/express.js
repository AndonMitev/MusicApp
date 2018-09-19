const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');

const expressSetup = app => {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(routes);
};

module.exports = expressSetup;
