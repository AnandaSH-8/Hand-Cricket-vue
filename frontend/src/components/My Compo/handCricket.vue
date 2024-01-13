<template>
  <v-layout class="HCbox">
    <v-container class="playerOne">
      <v-card class="RunImage">
      <img v-if="scoredRun" :src="imagePath" alt="runImg">
      </v-card>
      <v-row class="RunOptions RunOptions_firstRow">
        <v-col>
          <img @click="RunHit('Zero')" src="../../assets/component Images/Zero.svg" alt="ZeroRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('One')" src="../../assets/component Images/One.svg" alt="OneRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Two')" src="../../assets/component Images/Two.svg" alt="TwoRun" />
        </v-col>
      </v-row>
      <v-row class="RunOptions">
        <v-col>
            <img @click="RunHit('Three')" src="../../assets/component Images/Three.svg" alt="ThreeRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Four')" src="../../assets/component Images/Four.svg" alt="FourRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Five')" src="../../assets/component Images/Five.svg" alt="FiveRun" />
        </v-col>
      </v-row>
      <v-row class="RunOptions RunOptions_lastRow">
        <v-col>
          <img @click="RunHit('Six')" src="../../assets/component Images/Six.svg" alt="SixRun" />
        </v-col>
      </v-row>
    </v-container>
    <v-card class="stadiumDesign"></v-card>
    <v-card class="playerTwo"></v-card>
  </v-layout>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
const scoredRun = ref('');

function RunHit(run){
  scoredRun.value = run;
}

const imagePath = computed(()=>{
      if (scoredRun.value!== '') {
      return new URL(`../../assets/component Images/${scoredRun.value}.svg`,import.meta.url).href
    }
    return ''
})

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
}
.RunImage > img{
  width:80%;
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
  border: 3px solid rgb(129, 201, 252);
}
.stadiumDesign {
  width: 40%;
  margin: 0 7%;
}
</style>
