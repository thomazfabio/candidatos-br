const cand_se_json = require('../dados/dados_json/cand_se.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_se_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };