var express    = require('express')
  , bodyParser = require('body-parser')
  , app        = express()
  , routes     = require('./routes')

require('../lib/mongodb');

app.set('view engine', 'ejs');

app.use('/', routes);
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%d', port);
});
