const cand_es_json = require('../dados/dados_json/cand_es.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_es_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };