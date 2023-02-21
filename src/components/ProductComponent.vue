<template>
    <div class="products__card__item">
        <div class="products__card__item__img">
            <router-link :to="{ name: 'about-product', params: {id : product.id} }">
                <img class="products__card__item__img-item" :src="product.img" alt="" />
            </router-link>
            <div class="heart" @click="like = !like">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" :fill="like ? '#ff0000' : 'none'">
                    <path :stroke="like ? '#ff0000' : '#254A5A'" stroke-linecap="round"
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

const props = defineProps(['product']);

const store = useCounterStore()
const like = ref(false)
const fav = computed(() => {
    return store,fav.find(el => el.id === p.id);
})

</script>

