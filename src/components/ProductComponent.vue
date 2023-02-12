<template>
    <div class="products__card__item">
        <div class="products__card__item__img">
            <router-link :to="{ name: 'about-product', params: { id: 1 } }">
                <img class="products__card__item__img-item" src="@/assets/images/famous-item1.png" alt="" />
            </router-link>
            <heart-component></heart-component>
            <div class="discount">
                <span class="description-text">40 %</span>
            </div>
        </div>
        <h2>george gina lucy</h2>
        <h6> Classic shoes</h6>
        <p><span class="product-old-item">6100 UAH</span> <span class="product-new-item">3800 UAH</span></p>
    </div>
</template>

<script setup>
import HeartComponent from '@/components/HeartComponent.vue';

</script>

