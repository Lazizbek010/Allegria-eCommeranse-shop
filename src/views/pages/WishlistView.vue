<template>
    <div class="wishlist">
        <div class="wishlist__container">
            <pushed-porduct-component v-for="item in 3" :key="item"></pushed-porduct-component>
        </div>
    </div>
</template>

<script setup>
import PushedPorductComponent from '../../components/PushedPorductComponent.vue';

</script>

<style lang="scss" scoped></style>