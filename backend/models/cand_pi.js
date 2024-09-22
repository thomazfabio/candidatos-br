const cand_pi_json = require('../dados/dados_json/cand_pi.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_pi_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };