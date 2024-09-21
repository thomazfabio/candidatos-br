const cand_ac_json = require('../dados/dados_json/cand_ac.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_ac_json.filter(candidato => candidato.NM_UE === cidade);
    }

// Filtrando candidatos de uma determinada cidade
// Exibindo o nome de todos os candidatos da cidade filtrada
//candidatosCidade.forEach(candidato => {
//});

module.exports = { getCandCidade };