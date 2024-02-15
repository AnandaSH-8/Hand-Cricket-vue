<template>
  <v-layout class="HCbox">
    <v-container class="playerOne">
      <v-card class="RunImage">
       <v-card-title class="cardTitle">You</v-card-title>
        <img v-if="gameKeys.scoredRun.str" :src="gameKeys.imagePath" alt="runImg">
      </v-card>
      <v-row class="RunOptions RunOptions_firstRow">
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun.str =='Zero' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Zero.svg"
            alt="ZeroRun" @click="RunHit('Zero',0)" />
        </v-col>
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun.str =='One' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/One.svg" 
            alt="OneRun" @click="RunHit('One',1)" />
        </v-col>
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun.str =='Two' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Two.svg" 
            alt="TwoRun" @click="RunHit('Two',2)" />
        </v-col>
      </v-row>
      <v-row class="RunOptions">
        <v-col>
            <img
              :style="{border:gameKeys.scoredRun.str =='Three' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Three.svg" 
              alt="ThreeRun" @click="RunHit('Three',3)" />
        </v-col>
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun.str =='Four' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Four.svg" 
            alt="FourRun" @click="RunHit('Four',4)" />
        </v-col>
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun.str =='Five' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Five.svg" 
            alt="FiveRun" @click="RunHit('Five',5)" />
        </v-col>
      </v-row>
      <v-row class="RunOptions RunOptions_lastRow">
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun.str =='Six' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Six.svg" 
            alt="SixRun" @click="RunHit('Six',6)" />
        </v-col>
      </v-row>
    </v-container>
    <v-card class="stadiumDesign">
      <v-card-text>
        <strong v-if="gameKeys.timer != null">{{ gameKeys.timer == 0 ? '' :gameKeys.timer }}</strong>
      </v-card-text>
      <v-card-actions class="stadiumActions">
        <!-- <template v-if="gameKeys.tossTime"> 
          <p>It's time for Toss! Choose any</p>
          <v-btn class="tossBtn globalButton mr-6" @click="tossSelected('Odd')">Odd</v-btn>
          <v-btn class="tossBtn globalButton" @click="tossSelected('Even')">Even</v-btn>
        </template>
        <template v-if="gameKeys.tossSelected">
          <p>Great! You chose {{ gameKeys.tossSelected }}. Now click on any Hand Gesture for the Toss</p>
        </template> -->
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
let gameKeys = ref({
  computerRun:{str:'',num:''},
  gameStage:'',
  imagePath:'',
  propsData:{open:false, part:''},
  scoredRun:{str:'',num:null},
  timer:null,
  tossSelected:''

})

onMounted(() => {
  gameKeys.value.propsData = {open:true, part:'toss'}

})

function RunHit(run,inNum){
  if(gameKeys.value.gameStage !== 'toss'){
      const emptyCard = setTimeout(()=>{
        gameKeys.value.scoredRun.str = '';
        clearTimeout(emptyCard);
    },5000)
  }
  gameKeys.value.scoredRun = {str:run,num:inNum}
  if (gameKeys.value.scoredRun.str !== '') {
    gameKeys.value.imagePath =  new URL(`../../assets/component Images/${gameKeys.value.scoredRun.str}.svg`,import.meta.url).href
  }
  displayComputerRun()
}

function displayComputerRun(){
    gameKeys.value.timer = 4;
    const timeEnds = setInterval(()=>{
        gameKeys.value.timer--
        if(gameKeys.value.timer == 0){
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
          clearInterval(timeEnds)
        }
    },1500)

    checkRunandResult()
}

function checkRunandResult(){
  let {computerRun,scoredRun,gameStage,tossSelected} = gameKeys.value;
  const runs = computerRun.num + scoredRun.num;
  if(gameStage == 'toss'){
    const tossDecision = runs/2 ? 'Odd' : 'Even';
    if(tossSelected == tossDecision){
      gameKeys.value.propsData = {open:true,part:'tossWin'}
    }
    else{
      const options = ['Bat','Bowl'];
      const compSelection = options[Math.round(Math.random()*1)];
      gameKeys.value.propsData = {open:true,part:'tossLose',result:compSelection};
    }
  }
}

function closeDialog(time,toss){
   gameKeys.value.scoredRun.str = '';
  gameKeys.value.gameStage = time;
  gameKeys.value.tossSelected = toss;
  gameKeys.value.propsData = {open:false,part:''}
}

</script>

<style scoped>
.HCbox {
  background: rgb(129, 201, 252);
  height: 92vh;
  padding: 5vh 10%;
}

.HCbox > * {
  border-radius: 5%;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
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
  border: 3px solid #81c9fc;
  cursor: pointer;
}
.stadiumDesign {
  width: 40%;
  margin: 0 7%;
   color: #f9b851;
}

.stadiumDesign  strong{
  font-size: 50px;
  /* color:#f9b851; */
  z-index: 100;
}

.playerTwo{
  background: #76B438;
}
</style>
