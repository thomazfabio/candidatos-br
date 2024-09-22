const cand_rs_json = require('../dados/dados_json/cand_rs.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_rs_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };