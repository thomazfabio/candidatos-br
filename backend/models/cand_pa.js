const cand_pa_json = require('../dados/dados_json/cand_pa.json');

function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_pa_json.filter(candidato => candidato.NM_UE === cidade);
    }


module.exports = { getCandCidade };
