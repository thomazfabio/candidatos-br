const cand_ac = require('../models/cand_ac');
const cand_al = require('../models/cand_al');
const cand_am = require('../models/cand_am');
const cand_ap = require('../models/cand_ap');
const cand_ba = require('../models/cand_ba');
const cand_ce = require('../models/cand_ce');
const cand_es = require('../models/cand_es');
const cand_go = require('../models/cand_go');
const cand_ma = require('../models/cand_ma');
const cand_mt = require('../models/cand_mt');
const cand_ms = require('../models/cand_ms');
const cand_mg = require('../models/cand_mg');
const cand_pa = require('../models/cand_pa');
const cand_pb = require('../models/cand_pb');
const cand_pe = require('../models/cand_pe');
const cand_pi = require('../models/cand_pi');
const cand_pr = require('../models/cand_pr');
const cand_rj = require('../models/cand_rj');
const cand_rn = require('../models/cand_rn');
const cand_ro = require('../models/cand_ro');
const cand_rr = require('../models/cand_rr');
const cand_rs = require('../models/cand_rs');
const cand_sc = require('../models/cand_sc');
const cand_se = require('../models/cand_se');
const cand_to = require('../models/cand_to');
const cand_sp = require('../models/cand_sp');




function getCand(estado, cidade) {
  if (estado === 'SP') {
    return cand_sp.getCandCidade(cidade);
  }
  if (estado === 'AC') {
    return cand_ac.getCandCidade(cidade);
  }
  if (estado === 'AL') {
    return cand_al.getCandCidade(cidade);
  }
  if (estado === 'AM') {
    return cand_am.getCandCidade(cidade);
  }
  if (estado === 'AP') {
    return cand_ap.getCandCidade(cidade);
  }
  if (estado === 'BA') {
    return cand_ba.getCandCidade(cidade);
  }
  if (estado === 'CE') {
    return cand_ce.getCandCidade(cidade);
  }
  if (estado === 'ES') {
    return cand_es.getCandCidade(cidade);
  }
  if (estado === 'GO') {
    return cand_go.getCandCidade(cidade);
  }
  if (estado === 'MA') {
    return cand_ma.getCandCidade(cidade);
  }
  if (estado === 'MT') {
    return cand_mt.getCandCidade(cidade);
  }
  if (estado === 'MS') {
    return cand_ms.getCandCidade(cidade);
  }
  if (estado === 'MG') {
    return cand_mg.getCandCidade(cidade);
  }
  if (estado === 'PA') {
    return cand_pa.getCandCidade(cidade);
  }
  if (estado === 'PB') {
    return cand_pb.getCandCidade(cidade);
  }
  if (estado === 'PE') {
    return cand_pe.getCandCidade(cidade);
  }
  if (estado === 'PI') {
    return cand_pi.getCandCidade(cidade);
  }
  if (estado === 'PR') {
    return cand_pr.getCandCidade(cidade);
  }
  if (estado === 'RJ') {
    return cand_rj.getCandCidade(cidade);
  }
  if (estado === 'RN') {
    return cand_rn.getCandCidade(cidade);
  }
  if (estado === 'RO') {
    return cand_ro.getCandCidade(cidade);
  }
  if (estado === 'RR') {
    return cand_rr.getCandCidade(cidade);
  }
  if (estado === 'RS') {
    return cand_rs.getCandCidade(cidade);
  }
  if (estado === 'SC') {
    return cand_sc.getCandCidade(cidade);
  }
  if (estado === 'SE') {
    return cand_se.getCandCidade(cidade);
  }
  if (estado === 'TO') {
    return cand_to.getCandCidade(cidade);
  }
}

module.exports = { getCand };