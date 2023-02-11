import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    num: 0
  }),
  actions:{
    incMe(){
        this.num++
    }
  }
})