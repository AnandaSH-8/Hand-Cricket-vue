import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useGlobalStore = defineStore('store',() => {
  const storeData = ref({
    loader:true
  })

  function runLoader(value){
    storeData.value.loader = value;
  }

  return {runLoader,storeData};
})
