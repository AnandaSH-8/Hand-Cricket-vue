<template>
  <v-layout class="HCbox">
    <v-container class="playerOne" :style="{border: shineBorder ? '3px solid yellow':''}">
      <v-card class="RunImage">
       <v-card-title class="cardTitle">You</v-card-title>
        <img v-if="gameKeys.scoredRun.str" :src="gameKeys.imagePath" alt="runImg">
      </v-card>
      <v-row class="RunOptions RunOptions_firstRow">
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun.str =='Zero' ? '2px solid #f9b851':'3px solid#188fff'}" 
            src="../../assets/component Images/Zero.png"
            alt="ZeroRun" @click="RunHit('Zero',0)" />
        </v-col>
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun.str =='One' ? '2px solid #f9b851':'3px solid#188fff'}" 
            src="../../assets/component Images/One.png" 
            alt="OneRun" @click="RunHit('One',1)" />
        </v-col>
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun.str =='Two' ? '2px solid #f9b851':'3px solid#188fff'}" 
            src="../../assets/component Images/Two.png" 
            alt="TwoRun" @click="RunHit('Two',2)" />
        </v-col>
      </v-row>
      <v-row class="RunOptions">
        <v-col>
            <img
              :style="{border:gameKeys.scoredRun.str =='Three' ? '2px solid #f9b851':'3px solid #188fff'}" 
              src="../../assets/component Images/Three.png" 
              alt="ThreeRun" @click="RunHit('Three',3)" />
        </v-col>
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun.str =='Four' ? '2px solid #f9b851':'3px solid #188fff'}" 
              src="../../assets/component Images/Four.png" 
            alt="FourRun" @click="RunHit('Four',4)" />
        </v-col>
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun.str =='Five' ? '2px solid #f9b851':'3px solid #188fff'}" 
              src="../../assets/component Images/Five.png" 
            alt="FiveRun" @click="RunHit('Five',5)" />
        </v-col>
      </v-row>
      <v-row class="RunOptions RunOptions_lastRow">
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun.str =='Six' ? '2px solid #f9b851':'3px solid #188fff'}" 
              src="../../assets/component Images/Six.png" 
            alt="SixRun" @click="RunHit('Six',6)" />
        </v-col>
      </v-row>
    </v-container>
    <v-card class="stadiumDesign">
      <v-card-text v-if="gameKeys.gameStage == 'game'"  class="scoreCard">
          <v-row class="scoredCard-firstRow">
            <b>{{gameKeys.tossMsg}}</b>
          </v-row>
          <v-row class="scoredCard-secondRow">
            <v-col>Balls : {{store.setData.settings.balls ? store.setData.settings.balls : '∞'}}</v-col>
            <v-col>{{store.setData.settings.wickets > 1 ? `Wickets : ${store.setData.settings.wickets}` : 
                `Wicket : ${store.setData.settings.wickets}`}}</v-col>
          </v-row>
          <v-row class="scoredCard-thirdRow">
            <v-col class="px-2" cols="5"><b>Batting:</b>{{gameKeys.battingPlayer}}</v-col>
            <v-col class="px-0" cols="4"><b>name:</b> {{gameKeys.battingPlayer}}</v-col>
            <v-col class="px-0 pl-2" cols="3"><b>Runs:</b> {{ gameKeys.totalRuns }} / {{ gameKeys.goneWickets }}  </v-col>
          </v-row>
          <v-row class="scoredCard-fourthRow">
            <v-col class="px-2" cols="5">Bowling : {{gameKeys.bowlingPlayer}}</v-col>
            <v-col class="px-0" cols="4">name : {{gameKeys.bowlingPlayer}}</v-col>
            <v-col class="px-0 pl-2" cols="3">Bowls : {{ gameKeys.totalBalls }} </v-col>
          </v-row>

          <v-row class="scoredCard-lastRow">
            <v-col class="infoIconBox pa-0">
              <v-menu>
               <template #activator="{ props }">
                  <v-icon size="x-small" color="white" v-bind="props" icon="mdi-information-outline"></v-icon>
               </template>
               <v-list>
                <kbd>Scorecard details
                </kbd>
               </v-list>
              </v-menu>
              <span class="tooltip">Full Scorecard</span>
            </v-col>
          </v-row>
          <v-card></v-card>
        <strong v-if="gameKeys.timer != null">{{ gameKeys.timer == 0 ? '' :gameKeys.timer }}</strong>
      </v-card-text>
      <v-card-actions class="stadiumActions">
      </v-card-actions>
    </v-card>
    <v-card class="playerTwo">
    <v-card-title class="cardTitle">Computer</v-card-title>
     <img v-if="gameKeys.computerRun.str" :src="gameKeys.computerRun.str" alt="runImg">
    </v-card>
    <HangingBoard :data="gameKeys.propsData" @close-board="closeDialog"></HangingBoard>
  </v-layout>
