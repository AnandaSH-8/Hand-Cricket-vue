<template>
  <v-layout style="margin-bottom: 2vh">
    <v-app-bar elevation="1" flat color="yellow-darken-3" rounded density="compact">
      <v-app-bar-title class="text-white" @click="$router.push('/')">Hand Cricket</v-app-bar-title>

      <template v-slot:append>
        <v-btn
          color="white"
          size="x-large"
          @click="$router.push('/vueHome')"
          icon="$vuetify"
        ></v-btn>
      </template>
    </v-app-bar>
  </v-layout>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
:deep(.v-toolbar-title__placeholder) {
  font-weight: 600;
}
</style>
