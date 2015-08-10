var express    = require('express')
  , app        = express()
  , bodyParser = require('body-parser');

require('./lib/mongodb');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('templates/artists');
})

app.get('/newartist', function (req, res) {
  res.render('templates/newartist')
})

app.post('/artist/create', function (req, res){
  var collection = global.db.collection('artists');

  collection.save(req.body, function () {
    res.redirect('/')
  });
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%d', port);
});
