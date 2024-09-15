<script setup>
import { ref } from 'vue'
import Mapa from '@/components/Mapa.vue';
import { useRegiaoSelecionada } from '@/stores/buscaCandidatos';
const { regiaoSelecionada } = useRegiaoSelecionada();

</script>

<template>
    <v-card elevation="15">
      <div class="mapa">
        <Mapa style="width: 100%; height: 100%;" />
      </div>
    </v-card>
</template>

<style scoped>
.mapa {
  height: 500px;
}
</style>