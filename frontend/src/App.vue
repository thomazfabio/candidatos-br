<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const itemsMenu = [
  { title: 'HOME', to: '/' },
  { title: 'CANDIDATOS', to: '/candidatos' },
  { title: 'BLOG', to: '/blog' },
  { title: 'SOBRE', to: '/sobre' },
]
const drawer = ref(false)
function toggleDrawer() {
  drawer.value = !drawer.value
}

</script>

<template>
  <v-app>
    <v-app-bar app color="teal-darken-2" elevation="10">
      <v-app-bar-title>Eleições municipais 2024</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="top">
      <v-list>
        <v-list-item color="primary" link v-for="item in itemsMenu" :key="item.title" :to="item.to">
          <v-list-item-title><strong class="text-blue-darken-4">{{ item.title }}</strong></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
s
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer app color="teal-darken-2" dark>
      <span class="white--text">&copy; 2024</span>
      <v-spacer />
      <span class="white--text">Fonte: TSE</span>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
