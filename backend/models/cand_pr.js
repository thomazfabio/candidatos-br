const cand_pr_json = require('../dados/dados_json/cand_pr.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_pr_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };