<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRegiaoSelecionada } from '@/stores/buscaCandidatos';
const regiaoSelecionada = useRegiaoSelecionada();
import { shallowRef } from 'vue'

const search = shallowRef('')
const candidatos = regiaoSelecionada.candidatos;
//const caminhoImagem = '/images/foto_cand2024_MT_div/FMT';
const caminhoImagem = ref('');
const cidadeSelected = regiaoSelecionada.cidadeSelected;
const estadoSelected = regiaoSelecionada.estadoSelected;




//imagnes por estado
if (estadoSelected == 'MT') {
    caminhoImagem.value = '/images/foto_cand2024_MT_div/FMT';
}

if (estadoSelected == 'MS') {
    caminhoImagem.value = '/images/foto_cand2024_MS_div/FMS';
}
if (estadoSelected == 'GO') {
    caminhoImagem.value = '/images/foto_cand2024_GO_div/FGO';
}
if (estadoSelected == 'DF') {
    caminhoImagem.value = '/images/foto_cand2024_DF_div/FDF';
}
if (estadoSelected == 'TO') {
    caminhoImagem.value = '/images/foto_cand2024_TO_div/FTO';
}
if (estadoSelected == 'RO') {
    caminhoImagem.value = '/images/foto_cand2024_RO_div/FRO';
}
if (estadoSelected == 'AC') {
    caminhoImagem.value = '/images/foto_cand2024_AC_div/FAC';
}
if (estadoSelected == 'AM') {
    caminhoImagem.value = '/images/foto_cand2024_AM_div/FAM';
}
if (estadoSelected == 'RR') {
    caminhoImagem.value = '/images/foto_cand2024_RR_div/FRR';
}
if (estadoSelected == 'PA') {
    caminhoImagem.value = '/images/foto_cand2024_PA_div/FPA';
}
if (estadoSelected == 'AP') {
    caminhoImagem.value = '/images/foto_cand2024_AP_div/FAP';
}
if (estadoSelected == 'MA') {
    caminhoImagem.value = '/images/foto_cand2024_MA_div/FMA';
}
if (estadoSelected == 'PI') {
    caminhoImagem.value = '/images/foto_cand2024_PI_div/FPI';
}
if (estadoSelected == 'CE') {
    caminhoImagem.value = '/images/foto_cand2024_CE_div/FCE';
}
if (estadoSelected == 'RN') {
    caminhoImagem.value = '/images/foto_cand2024_RN_div/FRN';
}
if (estadoSelected == 'PB') {
    caminhoImagem.value = '/images/foto_cand2024_PB_div/FPB';
}
if (estadoSelected == 'PE') {
    caminhoImagem.value = '/images/foto_cand2024_PE_div/FPE';
}
if (estadoSelected == 'AL') {
    caminhoImagem.value = '/images/foto_cand2024_AL_div/FAL';
}
if (estadoSelected == 'SE') {
    caminhoImagem.value = '/images/foto_cand2024_SE_div/FSE';
}
if (estadoSelected == 'BA') {
    caminhoImagem.value = '/images/foto_cand2024_BA_div/FBA';
}
if (estadoSelected == 'MG') {
    caminhoImagem.value = '/images/foto_cand2024_MG_div/FMG';
}
if (estadoSelected == 'ES') {
    caminhoImagem.value = '/images/foto_cand2024_ES_div/FES';
}
if (estadoSelected == 'RJ') {
    caminhoImagem.value = '/images/foto_cand2024_RJ_div/FRJ';
}
if (estadoSelected == 'SP') {
    caminhoImagem.value = '/images/foto_cand2024_SP_div/FSP';
}
if (estadoSelected == 'PR') {
    caminhoImagem.value = '/images/foto_cand2024_PR_div/FPR';
}
if (estadoSelected == 'SC') {
    caminhoImagem.value = '/images/foto_cand2024_SC_div/FSC';
}
if (estadoSelected == 'RS') {
    caminhoImagem.value = '/images/foto_cand2024_RS_div/FRS';
}
if (estadoSelected == 'MS') {
    caminhoImagem.value = '/images/foto_cand2024_MS_div/FMS';
}
</script>

<template>
    <h2>{{ cidadeSelected + ' , ' + estadoSelected }}</h2>
    <v-card>
        <v-data-iterator :items="candidatos" :items-per-page="30" :search="search">
            <template v-slot:header>
                <v-toolbar class="px-2">
                    <v-text-field v-model="search" density="comfortable" placeholder="Search"
                        prepend-inner-icon="mdi-magnify" style="max-width: 600px;" variant="solo" clearable
                        hide-details></v-text-field>
                </v-toolbar>
            </template>

            <template v-slot:default="{ items }">
                <v-container class="pa-2" fluid>
                    <v-row dense>

                        <v-col v-for="item in items" :key="item.title" cols="12" md="4">
                            <v-card class="pb-3 bg-grey-lighten-5" style="border: 1px solid black" border flat>
                                <v-list-item>

                                    <v-avatar class="mx-auto mt-5" size="100" border="md" color="primary">
                                        <v-img
                                            :src="caminhoImagem + item.raw.SQ_CANDIDATO + '_div.jpg'"><!-- Skeleton Loader dentro do v-img -->
                                            <template v-slot:placeholder>
                                                <v-skeleton-loader type="image" width="100"
                                                    height="100"></v-skeleton-loader>
                                            </template></v-img>
                                    </v-avatar>
                                </v-list-item>
                                <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
                                    <template v-slot:title>
                                        <strong class="text-h6 mb-2">{{ item.raw.NM_URNA_CANDIDATO }}</strong>
                                    </template>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item class="px-4">
                                    <v-list-item-content>
                                        <v-list-item-title class="text-caption">Nome</v-list-item-title>
                                        <v-list-item-subtitle>{{ item.raw.NM_CANDIDATO }}</v-list-item-subtitle>
                                    </v-list-item-content>

                                </v-list-item>


                                <v-list-item class="px-4">
                                    <v-list-item-content>
                                        <v-list-item-title class="text-caption">Cargo</v-list-item-title>
                                        <v-list-item-subtitle>{{ item.raw.DS_CARGO }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item class="px-4">
                                    <v-list-item-content>
                                        <v-list-item-title class="text-caption">Partido</v-list-item-title>
                                        <v-list-item-subtitle>{{ item.raw.NM_PARTIDO }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <div class="d-flex justify-space-between px-4">
                                    <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                                        <div class="text-truncate">{{ item.raw.NR_CANDIDATO }}</div>
                                    </div>

                                    <v-btn size="small" color="primary" text="Ver +" flat>
                                    </v-btn>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </template>

            <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                <div class="d-flex align-center justify-center pa-4">
                    <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded
                        @click="prevPage"></v-btn>

                    <div class="mx-2 text-caption">
                        Page {{ page }} of {{ pageCount }}
                    </div>

                    <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal"
                        rounded @click="nextPage"></v-btn>
                </div>
            </template>
        </v-data-iterator>
    </v-card>
</template>

<style scoped></style>