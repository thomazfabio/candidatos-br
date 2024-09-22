const cand_ma_json = require('../dados/dados_json/cand_ma.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ma_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };