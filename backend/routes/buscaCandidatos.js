var express = require('express');
var router = express.Router();
const controll_busca_cand = require('../controllers/controll_busca_cand.js');

router.get('/:estado/:cidade', function (req, res, next) {
    let estado = req.params.estado;
    let cidade = req.params.cidade;
    let candidatos = controll_busca_cand.getCand(estado, cidade);
    res.send(candidatos);
});

module.exports = router;