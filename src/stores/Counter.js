import { defineStore } from 'pinia';
import { ref } from 'vue';
import allProducts from './allProducts';
const WISHLIST_KEY = 'WISH'
const CART_KEY = 'CART'


export const useCounterStore = defineStore('counter', () => {
  // Variables ==============
  const cart = ref(0);
  const wishlist = ref(JSON.parse(localStorage.getItem(WISHLIST_KEY))) ?? ref([]);
  const cartPr = ref(JSON.parse(localStorage.getItem(CART_KEY))) ?? ref([]);
  const products = ref([]);

  
  // Functions ============= 
  function addToCart(p) {
    if(!p.count) p.count = 1
    let num = 0;
    cartPr.value.forEach(d => {
      if(d.id === p.id) {
        d.count++
        num++
      };
    })
    if(!num) cartPr.value.push(p)
    localStorage.setItem(CART_KEY, JSON.stringify(cartPr.value))

  }

  function removeProductFromCart(id) {
    cartPr.value = cartPr.value.filter(p => p.id !== id)
    localStorage.setItem(CART_KEY, JSON.stringify(cartPr.value))
  }
  function removeProductFromWishlits(id) {
    wishlist.value = wishlist.value.filter(p => p.id !== id)
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist.value))
  }
  async function getProducts(){
    const res = await fetch('https://mocki.io/v1/09d5a176-7600-40df-8eb7-37065f6d1aac');
    const data = await res.json();
    products.value = data;
  }
  
  return {allProducts, cart, wishlist, cartPr, products, addToCart, getProducts, removeProductFromCart, removeProductFromWishlits };
})

