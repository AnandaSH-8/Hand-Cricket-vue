<template>
    <v-layout class="settings">
        <v-card>
            <v-card-item>
                <v-card-title class="settingTitle">
                <v-icon>mdi-cog</v-icon>
                Settings
                </v-card-title>
            </v-card-item>
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
    margin-bottom: 9vh;
    background-color: #f9b851;
}
.settingTitle{
    color:white;
    text-align: center;
    font-size: 25px;
    font-weight: 800;
    padding-top: 2vh;
}
</style>