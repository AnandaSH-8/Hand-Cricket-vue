<template>
    <v-layout class="footerLayout">
        <v-sheet class="footerLogo">
            <img src="../assets/component Images/hc7-transformed.png" alt="">
        </v-sheet>
        <v-sheet class="footersheetContent">
            <h1 style="font-family: 'Gugi';">Hand Cricket</h1>
            <kbd>Made by ASH</kbd>
            <h4>Connect</h4>
            <div>
                <v-icon icon="mdi-github"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-linkedin"></v-icon>
            </div>
            <kbd>©HandCricket 2024</kbd>
        </v-sheet>
        <v-sheet></v-sheet>
    </v-layout>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style>
.footerLayout{
    background-color: #f9b851;
    justify-content: space-between;
}

.footerLogo{
    width:100px;
    height:100px;
    border:2px solid red;
}

.footerLogo > img{
    width:100%;
    height:100%;
}

.footerLayout > .footersheetContent{
    background-color: #f9b851;
    text-align: center;
    color:white;
}
</style>