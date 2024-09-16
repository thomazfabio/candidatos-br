const cidades_json = require('../dados/dados_json/estados-cidades1.json');

function getCidadePorSiglaUf(sigla) {
    // Verifica se o JSON foi carregado corretamente
    if (!cidades_json || !Array.isArray(cidades_json.estados)) {
        console.error('Dados de estados não encontrados ou formato inválido');
        return [];
    }

    const estado = cidades_json.estados.find(estado => estado.sigla === sigla.toUpperCase());
    return estado ? estado.cidades : [];
}

module.exports = { getCidadePorSiglaUf };
