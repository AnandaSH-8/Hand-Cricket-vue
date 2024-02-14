<template>
  <v-layout class="HCbox">
    <v-container class="playerOne">
      <v-card class="RunImage">
       <v-card-title class="cardTitle">You</v-card-title>
        <img v-if="gameKeys.scoredRun" :src="gameKeys.imagePath" alt="runImg">
      </v-card>
      <v-row class="RunOptions RunOptions_firstRow">
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun =='Zero' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Zero.svg"
            alt="ZeroRun" @click="RunHit('Zero')" />
        </v-col>
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun =='One' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/One.svg" 
            alt="OneRun" @click="RunHit('One')" />
        </v-col>
        <v-col>
          <img
            :style="{border:gameKeys.scoredRun =='Two' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Two.svg" 
            alt="TwoRun" @click="RunHit('Two')" />
        </v-col>
      </v-row>
      <v-row class="RunOptions">
        <v-col>
            <img
              :style="{border:gameKeys.scoredRun =='Three' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Three.svg" 
              alt="ThreeRun" @click="RunHit('Three')" />
        </v-col>
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun =='Four' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Four.svg" 
            alt="FourRun" @click="RunHit('Four')" />
        </v-col>
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun =='Five' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Five.svg" 
            alt="FiveRun" @click="RunHit('Five')" />
        </v-col>
      </v-row>
      <v-row class="RunOptions RunOptions_lastRow">
        <v-col>
          <img
              :style="{border:gameKeys.scoredRun =='Six' ? '2px solid red':'3px solid #81c9fc'}" src="../../assets/component Images/Six.svg" 
            alt="SixRun" @click="RunHit('Six')" />
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
     <img v-if="gameKeys.computerRun" :src="gameKeys.computerRun" alt="runImg">
    </v-card>
    <HangingBoard :data="gameKeys.propsData" @close-board="closeDialog"></HangingBoard>
  </v-layout>
</template>

<script setup>
import HangingBoard from "./hangingBoard.vue"
import {ref, onMounted} from 'vue';
let gameKeys = ref({
  scoredRun:'',
  timer:null,
  computerRun:'',
  imagePath:'',
  propsData:{open:false, part:''}
})

onMounted(() => {
//  gameKeys.value.tossTime = true;
  gameKeys.value.propsData = {open:true, part:'toss'}

})

function RunHit(run=""){
  // const emptyCard = setTimeout(()=>{
  //     scoredRun.value = '';
  //     clearTimeout(emptyCard);
  // },10000)
  gameKeys.value.scoredRun = run;
  if (gameKeys.value.scoredRun!== '') {
    gameKeys.value.imagePath =  new URL(`../../assets/component Images/${gameKeys.value.scoredRun}.svg`,import.meta.url).href
  }
  displayComputerRun()
}

function displayComputerRun(){
    gameKeys.value.timer = 3;
    const timeEnds = setInterval(()=>{
        gameKeys.value.timer--
        if(gameKeys.value.timer == 0){
          const runs = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'];
          const runScored = runs[Math. floor(Math. random() * runs. length)];
          gameKeys.value.computerRun = new URL(`../../assets/component Images/${runScored}.svg`,import.meta.url).href
          clearInterval(timeEnds)
        }
    },1500)
}

function closeDialog(){
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
