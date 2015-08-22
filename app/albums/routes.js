var express = require('express');
var router = express.Router();

router.get('/newalbum', function (req, res) {
  res.render('templates/newalbum');
})

module.exports = router;
