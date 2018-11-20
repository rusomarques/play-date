const usersController = {};

usersController.signup = async (req, res) => {
  if (req.body.token) {
    // console.log('cookie set');
    res.cookie('fbToken', `${req.body.token}`, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    });
  }

  res.status(200).send('cookie set');
};

module.exports = usersController;
