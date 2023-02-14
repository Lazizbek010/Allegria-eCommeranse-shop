<template>
    <div class="heart" @click="store.addToCart">
        <svg v-if="store.heart" xmlns="http://www.w3.org/2000/svg" width="21" height="18" fill="none">
            <path stroke="#254A5A" stroke-linecap="round"
                d="M2.318 2.318a4.5 4.5 0 0 1 6.364 0L10.5 4.136l1.818-1.818a4.5 4.5 0 0 1 6.364 6.364L10.5 16.864 2.318 8.682a4.5 4.5 0 0 1 0-6.364Z"
                clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="none">
            <path stroke="#E64926" stroke-linecap="round" stroke-width="9" d="m5 5 5 5 5-5" />
        </svg>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/Counter.js'
const store = useCounterStore()
</script>

