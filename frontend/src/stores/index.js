import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useGlobalStore = defineStore('store',() => {
  const storeData = ref({
    loader:false
  })

  function runLoader(value){
    storeData.value.loader = value;
  }

  return {runLoader,storeData};
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
