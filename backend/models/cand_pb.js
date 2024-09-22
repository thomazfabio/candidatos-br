const cand_pb_json = require('../dados/dados_json/cand_pb.json');
function getCandCidade(cidade) {
    cidade = cidade.toUpperCase();
    console.log(cidade);
    return cand_pb_json.filter(candidato => candidato.NM_UE === cidade);
    }

module.exports = { getCandCidade };