<template>
    <v-layout class="footerLayout">
        <v-sheet class="footersheetContent">
            <h1>Hand Cricket</h1>
            <kbd>Made by ASH</kbd>
            <h4>Connect</h4>
            <div>
                <v-icon icon="mdi-github"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-linkedin"></v-icon>
            </div>
            <kbd>© 2024. All rights reserved</kbd>
        </v-sheet>
       
    </v-layout>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style>
.footerLayout{
    background-color: #f9b851;
    place-content: center;
}

.footerLayout > .footersheetContent{
    background-color: #f9b851;
    text-align: center;
}
</style>