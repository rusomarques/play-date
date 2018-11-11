const express = require('express');
const app = express();
const bodyParser = express.json();
const cors = require('cors');
const conf = require('./config.js');
const router = require('./router.js');
const db = require('./models');

app.use(cors());
app.use(bodyParser);
app.use(express.static(conf.clientPath));
app.use(router);

(async () => {
  try {
    // await db.sequelize.sync();
    const port = 3002;
    app.listen(port);
    console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
