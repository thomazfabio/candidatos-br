const cand_mg_json = require('../dados/dados_json/cand_mg.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_mg_json.filter(candidato => candidato.NM_UE === cidade);
    }
    
module.exports = { getCandCidade };