const cand_ms_json = require('../dados/dados_json/cand_ms.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ms_json.filter(candidato => candidato.NM_UE === cidade);
    }
module.exports = { getCandCidade };