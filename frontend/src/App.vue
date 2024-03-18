<template>
  <v-layout style="margin-bottom: 2vh">
    <v-app-bar elevation="1" flat color="yellow-darken-3" rounded density="compact">
      <v-app-bar-title style="cursor: pointer;" class="text-white" @click="$router.push('/gameHome')">Hand Cricket</v-app-bar-title>

      <template #append>
        <v-btn
          color="white"
          size="x-large"
          icon="$vuetify"
          @click="$router.push('/vueHome')"
        ></v-btn>
      </template>
    </v-app-bar>
  </v-layout>
  <RouterView />
  <FooterComponent />
  <GameLoader/>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView,useRouter } from 'vue-router';
import { useFavicon } from '@vueuse/core';
import GameLoader from "./Global/loaderStyle.vue";
import FooterComponent from './Global/footerComponent.vue';
const router = useRouter();
const icon = useFavicon();

onMounted(()=>{
  const gestures = ['Zero','One','Two','Three','Four','Five','Six'];
  const iconImage = gestures[Math.floor(Math.random() * gestures.length)];
  icon.value = `${iconImage}.png`;
  
  router.push({path:'/gameHome'})
})
</script>

<style scoped>
:deep(.v-toolbar-title__placeholder) {
  font-weight: 600;
}
</style>
