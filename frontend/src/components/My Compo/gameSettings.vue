<template>
    <v-layout class="settings">
        <v-card height="439">
            <v-card-item>
                <v-card-title class="settingTitle">
                    <v-icon color="#76B438" @click="router.back()" >mdi-keyboard-backspace</v-icon>
                    <v-icon id="settingIcon" color="#76B438">mdi-cog</v-icon>
                    Settings                </v-card-title>
            </v-card-item>
            <v-card-text>
                <v-container class="battingContainer"> 
                    <b>Batting</b>
                    <v-row class="pt-2">
                        <v-col class="py-1" cols="1"></v-col>
                        <v-col cols="4" class="ballWicks py-1">
                        <kbd>Wickets: </kbd>
                            <v-select v-model="settingData.wickets" :items="[1,2,3,4,5,10]" density="compact" variant="outlined"/>
                        </v-col>
                        <v-col cols="7" class="py-1 ">
                            <v-switch v-model="settingData.battingSelected" label="Batting" color="#81c9fc" density="compact" inset>
                            </v-switch>
                            <v-icon class="setting-infoIcon" size="x-small" color="white" icon="mdi-information-outline"></v-icon>
                             <span class="tooltip">If Batting only selected, you have to chase the set run in 30 balls.<section></section> </span>
                        </v-col>
                    </v-row>
                </v-container>  
                <hr style="border:1.5px groove;">
                <v-container class="bowlingContainer" > 
                    <b>Bowling</b>
                    <v-row class="pt-2">
                        <v-col cols="1" class="py-1"></v-col>
                        <v-col cols="4" class="ballWicks py-1">
                        <kbd>Balls:<v-icon class="ballsInfo" size="x-small" color="white" icon="mdi-information-outline"></v-icon>
                            <span class="balls-tooltip">If 0 ball selected, then it is considered as Infinity balls</span>
                        </kbd>
                            <v-select :items="[0,6,12,18,30,60,100,120]" v-model="settingData.balls"
                                density="compact" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="7" class="py-1">
                            <v-switch 
                                v-model="settingData.bowlingSelected"
                              label="Bowling"  color="#81c9fc" density="compact" inset>
                            </v-switch>
                            <v-icon class="setting-infoIcon" size="x-small" color="white" icon="mdi-information-outline"></v-icon>
                            <span class="tooltip">If Bowling only selected, you have to restrict the opponent before reaches the set run in 30 balls.</span>
                        </v-col>
                    </v-row>
                </v-container>
                <hr>
            </v-card-text>
            <v-card-actions>
                <v-btn class="globalButton ma-auto mt-15" @click="saveSettings" >Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script setup>
import { useGlobalStore } from '@/stores';
import {ref,onMounted} from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const store = useGlobalStore();

let settingData = ref({
    battingSelected:true,
    bowlingSelected:true,
    balls:0,
    wickets:1,
})

onMounted(()=>{
    if(store.setData.settings){
        settingData.value = store.setData.settings;
    }
})

function saveSettings(){
    store.setActions(settingData,'setting');
    router.back();
}

</script>

<style scoped>
.settings{
    background-color: #81c9fc;
    display: flex;
}
.settings > .v-card{
    width:50vw;
    margin: auto;
    margin-top: 8vh;
    color:white;
    margin-bottom: 9vh;
    background-color: #f9b851;
    border-radius: 20px;
}
.settingTitle{
    text-align: center;
    font-size: 25px;
    padding-top: 1vh;
    font-weight: 800;
}

.settingTitle > *:first-child{
    position: absolute;
    left: 3%;
}

.settingTitle #settingIcon{
    animation:rotation infinite 2s linear;
}

@keyframes rotation {
    0%{
        transform: rotate(0deg);
    }
    20%{
        transform: rotate(90deg);
    }
    50%{
        transform: rotate(180deg);
    }
    75%{
        transform: rotate(270deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.battingContainer, .bowlingContainer{
    background-color:#76B438;
    border-radius: 2px;
}

.battingContainer .v-col,
.bowlingContainer .v-col {
    place-items: center;
}

.battingContainer > b, .bowlingContainer > b{
    font-size: 18px;
}

.ballWicks{
    display: flex;
    justify-content: space-between;
}

:deep(.ballWicks .v-input--density-compact){
    max-width:70px !important;
    height: 28px;
    color:black;
    border-radius: 5px;
    background-color:rgb(247, 244, 244);
}

:deep(.ballWicks .v-field__field){
    height: 28px;
}

:deep(.ballWicks .v-select .v-field.v-field)
{
    padding:0;   
}

.settings :deep(.v-field__input), :deep(.v-select .v-select__selection-text){
    min-height: 25px;
    padding: 0;
    padding-left: 5px;
    font-weight: 900;
}
.settings :deep(.v-text-field .v-field--no-label input){
    padding-left:0;
    min-height:25px;    
}

:deep(.v-switch--inset){
    height:40px;
    width:130px;
    float: right;
}

:deep(.v-switch--inset .v-switch__track){
    height:20px;
}

:deep(.v-switch--inset .v-selection-control--dirty .v-switch__thumb){
    width:20px;
    height:20px;
}

:deep(.v-switch--inset .v-selection-control--dirty .v-switch__thumb)::before{
    color:#787878;
    content:'Yes';
    font-size: 7px;
    font-weight: 800;
}

.setting-infoIcon{
    position: absolute;
    right:22px;
    transform: translateY(15px);
    cursor: pointer;
}

.ballsInfo{
    cursor: pointer;
}

.ballsInfo:hover + .balls-tooltip{
    visibility: visible;
    width:220px;
    height:45px;
    padding:2px;
    color:rgb(101, 101, 101);
    border-radius: 10px;
    font-size: 12px;
    transform: translate(-30px,30px);
    background-color: rgb(236, 234, 234);
    z-index: 1000 !important;
}

.balls-tooltip{
  visibility: hidden;
  position:absolute;
}
.balls-tooltip::before{
  content:'';
  padding:8px;
  background-color: rgb(236, 234, 234);
  z-index:-10;
  position: absolute;
  transform: rotate(45deg);
  left: 15px;
  top:-8px;
}

.setting-infoIcon:hover + .tooltip{
    visibility: visible;
    background-color: rgb(236, 234, 234);
    width:280px;
    height:38px;
    position: absolute;
    right: 20px;
    border-radius: 10px;
    transform: translateY(-32px);
    color:rgb(101, 101, 101);
    padding-left: 5px;
    padding-top: 4px;
    font-size: 12px;
    line-height: 15px;
}
.tooltip{
  visibility: hidden;
  position:absolute;
}
.tooltip::before{
  content:'';
  padding:15px;
  background-color: rgb(236, 234, 234);
  z-index:-10;
  position: absolute;
  transform: rotate(20deg);
  right: 6px;
  bottom: -3px;
}
</style>