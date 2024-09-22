const cand_ba_json = require('../dados/dados_json/cand_ba.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ba_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };