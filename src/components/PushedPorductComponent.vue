<template>
    <div class="wishlist__container__item">
        <div class="wishlist__container__item-content">
            <div style="cursor: pointer" class="wishlist__container__item-content__close" @click="$emit('remove', item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                    <path stroke="#0F303F" d="m1 1 20 20M21 1 1 21" />
                </svg>
            </div>
            <div v-if="item" class="wishlist__container__item-content__info">
                <div class="wishlist__container__item-content__info__img">
                    <img :src="item.img" alt="">
                </div>
                <div class="wishlist__container__item-content__info__text">
                    <h2>{{ item.title }}</h2>
                    <h6>{{ item.name }}</h6>
                    <p v-if="item.price" class="product-price"><span class="old-price">{{item.price.oldPrice}}</span> <span class="new-price">{{item.price.newPrice}}</span>
                    </p>
                    <p>{{ item.count }}</p>
                    <button class="btn add-to-cart-btn" id="btn-wishlist">добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/Counter.js";
const store = useCounterStore();
defineProps({
    item: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="scss" scoped></style>