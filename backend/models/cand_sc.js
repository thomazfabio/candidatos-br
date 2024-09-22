const cand_sc_json = require('../dados/dados_json/cand_sc.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_sc_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };