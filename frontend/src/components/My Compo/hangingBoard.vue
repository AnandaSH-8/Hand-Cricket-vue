<template>
    <v-dialog v-model="board.open">
			<div class="boardCard">
       <!-- <v-card variant="flat" width="380" height="300" class="boardCard"> -->
			 <v-card-actions class="stadiumActions">
          <template v-if="board.part == 'toss'">
						<p class="boardTitle">It's time for Toss! Choose any</p>
						<v-btn size="small" class="tossBtn globalButton mr-6" @click="tossSelected('Odd')">Odd</v-btn>
						<v-btn size="small" class="tossBtn globalButton" @click="tossSelected('Even')">Even</v-btn>
					</template>
					<template v-if="board.part == 'tossKey'">
						<p class="boardTitle">Great! You chose “{{ board.toss }}”. Now click on any Hand Gesture for the Toss</p>
						<v-btn size="small" class="tossBtn globalButton" @click="closeBoard">Ok</v-btn>
					</template>
				</v-card-actions> 	
			</div>
       <!-- </v-card> -->
    </v-dialog>
</template>
<script setup>
import { ref,watch } from 'vue';
const props = defineProps({
	data:Object
})
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
  })
	
function tossSelected(toss){
	board.value = {open:true,part:'tossKey',toss}
}

function closeBoard(){
	board.value.open = false;
	emit('closeBoard')
}

</script>
<style scoped>
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
  top:75%;
  transform: translateY(-100%);
  display:block;
  text-align:center;
	width:86%;
	height: 110px;
	margin:0 auto;
}

.stadiumActions .boardTitle{
  font-size: 20px;
	color:#ffb744;
	font-weight: 900;
}

.tossBtn{
  gap:1vh;
}
</style>