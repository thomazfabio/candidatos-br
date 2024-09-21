var express = require('express');
var router = express.Router();
const { getCidadePorSiglaUf } = require('../models/cidades');

router.get('/:estado', function (req, res, next) {
    let estado = req.params.estado;
    let cidades = getCidadePorSiglaUf(estado);
    console.log(estado);
    res.send(cidades);
});

module.exports = router;