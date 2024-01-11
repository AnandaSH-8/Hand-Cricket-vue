<template>
    <v-layout class="HCbox">
        <v-container class="playerOne">
            <v-card class="RunImage"></v-card>
            <v-row id="RunOptions">
                <v-col>
                    <img src="../../assets/component Images/Zero.png"/>
                </v-col>
                <v-col>
                    <img src="../../assets/component Images/One.png"/>
                </v-col>
                <v-col>
                    <img src="../../assets/component Images/Two.png"/>
                </v-col>
                <v-col>
                    <img src="../../assets/component Images/Three.png"/>
                </v-col>
                <v-col>
                    <img src="../../assets/component Images/Four.png"/>
                </v-col>
                <v-col>
                    <img src="../../assets/component Images/Five.png"/>
                </v-col>
                <v-col>
                    <img src="../../assets/component Images/Six.png"/>
                </v-col>
            </v-row>
        </v-container>
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

.RunImage{
    width:100%;
    height:50%;
}

.playerTwo,.playerOne{
    width:25%;
    height:40vh;
    margin-top: 8vh;
     padding: 0;
}

.playerOne{
    height:unset;
}

.v-row{
    margin: 0;
    margin-top: 8%;
}


#RunOptions  .v-col{
    width:35%;
    padding-top:3%;
    padding-bottom:3%;
}

#RunOptions  .v-col:last-child{
    padding-left: 38%;
}

.stadiumDesign{
    width:40%;
    margin:0 7%;
}
</style>