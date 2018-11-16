const app = require('./server');

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
