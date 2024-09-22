const cand_rr_json = require('../dados/dados_json/cand_rr.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_rr_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };