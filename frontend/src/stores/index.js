import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useGlobalStore = defineStore('store',() => {
  const setData = ref({
    userName:"",
    loader:false,
    settings:null,
    tossWinMsg:null,
  })

  function setActions(value,from){
    switch (from) {
      case 'username':{
        setData.value.userName = value;
        break;
      }
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
