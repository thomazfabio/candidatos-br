const cand_am_json = require('../dados/dados_json/cand_am.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_am_json.filter(candidato => candidato.NM_UE === cidade);
    }

// Filtrando candidatos de uma determinada cidade
// Exibindo o nome de todos os candidatos da cidade filtrada
//candidatosCidade.forEach(candidato => {
//});

module.exports = { getCandCidade };