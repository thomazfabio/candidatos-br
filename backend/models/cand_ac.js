const cand_ac_json = require('../dados/dados_json/cand_ac.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ac_json.filter(candidato => candidato.NM_UE === cidade);
    }
module.exports = { getCandCidade };