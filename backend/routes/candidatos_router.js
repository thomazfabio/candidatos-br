var express = require('express');
var router = express.Router();
const { getAllCandMT } = require('../controllers/controll_cand_mt')



router.get('/', function(req, res, next) {
  let allCandMt = getAllCandMT();
  res.send("allCandMt");
});

module.exports = router;