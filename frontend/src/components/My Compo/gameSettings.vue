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
                <v-container class="pt-0 battingContainer"> 
                    <b>Batting</b>
                    <v-row class="pt-2">
                        <v-col cols="1"></v-col>
                        <v-col cols="4" class="bat-options">
                        <kbd>Wickets</kbd>
                        <v-select :items="[1,2,3,4,5,10]" density="compact" variant="solo"/>
                        </v-col>
                    </v-row>
                </v-container>  
                <hr>
                <v-container class="pt-0 bowlingContainer" > 
                    <b>Bowling</b>
                    <v-row class="pt-2">
                        <v-col cols="1"></v-col>
                        <v-col cols="4" class="bowl-options">
                        <kbd>Balls</kbd>
                            <v-text-field density="compact" variant="solo"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <hr>
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

.battingContainer > b, .bowlingContainer > b{
    font-size: 18px;
}

.bat-options, .bowl-options{
    display: flex;
    justify-content: space-between;
}

:deep(.bat-options .v-input--density-compact),
:deep(.bowl-options .v-input--density-compact){
    max-width:100px !important;
    height: 25px;
}

:deep(.bat-options .v-field__field),
:deep(.bowl-options .v-field__field){
    height: 25px;
}

</style>