const cand_mt = require('../models/cand_mt');
const cand_sp = require('../models/cand_sp');
const cand_ac = require('../models/cand_ac');

function getCand(estado , cidade) {
  if (estado === 'MT') {
    return cand_mt.getCandCidade(cidade);
  }
  if (estado === 'SP') {
    return cand_sp.getCandCidade(cidade);
  }
  if (estado === 'AC') {
    return cand_ac.getCandCidade(cidade);
  }
}

module.exports = { getCand };