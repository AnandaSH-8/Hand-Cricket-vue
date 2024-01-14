<template>
  <v-layout class="HCbox">
    <v-container class="playerOne">
      <v-card class="RunImage">
        <img v-if="scoredRun" :src="imagePath" alt="runImg">
      </v-card>
      <v-row class="RunOptions RunOptions_firstRow">
        <v-col>
          <img @click="RunHit('Zero')" :style="{border:scoredRun =='Zero' ? '2px solid red':'3px solid #81c9fc'}"
            src="../../assets/component Images/Zero.svg" alt="ZeroRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('One')" :style="{border:scoredRun =='One' ? '2px solid red':'3px solid #81c9fc'}" 
            src="../../assets/component Images/One.svg" alt="OneRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Two')" :style="{border:scoredRun =='Two' ? '2px solid red':'3px solid #81c9fc'}" 
            src="../../assets/component Images/Two.svg" alt="TwoRun" />
        </v-col>
      </v-row>
      <v-row class="RunOptions">
        <v-col>
            <img @click="RunHit('Three')" :style="{border:scoredRun =='Three' ? '2px solid red':'3px solid #81c9fc'}" 
              src="../../assets/component Images/Three.svg" alt="ThreeRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Four')" :style="{border:scoredRun =='Four' ? '2px solid red':'3px solid #81c9fc'}" 
            src="../../assets/component Images/Four.svg" alt="FourRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Five')" :style="{border:scoredRun =='Five' ? '2px solid red':'3px solid #81c9fc'}" 
            src="../../assets/component Images/Five.svg" alt="FiveRun" />
        </v-col>
      </v-row>
      <v-row class="RunOptions RunOptions_lastRow">
        <v-col>
          <img @click="RunHit('Six')" :style="{border:scoredRun =='Six' ? '2px solid red':'3px solid #81c9fc'}" 
            src="../../assets/component Images/Six.svg" alt="SixRun" />
        </v-col>
      </v-row>
    </v-container>
    <v-card class="stadiumDesign">
      <strong v-if="timer != null">{{ timer == 0 ? "Let's Go":timer }}</strong>
    </v-card>
    <v-card class="playerTwo"></v-card>
  </v-layout>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
let scoredRun = ref('');
let timer = ref(null);

const imagePath = computed(()=>{
      if (scoredRun.value!== '') {
      return new URL(`../../assets/component Images/${scoredRun.value}.svg`,import.meta.url).href
    }
    return ''
})

function RunHit(run){
  // const emptyCard = setTimeout(()=>{
  //     scoredRun.value = '';
  //     clearTimeout(emptyCard);
  // },10000)
  scoredRun.value = run;

  timer.value = 3;
  const timeEnds = setInterval(()=>{
      timer.value--
      if(timer.value == 0){
        displayComputerRun()
        clearInterval(timeEnds)
      }
  },1500)
}

function displayComputerRun(){
  //
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

.RunImage {
  width: 100%;
  height: 50%;
  border-radius: 5%;
  text-align: center;
  background: #76B438;
}
.RunImage > img{
  width:90%;
  margin-top: 10%;
  height: 80%;
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
}
.stadiumDesign {
  width: 40%;
  margin: 0 7%;
  display: flex;
  place-content: center;
  place-items: center;
}

.stadiumDesign > strong{
  font-size: 50px;
  color:red;
  z-index: 100;
}
</style>
