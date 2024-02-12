<template>
    <v-layout style=" background: rgb(129, 201, 252)">
    <template v-if="!playStarted">
        <v-card width="350" height="450" class="entryCard">
            <v-text-field v-model="username" class="userNameInput"
                :rules="[v => !!v.toString().trim() || 'Minimum 3 letters']"
                 density="comfortable" label="User Name" variant="outlined">
            </v-text-field>
            <v-card-actions class="cardActions">
                <v-btn class="globalButton ml-2" @click="startPlay" :disabled="checkUserName"
                prepend-icon="mdi-play-circle">
                    Let's Play
                </v-btn>
                <v-btn class="globalButton mt-4"  prepend-icon="mdi-cog">
                    Settings &nbsp;
                </v-btn>
            </v-card-actions>
        </v-card>
    </template>
    <template v-else>
        <HandCricket></HandCricket>
    </template>
    </v-layout>
</template>

<script setup>
import { computed } from "vue";
import HandCricket from "./playStadium.vue"
import { ref } from 'vue';

let playStarted = ref(false);
let username = ref('');

function startPlay(){
    playStarted.value = true;
}

const checkUserName = computed(()=>{
    if(username.value.length > 2 && username.value.toString().trim()){
        return false;
    }
    return true;
})

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
.cardActions{
    display: flex;
    flex-direction: column;
    border:1px ridge rgb(223, 235, 243);
    margin-top: 10vh;
}

:deep(.v-input--density-comfortable .v-field__input){
    font-weight: 900;
    text-transform: capitalize;
    color:#fa7e25;
    text-align: center;
}

</style>