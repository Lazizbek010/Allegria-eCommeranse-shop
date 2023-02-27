<template>
    <div class="products__card__item">
        <div class="products__card__item__img">
            <router-link :to="{ name: 'about-product', params: {id : product.id} }">
                <img class="products__card__item__img-item" :src="product.img" alt="" />
            </router-link>
            <div class="heart" @click="addToWishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" :fill="fav ? '#ff0000' : 'none'">
                    <path :stroke="fav ? '#ff0000' : '#254A5A'" stroke-linecap="round"
                        d="M2.318 2.318a4.5 4.5 0 0 1 6.364 0L10.5 4.136l1.818-1.818a4.5 4.5 0 0 1 6.364 6.364L10.5 16.864 2.318 8.682a4.5 4.5 0 0 1 0-6.364Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="discount">
                <span class="description-text">{{ product.discount }}</span>
            </div>
        </div>
        <h2>{{ product.title }}</h2>
        <h6> {{product.name}}</h6>
        <p><span class="product-old-item">{{product.price.oldPrice}}</span> <span class="product-new-item">{{product.price.newPrice}}</span></p>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/Counter.js'
import { ref, computed, defineProps } from 'vue'

const { product } = defineProps(['product']);

const store = useCounterStore()
const fav = computed(() => {
    return store.wishlist.find(el => el.id === product.id);
})

function addToWishlist(){
    if(!fav.value) {
        store.wishlist.push(product)
    }
    else {
        store.wishlist = store.wishlist.filter(p => p.id !== product.id)
    }

    localStorage.setItem('WISH', JSON.stringify(store.wishlist))
}

</script>

