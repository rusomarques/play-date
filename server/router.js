const router = require('express').Router();
const fs = require('fs');
const conf = require('./config.js');
const eventsController = require('./controllers/eventsController.js');
const usersController = require('./controllers/usersController.js');
const authMiddleware = require('./middlewares/authMiddleware');

let _404;

fs.readFileSync(conf.clientPath + '/404.html', 'utf8', (err, data) => {
  if (err) _404 = '404: The requested URL was not found on this server.';
  else _404 = data;
});

router.get('/events', eventsController.getAll);
router.get('/events/:id', eventsController.getEvent);
router.post('/events', eventsController.createEvent);
router.post('/signup', usersController.signup);
router.get('/*', (req, res) => res.status(404).send('page not found'));

module.exports = router;
