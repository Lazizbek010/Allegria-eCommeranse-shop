<template>
    <div class="famous__container__card__item">
        <router-link style="display: block;" :to="{name: 'products'}" class="famous__container__card__item__img">
            <img :src="item.img" alt="">
        </router-link>
        <h2>{{item.title}}</h2>
        <h6>{{item.name}}</h6>
        <p><span class="famous-old-item">{{item.price.oldPrice}}</span> <span class="famous-new-item">{{item.price.newPrice}}</span></p>
    </div>
</template>

<script setup>
const {item} = defineProps(['item'])
</script>

