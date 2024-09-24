<script setup>
import { ref, computed } from 'vue';
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

// Computed property para verificar se a tela é desktop
const isDesktop = computed(() => {
  return window.innerWidth >= 600; // Ajuste aqui se necessário
});

// Listener para atualizar o estado ao redimensionar a janela
window.addEventListener('resize', () => {
  isDesktop.value = window.innerWidth >= 600;
});

</script>

<template>
  <v-app>
    <v-app-bar :color="drawer ? 'teal-darken-2' : 'teal-darken-2'" :elevation="drawer ? 0 : 10">
      <v-app-bar-title>Eleições municipais 2024</v-app-bar-title>

      <!-- Exibir botões de menu na barra se a tela for maior que 600px -->
      <template v-if="isDesktop">
        <v-btn v-for="item in itemsMenu" :key="item.title" :to="item.to" text>
          {{ item.title }}
        </v-btn>
      </template>

      <!-- Exibir menu drawer se a tela for menor que 600px -->
      <v-app-bar-nav-icon v-if="!isDesktop" @click="toggleDrawer">
        <v-icon v-if="!drawer">mdi-menu</v-icon>
        <v-icon v-else>mdi-close-thick</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Drawer que aparece em telas menores que 600px -->
    <v-navigation-drawer v-if="!isDesktop" v-model="drawer" location="top" :color="'teal-darken-2'" app>
      <v-list>
        <v-list-item link v-for="item in itemsMenu" :key="item.title" :to="item.to">
          <v-list-item-title>
            <strong class="text-white">{{ item.title }}</strong>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
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
