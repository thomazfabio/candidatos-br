const { getCidadePorSiglaUf } = require('../models/cidades');

function getCidade(sigla) {
    let data = getCidadePorSiglaUf(sigla);
    return data;
}

module.exports = { getCidade };