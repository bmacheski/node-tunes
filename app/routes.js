var express = require('express');
var router = express.Router();

var artists = require('./artists/routes');
var albums = require('./albums/routes');

router.use('/', artists);
router.use('/albums', albums);

module.exports = router;
