const cand_ap_json = require('../dados/dados_json/cand_ap.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ap_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };