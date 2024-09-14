// Sem ESModules - usando require
const cand_mt_json = require('../dados/dados_json/cand_mt.json');
const cand_cidade = 'JUARA';
const cand_cargo = 'PREFEITO';


function getAllCandMt() {
  return cand_mt_json;
}

// Filtrando candidatos de uma determinada cidade
const candidatosCidade = cand_mt_json.filter(candidato => candidato.NM_UE === cand_cidade && candidato.DS_CARGO === cand_cargo);

// Exibindo o nome de todos os candidatos da cidade filtrada
candidatosCidade.forEach(candidato => {
  console.log(candidato);
});


module.exports = { getAllCandMt };
