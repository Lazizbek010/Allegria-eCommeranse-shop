<template>
    <div class="wishlist">
        <div class="wishlist__container">
            <pushed-porduct-component 
            v-for="item in 3" :key="item"
            data-aos="zoom-in"
            data-aos-duration="1000"
            ></pushed-porduct-component>
        </div>
    </div>
</template>

<script setup>
import PushedPorductComponent from '../../components/PushedPorductComponent.vue';
import { onMounted } from 'vue';
import AOS from "aos";
onMounted(() => {
    AOS.init();
})
</script>

<style lang="scss" scoped></style>