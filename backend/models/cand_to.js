const cand_to_json = require('../dados/dados_json/cand_to.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_to_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };