const fetch = require('node-fetch');

module.exports = async function authMiddleware(
  req,
  res,
  next,
  fbv = fbValidator
) {
  // console.log('coooookie', req.cookies.fbToken);
  // return next();

  if (!req.fbToken) {
    res.status(401).send('no token');
  }
  if (req.fbToken) {
    if (fbv(req.fbToken)) {
      next();
    } else {
      res.status(401).send('invalid token');
    }
  }
  // res.status(401).send('no token');
};

function fbValidator(token) {
  return fetch(
    `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${
      process.env.FB_AUTH_TOKEN
    }`
  )
    .then(res => res.json())
    .then(res => res.data.is_valid);
}
