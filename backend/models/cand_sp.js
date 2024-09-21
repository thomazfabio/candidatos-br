// Sem ESModules - usando require
const cand_sp_json = require('../dados/dados_json/cand_sp.json');

function getCandCidade(cidade) {
  cidade = cidade.toUpperCase();
  console.log(cidade);
  return cand_sp_json.filter(candidato => candidato.NM_UE === cidade);
}

// Filtrando candidatos de uma determinada cidade
//const candidatosCidade = cand_mt_json.filter(candidato => candidato.NM_UE === cand_cidade && candidato.DS_CARGO === cand_cargo);

// Exibindo o nome de todos os candidatos da cidade filtrada
//candidatosCidade.forEach(candidato => {
//});


module.exports = { getCandCidade };
