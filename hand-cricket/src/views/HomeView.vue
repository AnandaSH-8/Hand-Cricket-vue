<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
   <header style="border:2px solid red">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper" style="">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/vueHome">Home</RouterLink>
        <RouterLink to="/vueAbout">About</RouterLink>
      </nav>
    </div>
  </header>
  <main style="border:2px solid blue">
    <TheWelcome />
  </main>
</template>
