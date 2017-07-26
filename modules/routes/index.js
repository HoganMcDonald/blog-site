//requires
const router = require('express').Router(),
  path = require('path');

//routes
router.get('/', (req, res) =>
  res.sendFile(path.resolve('public/views/index.html'))
); //end base url

//exorts
module.exports = router;
