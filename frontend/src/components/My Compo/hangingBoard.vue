<template>
    <v-dialog v-model="board.open">
			<div class="boardCard">
				<v-card-actions class="stadiumActions">
          			<template v-if="board.part == 'toss'">
						<p class="boardTitle">It's time for Toss! Choose any</p>
						<v-btn size="small" class="tossBtn globalButton mr-6" @click="tossSelected('Odd')">Odd</v-btn>
						<v-btn size="small" class="tossBtn globalButton" @click="tossSelected('Even')">Even</v-btn>
					</template>
					<template v-if="board.part == 'tossKey'">
						<p class="boardTitle">Great! You chose <strong>{{ board.toss }}</strong>; <br>
						 Now click on any Hand Gesture for the Toss</p>
						<v-btn size="small" class="tossBtn globalButton" @click="closeBoard(true,'toss')">Ok</v-btn>
					</template>
					<template v-if="board.part == 'tossWin'">
						<p class="boardTitle">Congratulations!
							<br>
							You've won the toss; 
							<br>
							It's time to choose
						</p>
						<v-btn size="small" class="tossBtn globalButton" @click="optionSelection('Bat')">Bat</v-btn>
						<v-btn size="small" class="tossBtn globalButton" @click="optionSelection('Bowl')">Bowl</v-btn>
					</template>
					<template v-if="board.part == 'tossLose'">
						<p class="boardTitle">Bad Luck! Computer won the toss 
							<br>
							and decided to {{ board.result }} first!
						</p>
						<v-btn size="small" class="tossBtn globalButton" @click="closeBoard(true,'game')">Ok</v-btn>
					</template>
					<template v-if="board.part == 'gamePlan'">
						<p class="boardTitle">Great! You chose to <strong>{{ board.opt }}</strong>;
						 	<br>
							Let's Start the Game. Are you Ready?
						</p>
						<v-btn size="small" class="tossBtn globalButton" @click="closeBoard(true,'game')">Yes</v-btn>
						<v-btn size="small" class="tossBtn globalButton" @click="closeBoard(false)">No</v-btn>
					</template>
					<template v-if="board.part == 'restart'">
						<p class="boardTitle">Do you want to <strong>Quit/Restart</strong> Game?</p>
						<v-btn size="small" class="tossBtn globalButton" @click="quitRestart(false)">Quit</v-btn>
						<v-btn size="small" class="tossBtn globalButton" @click="quitRestart(true)">Restart</v-btn>
					</template>
					<template v-if="board.part == 'firstIng'">
						<p class="boardTitle"></p>
						<!-- <v-btn size="small" class="tossBtn globalButton" @click="quitRestart(false)">Quit</v-btn>
						<v-btn size="small" class="tossBtn globalButton" @click="quitRestart(true)">Restart</v-btn> -->
					</template>
				</v-card-actions> 	
			</div>
    </v-dialog>
</template>
<script setup>
import { useGlobalStore } from '@/stores';
import { ref,watch } from 'vue';
import { useRouter } from 'vue-router'
const props = defineProps({
	data:Object
})
const router = useRouter();
const store = useGlobalStore();
const emit = defineEmits(['closeBoard'])

const board = ref({
	open:false,
	part:'',
})

watch(() => props.data,
  (value) => {
    if(value){
		board.value = value;
	}
	store.setActions(false,'loader');
  })
	
function tossSelected(toss){
	board.value = {open:true,part:'tossKey',toss}
}

function closeBoard(result,value){
	if(result){
		board.value.open = false;
		if(value == 'toss') emit('closeBoard',value, board.value.toss);
		else emit('closeBoard',value);
	}
	else{
		board.value = {open:true,part:'restart'}
	}
}

function optionSelection(opt){
	const message = `You won the toss and chose to ${opt} first`;
	store.setActions(message,'tossWin');
	board.value = {open:true,part:'gamePlan',opt};
}

function quitRestart(restart){
	if(restart){
		board.value = {open:true,part:'toss'};
	}
	else{
		router.push({path:'/gameHome'});
	}
}

</script>
<style scoped>
.v-overlay{
	z-index: 100
}	
.boardCard{
		margin:auto;
		width: 380px;
		height: 300px;;
		background-color:transparent;
		background-size: cover;
		background-position-y: -50px;
		background-image:url('../../assets/component Images/woodBoard.png');
	}

:deep(.v-overlay__content){
		top:0;
		margin:0;
	}

	.stadiumActions{
  position: relative;
  top:35%;
  display:block;
  text-align:center;
	width:86%;
	height: 110px;
	margin:0 auto;
}

.stadiumActions .boardTitle{
	font-size: 20px;
	color:white;
	font-weight: 600;
}

.tossBtn{
  gap:1vh;
}
:deep(.stadiumActions .v-btn__content){
font-weight: 700;
}
</style>