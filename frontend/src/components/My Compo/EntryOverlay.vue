<template>
    <v-layout style=" background:#188fff">
        <v-card width="350" height="400" class="entryCard">
            <v-text-field
                v-model="username" class="userNameInput"
                :rules="[v => !!v.toString().trim() || 'Minimum 3 letters']"
                 density="comfortable" label="User Name" variant="outlined">
            </v-text-field>
            <v-card-actions class="cardActions">
                <v-btn
                    class="globalButton ml-2" :disabled="checkUserName" 
                    prepend-icon="mdi-play-circle"
                    @click="buttonActions('play')">
                    Let's Play
                </v-btn>
                <v-btn 
                    class="globalButton mt-4"  prepend-icon="mdi-cog"
                    @click="buttonActions('set')">
                    Settings &nbsp;
                </v-btn>
                <v-btn 
                    class="globalButton mt-4"  prepend-icon="mdi-book-open-outline"
                    @click="buttonActions('tutorial')">
                    Tutorial &nbsp;
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { useGlobalStore } from "@/stores";

const router = useRouter();
const store = useGlobalStore();

let username = ref('');
onMounted(()=>{
    username.value = store.setData.userName;
    store.setActions(
        {battingSelected:true,
        bowlingSelected:true,
        balls:0,
        wickets:1,
    },'setting')
})

function buttonActions(action){
    store.setActions(username.value,'username')
    if (action == 'play') router.push({path:'/gameStadium'});
    else if(action == 'tutorial') router.push({path:'/gameTutorial'});
    else router.push({path:'/gameSettings'});
}

const checkUserName = computed(()=>{
    if(username.value.length > 2 && username.value.toString().trim()) return false;
    return true;
})

</script>

<style scoped>
.entryCard{
    box-shadow: 0px 4px 8px -2px rgba(9, 30, 66, 0.25), 0px 0px 0px 1px rgba(9, 30, 66, 0.08);
    border-radius:5%;
    margin: 6vh auto;
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