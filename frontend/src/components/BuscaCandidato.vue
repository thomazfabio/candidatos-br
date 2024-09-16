<script setup>
import { ref, watch } from 'vue';
import { useRegiaoSelecionada } from '@/stores/buscaCandidatos';

// Inicializa a store
const regiaoSelecionada = useRegiaoSelecionada();

// Estado local para o select
const selectEstado = ref({ state: 'Selecione o estado', abbr: '' });
const selectCidade = ref({ cidade: 'Selecione a cidade' });

// Itens para os selects
const itemsEstado = [
  { state: 'Acre', abbr: 'AC' },
  { state: 'Alagoas', abbr: 'AL' },
  { state: 'Amapá', abbr: 'AP' },
  { state: 'Amazonas', abbr: 'AM' },
  { state: 'Bahia', abbr: 'BA' },
  { state: 'Ceará', abbr: 'CE' },
  { state: 'Espírito Santo', abbr: 'ES' },
  { state: 'Goiás', abbr: 'GO' },
  { state: 'Maranhão', abbr: 'MA' },
  { state: 'Mato Grosso', abbr: 'MT' },
  { state: 'Mato Grosso do Sul', abbr: 'MS' },
  { state: 'Minas Gerais', abbr: 'MG' },
  { state: 'Pará', abbr: 'PA' },
  { state: 'Paraíba', abbr: 'PB' },
  { state: 'Paraná', abbr: 'PR' },
  { state: 'Pernambuco', abbr: 'PE' },
  { state: 'Piauí', abbr: 'PI' },
  { state: 'Rio de Janeiro', abbr: 'RJ' },
  { state: 'Rio Grande do Norte', abbr: 'RN' },
  { state: 'Rio Grande do Sul', abbr: 'RS' },
  { state: 'Rondônia', abbr: 'RO' },
  { state: 'Roraima', abbr: 'RR' },
  { state: 'Santa Catarina', abbr: 'SC' },
  { state: 'Sergipe', abbr: 'SE' },
  { state: 'São Paulo', abbr: 'SP' },
  { state: 'Tocantins', abbr: 'TO' }
];

const itemsCidade = [
  { cidade: 'Acrelândia' },
  { cidade: 'Assis Brasil' },
  { cidade: 'Brasiléia' },
  { cidade: 'Bujari' },
  { cidade: 'Capixaba' },
  { cidade: 'Cruzeiro do Sul' },
  { cidade: 'Epitaciolândia' },
  { cidade: 'Feijó' },
  { cidade: 'Jordão' },
  { cidade: 'Mâncio Lima' },
  { cidade: 'Manoel Urbano' },
  { cidade: 'Marechal Thaumaturgo' },
  { cidade: 'Plácido de Castro' },
  { cidade: 'Porto Walter' },
  { cidade: 'Rio Branco' },
  { cidade: 'Rodrigues Alves' },
  { cidade: 'Santa Rosa do Purus' },
  { cidade: 'Sena Madureira' },
  { cidade: 'Senador Guiomard' },
  { cidade: 'Tarauacá' },
  { cidade: 'Xapuri' }
];

// Assiste as mudanças de `selectEstado` e chama a ação da store
watch(selectEstado, (newEstado) => {
  if (newEstado) {
    regiaoSelecionada.setEstado(newEstado); // Chama a ação da store para atualizar o estado
  }
});
</script>

<template>
  <v-select
    v-model="selectEstado"
    :hint="`${selectEstado?.state ?? ''}, ${selectEstado?.abbr ?? ''}`"
    :items="itemsEstado"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />

  <v-select
    v-model="selectCidade"
    :hint="selectCidade.cidade"
    :items="itemsCidade"
    item-title="cidade"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
