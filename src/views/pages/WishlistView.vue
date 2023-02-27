<template>
    <div class="wishlist">
        <div class="wishlist__container">
            <pushed-porduct-component 
            v-for="item in store.wishlist" :key="item"
            :item="item"
            @remove="remove"
            data-aos="zoom-in"
            data-aos-duration="1000"
            ></pushed-porduct-component>
        </div>
    </div>
</template>

<script setup>
import PushedPorductComponent from '../../components/PushedPorductComponent.vue';
import { computed, onMounted } from 'vue';
import AOS from "aos";
import { useCounterStore } from '@/stores/Counter.js'

const store = useCounterStore()
onMounted(() => {
    AOS.init();
})

const remove = (id) => {
  store.removeProductFromWishlits(id)
}
</script>

<style lang="scss" scoped></style>