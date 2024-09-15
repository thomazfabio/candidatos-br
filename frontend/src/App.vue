<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar app color="teal-darken-4" elevation="15">
      <v-app-bar-title>Eleições municipais 2024</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer app color="teal-darken-4" dark>
      <span class="white--text">&copy; 2024</span>
    </v-footer>
  </v-app>
</template>