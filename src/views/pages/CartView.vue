<template>
    <div class="cart-view">
        <div v-if="!store.cartPr.length" class="empty-basket">
            <h1 class="empty-basket__title cart-view__title animate__animated animate__slow animate__bounce">Ваша корзина пуста</h1>
            <div class="empty-basket__img animate__animated animate__zoomIn animate__slow">
                <img src="@/assets/images/empty-cart.svg" alt="">
                <div class="empty-basket__img-blur"></div>
            </div>
            <p class="cart-view__desc">Добавьте что-то, чтобы сэкономить время и сделать шопинг еще более приятным.</p>
            <router-link :to="{ name: 'products' }" class="btn btn-empty-basket">перейти в каталог</router-link>
        </div>
        <div v-else class="full-basket">
            <h1 class="full-basket__title cart-view__title animate__animated animate__slow animate__shakeY">Корзина</h1>
            <div class="full-basket__border">
                <div class="full-basket__container">
                <div class="full-basket__container__info" data-aos="fade-right" data-aos-duration="1500">
                    <div class="full-basket__container__info__about-user">
                        <input class="select-font" type="text" placeholder="First Name">
                        <input class="select-font" type="text" placeholder="Last Name">
                        <input class="select-font" type="email" placeholder="Email">
                        <input class="select-font" type="tel" placeholder="Phone">  
                    </div>
                    <h3 class="select-font delivery">Доставка</h3>
                    <p class="cart-view__desc">Одесса, Отделение №1: Киевское шоссе (ран. Ленинградское шоссе), 27 Отделение
                        «Новая Почта»</p>
                    <a href="#" class="settings description-text">Редактировать </a>
                    <a href="#" class="settings description-text">Получить скидку</a>
                    <h2 class="select-font payment-method delivery">Способ оплаты</h2>
                    <div class="radio">
                        <input type="radio" name="radio-el">
                        <label class="description-text" for="">Карточкой на сайте</label>
                    </div>
                    <div class="radio">
                        <input type="radio" name="radio-el">
                        <label class="description-text" for="">При получении заказа</label>
                    </div>
                    <button class="btn order-btn" disabled>Заказать</button>
                </div>
                <div class="full-basket__container__card">
                    <div class="full-basket__container__card__item-border" 
                    v-for="item in store.cartPr" :key="item"
                    data-aos="zoom-in"
                    data-aos-duration="1500">
                        <pushed-porduct-component :item="item" @remove="remove" />
                    </div>
                    <div class="total">
                        <h1>всего: <span>7 600 UAH</span></h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pushedPorductComponent from '@/components/PushedPorductComponent.vue';
import { computed, onMounted } from 'vue';
import AOS from "aos";
import { useCounterStore } from "@/stores/Counter.js";
const store = useCounterStore();
onMounted(() => {
    AOS.init();
})

const remove = (id) => {
  store.removeProductFromCart(id)
}

</script>

<style lang="scss" scoped></style>