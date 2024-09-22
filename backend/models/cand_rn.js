const cand_rn_json = require('../dados/dados_json/cand_rn.json');  
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_rn_json.filter(candidato => candidato.NM_UE === cidade);
    }
module.exports = { getCandCidade };