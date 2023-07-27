// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  // console.log('api/whoami/ with object \n',req)
  // console.log('api/whoami/ with object \n',req.headers)
  // console.log('api/whoami/ with object \n',req.headers['user-agent'])
  // console.log('api/whoami/ with object \n',req.headers['accept-language'])
  // console.log('api/whoami/ with object \n', Object.keys(req) )
  
  res.json({
    ipaddress: req.ip,
    language:  req.headers['user-agent'],
    software:  req.headers['accept-language']
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// WHOAMI: 
// json structure: {ipaddress :, language ,: software : }
// {"ipaddress":"159.20.14.100",
// "language":"en-US,en;q=0.5", 
// "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}