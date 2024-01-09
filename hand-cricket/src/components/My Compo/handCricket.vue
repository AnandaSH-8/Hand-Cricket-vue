<template>
    <v-layout class="HCbox">
        <v-card class="playerOne"></v-card>
        <v-card class="stadiumDesign"></v-card>
         <v-card class="playerTwo"></v-card>
    </v-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.HCbox{
    background:rgb(129, 201, 252);
    height:92vh;
    padding: 5vh 10%;
}

.HCbox > *{
    border:2px solid red;
}

.playerTwo, .playerOne{
    width:25%;
}
.stadiumDesign{
    width:40%;
    margin:0 7%;
}
</style>