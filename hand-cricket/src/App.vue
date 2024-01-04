<template>
  <v-layout>
    <v-app-bar elevation="1" flat color="yellow-darken-3"
        rounded density="compact">
        <v-app-bar-title class="text-white">Hand Cricket</v-app-bar-title>

        <template v-slot:append>
          <v-btn color="white" size="x-large" @click="$router.push('/vueHome')" icon="$vuetify"></v-btn>
        </template>

    </v-app-bar>
  </v-layout>
  <RouterView />
</template>

<script setup lang="ts">
import {RouterView } from 'vue-router'
</script>

<style scoped>
:deep(.v-toolbar-title__placeholder){
  font-weight: 600;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>