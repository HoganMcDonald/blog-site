//requires
const express = require('express'),
  index = require('./modules/routes/index');

const app = express();
const port = process.env.PORT || 9000;

//uses
app.use(express.static('public'));

//routes
app.use('/', index);

//spin up server
app.listen(port, () => console.log('up on port', port));
