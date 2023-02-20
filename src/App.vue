<template>
  <div class="app">
    <NavComponent></NavComponent>
    <router-view />
    <FooterComponent></FooterComponent>
    <transition name="fade">
    <div class="toTop" v-if="scY > 200" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </div>
  </transition>
  </div>
</template>

<script setup>
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref, onMounted } from 'vue';

const scTimer = ref(0);
const scY =  ref(0);

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
function handleScroll(){
    if (scTimer.value) return;
    scTimer.value = setTimeout(() => {
      scY.value = window.scrollY;
      clearTimeout(scTimer.value);
      scTimer.value = 0;
    }, 100);
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}</style>