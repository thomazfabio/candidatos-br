const cand_go_json = require('../dados/dados_json/cand_go.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_go_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };