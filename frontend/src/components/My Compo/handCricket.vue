<template>
  <v-layout class="HCbox">
    <v-container class="playerOne">
      <v-card class="RunImage">
      <img :src="imagePath" alt="runImg">
      </v-card>
      <v-row id="RunOptions">
        <v-col>
          <img @click="RunHit('Zero')" src="../../assets/component Images/Zero.png" alt="ZeroRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('One')" src="../../assets/component Images/One.png" alt="OneRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Two')" src="../../assets/component Images/Two.png" alt="TwoRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Three')" src="../../assets/component Images/Three.png" alt="ThreeRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Four')" src="../../assets/component Images/Four.png" alt="FourRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Five')" src="../../assets/component Images/Five.png" alt="FiveRun" />
        </v-col>
        <v-col>
          <img @click="RunHit('Six')" src="../../assets/component Images/Six.png" alt="SixRun" />
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
  console.log(scoredRun.value,'IS AT LINE NUMBER 42');
}

const imagePath = computed(()=>{
      if (scoredRun.value!== '') {
      let a = `../../assets/component Images/${scoredRun.value}.png`;
      console.log(a,'IS AT LINE NUMBER 49');
      return a;
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

.v-row {
  margin: 0;
  margin-top: 8%;
}

#RunOptions .v-col {
  width: 35%;
  padding-top: 1%;
  padding-bottom: 2%;
}

#RunOptions .v-col:last-child {
  padding-left: 38%;
}
#RunOptions .v-col img {
  border-radius: 10% 10%;
  border: 3px solid rgb(129, 201, 252);
}
.stadiumDesign {
  width: 40%;
  margin: 0 7%;
}
</style>