</template>

<script setup>
import HangingBoard from "./hangingBoard.vue"
import {ref, onMounted} from 'vue';
import { useGlobalStore } from "@/stores";
import { onBeforeMount } from "vue";

const store = useGlobalStore();
let gameKeys = ref({
  computerRun:{str:'',num:''},
  gameStage:'',
  imagePath:'',
  propsData:{open:false, part:''},
  scoredRun:{str:'',num:null},
  timer:null,
  tossSelected:'',
  tossResult:'',
  tossMsg:null,
  battingPlayer:"",
  bowlingPlayer:'',
  totalRuns:0,
  totalBalls:0,
  goneWickets:0
})

let shineBorder = ref(false);

onBeforeMount(()=>{
    store.setActions(true,'loader');
})
onMounted(() => {
  gameKeys.value.propsData = {open:true, part:'toss'}
})

function RunHit(run,inNum){
  gameKeys.value.scoredRun = {str:run,num:inNum}
  if (gameKeys.value.scoredRun.str !== '') {
    gameKeys.value.imagePath =  new URL(`../../assets/component Images/${gameKeys.value.scoredRun.str}.svg`,import.meta.url).href
  }
  displayComputerRun()
  if(gameKeys.value.gameStage == 'game'){

    if(gameKeys.value.battingPlayer == 'You'){
        gameKeys.value.totalRuns += inNum;
    }
    else {
      gameKeys.value.totalBalls += 1;
    }
    const emptyCard = setTimeout(()=>{
      gameKeys.value.scoredRun.str = '';
      gameKeys.value.computerRun.str = '';
      clearTimeout(emptyCard);

    },5000)
  }
}

function displayComputerRun(){
    const timeEnds = setTimeout(()=>{

          const runs = [
              {str:'Zero',num:0}, {str:'One',num:1}, 
              {str:'Two',num:2}, {str:'Three',num:3}, 
              {str:'Four',num:4}, {str:'Five',num:5}, {str:'Six',num:6}
            ];
          
          const runScored = runs[Math.floor(Math.random() * runs.length)];
          gameKeys.value.computerRun = {
             str: new URL(`../../assets/component Images/${runScored.str}.svg`,import.meta.url).href,
             num:runScored.num,
          }
          clearTimeout(timeEnds)

    },100)

    const wait = setTimeout(()=>{
      checkRunandResult()
      clearTimeout(wait);
    },500)
}

function checkRunandResult(){
  let {computerRun,scoredRun,gameStage,tossSelected} = gameKeys.value;
  
  if(gameStage == 'toss'){
    const runs = computerRun.num + scoredRun.num;
    const tossDecision = runs/2 ? 'Odd' : 'Even';
    if(tossSelected == tossDecision){
      gameKeys.value.tossResult = 'win';
      gameKeys.value.propsData = {open:true,part:'tossWin'}
    }
    else{
      const options = ['Bat','Bowl'];
      const compSelection = options[Math.round(Math.random()*1)];
      gameKeys.value.tossResult = compSelection;
      gameKeys.value.propsData = {open:true,part:'tossLose',result:compSelection};
    }
  }
  else if (gameStage == 'game'){
    if(computerRun.num == scoredRun.num){
      gameKeys.value.goneWickets += 1;
    }
  }
}

