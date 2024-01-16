<template>
    <v-layout style=" background: rgb(129, 201, 252)">
    <template v-if="!playStarted">
        <v-card width="350" height="450" class="entryCard">
            <v-text-field class="userNameInput" density="comfortable"
                label="User Name" variant="outlined">
            </v-text-field>
            <v-btn class="playButton text-none" @click="startPlay" prepend-icon="mdi-play-circle">
                Let's Play
            </v-btn>
        </v-card>
    </template>
    <template v-else>
        <HandCricket></HandCricket>
    </template>
    </v-layout>
</template>

<script setup>
import HandCricket from "./playStadium.vue"
import { ref } from 'vue';

let playStarted = ref(false);

function startPlay(){
    playStarted.value = true;
}

</script>

<style scoped>
.entryCard{
    box-shadow: 0px 4px 8px -2px rgba(9, 30, 66, 0.25), 0px 0px 0px 1px rgba(9, 30, 66, 0.08);
    border-radius:5%;
    margin: auto;
    margin-top: 7vh;
    margin-bottom: 9vh;
    background: #f9b851;
    text-align: center;
}

.userNameInput{
    margin:0 10%;
    margin-top: 20%;
    background-color: white;
    height: 47px;
    border-radius: 5px;
}

.playButton{
margin-top: 10vh;
background-color: rgb(129, 201, 252);
color:white;
}

</style>