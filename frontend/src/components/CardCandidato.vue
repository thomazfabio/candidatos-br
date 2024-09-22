<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRegiaoSelecionada } from '@/stores/buscaCandidatos';
const regiaoSelecionada = useRegiaoSelecionada();
import { shallowRef } from 'vue'

const search = shallowRef('')
const candidatos = regiaoSelecionada.candidatos;
const caminhoImagem = ref('');
const cidadeSelected = regiaoSelecionada.cidadeSelected;
const estadoSelected = regiaoSelecionada.estadoSelected;
caminhoImagem.value = 'https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/'
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
                                            :src="caminhoImagem + item.raw.SQ_CANDIDATO + '/'+item.raw.SG_UE"><!-- Skeleton Loader dentro do v-img -->
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