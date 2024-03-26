<template>
    <v-layout class="footerLayout">
        <!-- <v-sheet class="footerLogo">
            <img src="../assets/component Images/hc7-transformed.png" alt="">
        </v-sheet> -->
        <v-sheet class="footersheetContent px-10">
            <h1>Hand Cricket</h1>
            <p>Made by <a class="portfolio" href="https://ash-portfolio-two.vercel.app/">ASH</a></p>
            <p>Connect</p>
            <div class="footerIcons">
                <a class="footerGit" href="https://github.com/Anands-88">
                    <v-icon icon="mdi-github"></v-icon>
                </a>
                <a class="footerLinked" href="https://linkedin.com/in/https://www.linkedin.com/in/ananda-s-holla-268b94147/">
                    <v-icon icon="mdi-linkedin"></v-icon>
                </a>
                <a class="footerTwitter" href="https://x.com/anandsholla8"> 
                    <v-icon icon="mdi-twitter"></v-icon>
                </a>
            </div>
            <p style="font-size: 12px">© HandCricket 2024</p>
        </v-sheet>
        <!-- <v-sheet></v-sheet> -->
    </v-layout>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style>
.footerLayout{
    background-color: #f9b851;
    place-content: center;
    /* justify-content: space-between; */
}

.footerLogo{
    width:100px;
    height:100px;
}

.footerLogo > img{
    width:100%;
    height:100%;
}

.footerLayout > .footersheetContent{
    background-color: #fcb037;
    text-align: center;
    color:white;
    font-family: 'Gugi';
}

.footersheetContent > p{
    font-size: 13px;
}

.footerIcons{
    display: flex;
    width:70%;
    margin: auto;
    justify-content: space-evenly;
}

.portfolio, .footerIcons > *{
    color:white;
}

.portfolio:hover, .footerIcons :hover{
    background-color:#f9b851;
}

.portfolio:hover, .footerIcons > .footerTwitter:hover{
    color:#188fff;
}

.footerGit:hover{
    color:black;
}

.footerLinked:hover{
    color:#0A66C2;
}
</style>