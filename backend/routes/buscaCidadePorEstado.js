var express = require('express');
var router = express.Router();
const {getCidade } = require('../controllers/controll_cidades.js')

router.get('/:sigla', function (req, res, next) {
    let cidade = getCidade(req.params.sigla);
    res.send(cidade);
});
module.exports = router;