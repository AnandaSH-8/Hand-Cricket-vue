<template>
    <v-layout class="settings">
        <v-card>
            <v-card-item>
                <v-card-title class="settingTitle">
                    <v-icon color="#76B438">mdi-keyboard-backspace</v-icon>
                    <v-icon id="settingIcon" color="#76B438">mdi-cog</v-icon>
                    Settings                </v-card-title>
            </v-card-item>
            <v-card-text>
                <v-container class="pt-0 battingContainer" style="border:2px solid red;"> 
                    <b>Batting</b>
                    <v-row>
                        <v-col>Wickets</v-col>
                    </v-row>
                </v-container>
                <v-container class="pt-0 bowlingContainer"  style="border:2px solid red;"> 
                    <b>Bowling</b>
                    <v-row>
                        <v-col>Balls</v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script setup>

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
    height: 75vh;
    color:white;
    margin-bottom: 9vh;
    background-color: #f9b851;
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

.battingContainer > b{
    font-size: 18px;
}
</style>