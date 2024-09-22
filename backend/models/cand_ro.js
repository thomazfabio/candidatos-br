const cand_ro_json = require('../dados/dados_json/cand_ro.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ro_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };