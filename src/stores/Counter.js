import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cart: 0,
    heart: true,
  }),
  actions:{
    addToCart(){
        this.cart++
        this.heart = !this.heart
    }
  }
})