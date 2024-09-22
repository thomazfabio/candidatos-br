const cand_pe_json = require('../dados/dados_json/cand_pe.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_pe_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };