var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');

  collection.find().toArray(function (err, artists) {
    var artistsCol = artists.map(function (artist) {
      return {
        _id:   artist._id,
        name:  artist.name,
        genre: artist.genre,
        bio:   artist.bio
      };
    });
    res.render('templates/artists', {artists: artistsCol});
  })
})

//app.get('/artist/search', function (req, res) {
router.get('/artist/search', function (req, res) {
  var name = req.query.name;
  var collection = global.db.collection('artists');
  collection.find({name: { $regex : new RegExp(name, "i") } }).toArray(function (err, artists){
    var found = artists.map(function (artist){
      return {
        _id:   artist._id,
        name:  artist.name,
        genre: artist.genre,
        bio:   artist.bio
      };
    });
  res.send(found)
  })
})

router.get('/newartist', function (req, res) {
  res.render('templates/newartist');
})

router.post('/newartist', function (req, res){
  var collection = global.db.collection('artists');

  collection.save(req.body, function () {
    res.redirect('/');
  });
})

module.exports = router;
