'use strict';

var express = require('express');
var router = express.Router();

// var Clog = require('../modules/clog');
// clogs router
//
// root/clogs/...
var clogs = ['clog1', 'clog2'];

    router.get('/', (req, res) => {
        res.send('all cars\n');
    });



module.exports = router;
