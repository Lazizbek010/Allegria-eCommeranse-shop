<template>
  <div class="app">
    <NavComponent></NavComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style lang="scss" scoped>

</style>