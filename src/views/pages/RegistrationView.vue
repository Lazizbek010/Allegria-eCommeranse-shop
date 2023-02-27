<template>
    <div class="registrsation">
        <h1 class="registrsation__title user-modal-title animate__animated animate__slow animate__shakeX">Регистрация</h1>
        <form action="#" class="registrsation__form" 
        data-aos="zoom-in"
        data-aos-duration="1000">
            <input class="select-font" type="text" placeholder="Имя">
            <input class="select-font" type="text" placeholder="Фамилия">
            <input class="select-font" type="tel" placeholder="Телефон">
            <input class="select-font" type="email" placeholder="E-mail">
            <div class="registrsation__form__password">
                <input v-if="showPassword" class="select-font" type="password" placeholder="Пароль" v-model="password">
                <input v-else class="select-font" type="text" placeholder="Пароль" v-model="password">
                <div class="eye">
                    <svg @click="showPassword = false" v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><g fill="#B7C1C5" clip-path="url(#a)"><path d="M7 1.75c3.235 0 5.979 2.193 7 5.25-1.021 3.056-3.765 5.25-7 5.25S1.021 10.056 0 7c1.021-3.057 3.765-5.25 7-5.25Zm0 8.75a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M5.763 5.763a1.75 1.75 0 1 0 2.474 2.474 1.75 1.75 0 0 0-2.474-2.474Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M14 0H0v14h14z"/></clipPath></defs></svg>
                    <svg @click="showPassword = true" v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><g fill="#B7C1C5" clip-path="url(#a)"><path d="m6.894 4.783 2.004 2.004.01-.105a1.91 1.91 0 0 0-1.91-1.909l-.104.01Z"/><path d="M7 3.501a3.182 3.182 0 0 1 3.18 3.181c0 .41-.082.802-.226 1.161l1.861 1.861a7.557 7.557 0 0 0 2.186-3.022c-1.104-2.793-3.817-4.771-7.002-4.771-.89 0-1.743.159-2.535.445l1.374 1.371c.36-.14.75-.226 1.161-.226ZM.636 1.767l1.45 1.45.29.29A7.536 7.536 0 0 0 0 6.682a7.525 7.525 0 0 0 6.998 4.772 7.46 7.46 0 0 0 2.79-.538l.27.27 1.855 1.858.811-.808L1.447.956l-.81.811Zm3.519 3.515.982.983a1.91 1.91 0 0 0 1.86 2.325c.145 0 .281-.018.415-.047l.983.983a3.13 3.13 0 0 1-1.397.337 3.182 3.182 0 0 1-3.18-3.181c0-.503.127-.973.337-1.4Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></svg>
                </div>
            </div>
            <div class="registrsation__form__password">
                <input v-if="showPassword2" class="select-font" type="password" placeholder="Повторите пароль" v-model="password2">
                <input v-else class="select-font" type="text" placeholder="Повторите пароль" v-model="password2">
                <div class="eye">
                    <svg @click="showPassword2 = false" v-if="showPassword2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><g fill="#B7C1C5" clip-path="url(#a)"><path d="M7 1.75c3.235 0 5.979 2.193 7 5.25-1.021 3.056-3.765 5.25-7 5.25S1.021 10.056 0 7c1.021-3.057 3.765-5.25 7-5.25Zm0 8.75a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M5.763 5.763a1.75 1.75 0 1 0 2.474 2.474 1.75 1.75 0 0 0-2.474-2.474Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M14 0H0v14h14z"/></clipPath></defs></svg>
                    <svg @click="showPassword2 = true" v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><g fill="#B7C1C5" clip-path="url(#a)"><path d="m6.894 4.783 2.004 2.004.01-.105a1.91 1.91 0 0 0-1.91-1.909l-.104.01Z"/><path d="M7 3.501a3.182 3.182 0 0 1 3.18 3.181c0 .41-.082.802-.226 1.161l1.861 1.861a7.557 7.557 0 0 0 2.186-3.022c-1.104-2.793-3.817-4.771-7.002-4.771-.89 0-1.743.159-2.535.445l1.374 1.371c.36-.14.75-.226 1.161-.226ZM.636 1.767l1.45 1.45.29.29A7.536 7.536 0 0 0 0 6.682a7.525 7.525 0 0 0 6.998 4.772 7.46 7.46 0 0 0 2.79-.538l.27.27 1.855 1.858.811-.808L1.447.956l-.81.811Zm3.519 3.515.982.983a1.91 1.91 0 0 0 1.86 2.325c.145 0 .281-.018.415-.047l.983.983a3.13 3.13 0 0 1-1.397.337 3.182 3.182 0 0 1-3.18-3.181c0-.503.127-.973.337-1.4Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></svg>
                </div>
            </div>
            <div class="registrsation__form__check">
                <input type="checkbox" id="subscribe1">
                <label for="subscribe1">Подпсаться на рассылку</label>
            </div>
            <div class="registrsation__form__check">
                <input  type="checkbox" id="subscribe">
                <label for="subscribe">Я согласен с <span>политикой конфиденциальности</span></label>
            </div>
            <div class="registrsation__form__check registrsation__form__bottom">
                <button class="btn btn-register">Зарегистрироваться</button>
                <label>У меня уже есть акаунт чтобы  <span>войти</span></label>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from "aos";

const showPassword = ref(true)
const showPassword2 = ref(true)
const password = ref("");
const password2 = ref("");
onMounted(() => {
    AOS.init();
})

</script>

<style lang="scss" scoped>

</style>