function closeDialog(time,toss){
  gameKeys.value.scoredRun.str = '';
  gameKeys.value.computerRun.str = '';
  gameKeys.value.gameStage = time;
  gameKeys.value.tossSelected = toss;

  if(time == 'toss'){
    let count = 0;
    let shine = setInterval(()=>{
      count++;
      shineBorder.value = !shineBorder.value
      if(count >= 4) clearInterval(shine);
    },400)
  }

  if(time == 'game'){
    if(gameKeys.value.tossResult == 'win'){
      gameKeys.value.battingPlayer = 'You';
      gameKeys.value.bowlingPlayer = 'Computer';
      gameKeys.value.tossMsg = store.setData.tossWinMsg;
    }
    else{
      gameKeys.value.tossMsg = `Computer won the toss and decided to ${gameKeys.value.tossResult} first`;
      if(gameKeys.value.tossResult == 'Bat'){
        gameKeys.value.battingPlayer = 'Computer';
        gameKeys.value.bowlingPlayer = 'You';
      }
      else {
        gameKeys.value.battingPlayer = 'You';
        gameKeys.value.bowlingPlayer = 'Computer';
      }
    }
  }
  gameKeys.value.propsData = {open:false,part:''}
}

</script>

<style scoped>
.HCbox {
  background:#188fff;
  height: 92vh;
  padding: 5vh 10%;
}

.HCbox > * {
  border-radius: 5%;
  box-shadow:rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,rgb(209, 213, 219) 0px 0px 0px 1px inset;
}

.cardTitle{
  color:#f9b851;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top:-5%;
}

.RunImage {
  width: 100%;
  height: 50%;
  border-radius: 5%;
  text-align: center;
  background: #76B438;
}
.RunImage > img, .playerTwo > img{
  width:90%;
  margin-top: 10%;
  height: 80%;
}

 .playerTwo > img{
  width: 80%;
  margin-left: 10%;
 }

.playerTwo,
.playerOne {
  width: 25%;
  height: 40vh;
  margin-top: 8vh;
  padding: 0;
}

.playerOne {
  height: unset;
}

.playerOne .RunOptions {
  margin: 0;
  margin-top:1%;
}

.playerOne .RunOptions_firstRow{
  margin-top:6%;
}

.RunOptions .v-col {
  padding-top: 1%;
  padding-bottom: 0;
}

.playerOne .RunOptions_lastRow {
  width: 33%;
  margin: auto;
  margin-top:4%;
}
.RunOptions .v-col img {
  border-radius: 10% 10%;
  width: 100%;
  border: 3px solid#188fff;
  cursor: pointer;
}
.stadiumDesign {
  width: 40%;
  margin: 0 7%;
   color: #f9b851;
   background-color: #76B438;
}

.stadiumDesign  strong{
  font-size: 50px;
  z-index: 100;
}

.playerTwo{
  background: #76B438;
}

.scoreCard{
  margin:3%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  background-color:#188fff;
  color:white;
  padding:1%;
}

.scoreCard > :deep(.v-row){
  border-radius: 10px;
   margin: auto;
   margin-top: 5px;
}

.scoredCard-firstRow{
  margin-top: 0 !important;
  place-content: center;
}

.scoredCard-secondRow{
  background-color: #f9b851;
  font-size: 17px;
  width: 80%;
}

.scoredCard-secondRow .v-col{
padding:4px;
padding-left: 5%;
  width:50%;
}
.scoredCard-thirdRow{
 background-color: #76B438;
}
.scoredCard-thirdRow .v-col{
  padding-top: 5px;
  padding-bottom: 5px;
}
.scoredCard-fourthRow{
   background-color: #f9b851;
}

.scoredCard-fourthRow .v-col{
  padding-top: 5px;
  padding-bottom: 5px;
}

.scoredCard-lastRow{
 width:6%;
 height:20px;
 position: relative;
 left:45%;
 cursor: pointer;
 background-color: gold;
}

.infoIconBox > *{
  position:absolute;
  top:3px;
  left:3px;
}


.tooltip{
  visibility: hidden;
}
.tooltip::before{
  content:'';
  padding:9px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  z-index: -1;
  transform: rotate(45deg);
  top:3px;
  right: -4px;
}
 .infoIconBox:hover .tooltip{
  visibility: visible;
  width:90px;
  height: 25px;
  position: absolute;
  background-color: white;
  left:-100px;
  top:-2px;
  z-index: 1;
  color:black;
  font-size: 12px;
  border-radius: 3px;
  display: flex;
  place-items: center;
  place-content: center;
}
</style>
