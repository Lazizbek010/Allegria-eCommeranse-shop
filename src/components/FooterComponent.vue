<template>
    <div class="footer">
        <div class="footer__info">
            <h1 class="footer__info__title">Будьте в курсе событий</h1>
            <div class="footer__info__form">
                <input type="email" placeholder="E-mail">
                <button @click="discountModal = !discountModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="none"><path stroke="#E64926" d="M0 4h8.5m0 0L6 1m2.5 3L6 7"/></svg>
                </button>
            </div>
            <ul class="footer__info__list">
                <li><router-link :to="{name: 'about-us'}">О нас</router-link></li>
                <li><router-link :to="{name: 'common-questions'}">Распространенные вопросы</router-link></li>
                <li><router-link :to="{name: 'brands'}">Бренды</router-link></li>
            </ul>
        </div>
        <div class="footer__author">
            <div class="container">
                <p>Все права защищены  &copy; Lazizbek Isaqov</p>
                <p>Дизайн и разработка:</p>
            </div>
        </div>
        <!-- Count Modal -->
        <div class="overlay" v-show="discountModal" @click="discountModal = false"></div>
        <div class="modal count-modal" v-show="discountModal">
            <div class="close-modal" @click="discountModal = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path stroke="#0F303F" d="m1 1 20 20M21 1 1 21"/></svg>
            </div>
            <h1 class="avenir-800">Получите<span>10%</span> скидки </h1>
            <input class="nav-text-font" type="email" placeholder="E-mail">
            <p class="description-text">Подпишитесь на наши новости и получите 10% скидки на первый заказ!</p>
            <button class="btn count-modal__btn">Отправить</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let discountModal = ref(false);

</script>

<style>
    
</style>
