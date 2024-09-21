<script setup>
import { ref, watch } from 'vue';
import { useRegiaoSelecionada } from '@/stores/buscaCandidatos';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter();

// Inicializa a store
const regiaoSelecionada = useRegiaoSelecionada();

// Estado local para o select
const selectEstado = ref({ state: 'selecione o estado', abbr: '' });
const selectCidade = ref(null);
async function buscarCandidatos() {
  // Chama a ação da store para buscar os candidatos
  await regiaoSelecionada.buscarCandidatos(selectEstado.value.abbr, selectCidade.value);
}

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

const itemsCidade = storeToRefs(regiaoSelecionada).cidades;

// Assiste as mudanças de `selectEstado` e chama a ação da store
watch(selectEstado, (newEstado) => {
  if (newEstado) {
    regiaoSelecionada.setEstado(newEstado); // Chama a ação da store para atualizar o estado
  }
});

// Watch para observar mudanças na propriedade 'candidatos'
watch(
  () => regiaoSelecionada.candidatos,  // Observar a função que retorna a propriedade reativa
  (newCandidatos) => {
    if (regiaoSelecionada.candidatos && regiaoSelecionada.candidatosIsLoading === false && regiaoSelecionada.candidatosError === null) {
      console.log('newCandidatos', regiaoSelecionada.candidatos);
      router.push({ name: 'candidatos' });
    }
  }
);
</script>

<template>
  <v-select variant="outlined" v-model="selectEstado" :items="itemsEstado" item-title="state" item-value="abbr"
    label="Select" persistent-hint return-object single-line />

  <v-autocomplete v-model="selectCidade" label="selecione a cidade" :items="itemsCidade" item-title="cidade"
    variant="outlined" no-data-text="antes de prosseguir selecione o estado" single-line></v-autocomplete>

  <v-btn color="primary" dark @click="buscarCandidatos">Buscar</v-btn>
</template>
