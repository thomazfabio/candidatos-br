const cand_rj_json = require('../dados/dados_json/cand_rj.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_rj_json.filter(candidato => candidato.NM_UE === cidade);
    }
module.exports = { getCandCidade };