import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useGlobalStore = defineStore('store',() => {
  const setData = ref({
    loader:false,
    settings:null,
    tossWinMsg:null,
  })

  function setActions(value,from){
    switch (from) {
      case 'loader':{
          setData.value.loader = value;
        break;
      }
      case 'setting':{
          setData.value.settings = value;
        break;
      }
      case 'tossWin':{
          setData.value.tossWinMsg = value;
        break;
      }
    }
  }

  return {setActions,setData};
})
