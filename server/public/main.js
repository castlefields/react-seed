var express = require('express');
var path = require('path');

var router = express.Router();

/* Since this is a single page app, the only thing necessary to do here
should be sending index.html, but you could add routes to for other
pages if necessary */
router.route('/')
  .get(function(req, res) {
    res.sendFile('../../build/index.html', { root: __dirname });
  });

module.exports = router;