<template>
    <div>
        <!-- NAVBAR -->
        <div class="nav">
            <div class="container">
                <div class="logo">
                    <img src="@/assets/images/logo.svg" alt="logo">
                </div>
                <div class="nav-right">
                    <nav-menu-component class="hidden"></nav-menu-component>
                    <div class="nav-icons">
                        <div class="nav-user" @click="openEntranceModal = true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none">
                                <path fill="#254A5A" fill-rule="evenodd"
                                    d="M14.928 17a7.001 7.001 0 0 0-13.856 0h13.856Zm1.01 0a7.999 7.999 0 0 0-13.595-4.657A8 8 0 0 0 0 18h16a8 8 0 0 0-.063-1ZM8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="nav-heart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" fill="none">
                                <path stroke="#254A5A" stroke-linecap="round"
                                    d="M2.318 2.318a4.5 4.5 0 0 1 6.364 0L10.5 4.136l1.818-1.818a4.5 4.5 0 0 1 6.364 6.364L10.5 16.864 2.318 8.682a4.5 4.5 0 0 1 0-6.364Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <div v-if="store.cart > 0" class="heart-abso description-text">{{ store.cart }}</div>
                        </div>
                        <div class="nav-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" fill="none">
                                <path stroke="#254A5A" d="M.5 6.5h15v12H.5zM13 6A5 5 0 0 0 3 6" />
                            </svg>
                        </div>
                        <div class="hamburger" @click="resNav = !resNav">
                            <img v-if="resNav" src="@/assets/icons/hamburger-min.svg" alt="" width="20" height="13">
                            <img v-else src="@/assets/icons/close.svg" alt="" width="20" height="13">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Responsive Navbar -->
        <div class="res-nav" :class="{ 'hidden': resNav }">
            <div class="res-nav__container">
                <div class="res-nav__menu">
                    <nav-menu-component></nav-menu-component>
                </div>
                <ul class="res-nav__list">
                    <li class="res-nav__list__item">
                        <span>ОДЕЖДА</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none">
                            <path stroke="#E64926" d="M0 1h10"></path>
                        </svg>
                        <ul class="res-nav__list__item__tit">
                            <li class="res-nav__list__item__tit-list">Свитера толтовки</li>
                            <li class="res-nav__list__item__tit-list">Платья юбки</li>
                            <li class="res-nav__list__item__tit-list">Футболки и топы</li>
                            <li class="res-nav__list__item__tit-list">Брюки и шорты</li>
                            <li class="res-nav__list__item__tit-list">Рубашки</li>
                            <li class="res-nav__list__item__tit-list">Комбинезоны</li>
                            <li class="res-nav__list__item__tit-list">Леггинсы</li>
                        </ul>
                    </li>
                    <li class="res-nav__list__item">
                        <span>ОБУВЬ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
                            <path stroke="#000" d="M5 0v10M0 5h10"></path>
                        </svg>
                    </li>
                    <li class="res-nav__list__item">
                        <span>СУМКИ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
                            <path stroke="#000" d="M5 0v10M0 5h10"></path>
                        </svg>
                    </li>
                    <li class="res-nav__list__item">
                        <span>АКСЕСУАРЫ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
                            <path stroke="#000" d="M5 0v10M0 5h10"></path>
                        </svg>
                    </li>
                    <li class="res-nav__list__item">
                        <span>БЕЛЬЕ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
                            <path stroke="#000" d="M5 0v10M0 5h10"></path>
                        </svg>
                    </li>
                </ul>
                <ul class="res-nav__bottom">
                    <li><a href="#">DEHA</a></li>
                    <li><a href="#">American vintage</a></li>
                    <li><a href="#">george gina lucy</a></li>
                    <li><a href="#">birkenstock</a></li>
                </ul>
            </div>
        </div>
        <!-- USER ENTRANCE MODAL -->
        <div class="overlay" v-show="openEntranceModal" @click="openEntranceModal = false"></div>
        <div class="modal modal-enrtance" v-show="openEntranceModal">
            <div class="close-modal" @click="openEntranceModal = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                    <path stroke="#0F303F" d="m1 1 20 20M21 1 1 21" />
                </svg>
            </div>
            <h1 class="user-modal-title">ВХОД</h1>
            <form action="#" class="modal-enrtance__form">
                <input class="select-font" type="email" placeholder="E-amil" name="user-email">
                <div class="user-password">
                    <input v-if="showPassword" class="select-font" type="password" v-model="password" placeholder="Пароль">
                    <input v-else class="select-font" type="text" v-model="password" placeholder="Пароль">
                    <div class="eye">
                        <svg @click="showPassword = false" v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
                            <g fill="#B7C1C5" clip-path="url(#a)">
                                <path
                                    d="M7 1.75c3.235 0 5.979 2.193 7 5.25-1.021 3.056-3.765 5.25-7 5.25S1.021 10.056 0 7c1.021-3.057 3.765-5.25 7-5.25Zm0 8.75a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                                <path d="M5.763 5.763a1.75 1.75 0 1 0 2.474 2.474 1.75 1.75 0 0 0-2.474-2.474Z" />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M14 0H0v14h14z" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg @click="showPassword = true" v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
                            <g fill="#B7C1C5" clip-path="url(#a)">
                                <path d="m6.894 4.783 2.004 2.004.01-.105a1.91 1.91 0 0 0-1.91-1.909l-.104.01Z" />
                                <path
                                    d="M7 3.501a3.182 3.182 0 0 1 3.18 3.181c0 .41-.082.802-.226 1.161l1.861 1.861a7.557 7.557 0 0 0 2.186-3.022c-1.104-2.793-3.817-4.771-7.002-4.771-.89 0-1.743.159-2.535.445l1.374 1.371c.36-.14.75-.226 1.161-.226ZM.636 1.767l1.45 1.45.29.29A7.536 7.536 0 0 0 0 6.682a7.525 7.525 0 0 0 6.998 4.772 7.46 7.46 0 0 0 2.79-.538l.27.27 1.855 1.858.811-.808L1.447.956l-.81.811Zm3.519 3.515.982.983a1.91 1.91 0 0 0 1.86 2.325c.145 0 .281-.018.415-.047l.983.983a3.13 3.13 0 0 1-1.397.337 3.182 3.182 0 0 1-3.18-3.181c0-.503.127-.973.337-1.4Z" />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h14v14H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <button class="btn user-btn">Войти</button>
                <div class="user-setting">
                    <span @click="openForgotModal">Забыли пароль</span> /
                    <span @click="openEntranceModal = false">
                        <router-link :to="{name: 'registration'}"> У меня нет акаунта</router-link>
                    </span>
                </div>
            </form>
        </div>
        <!-- USER FORGOT MODAL -->
        <div class="overlay" v-show="forgotModal" @click="forgotModal = false"></div>
        <div class="modal modal-enrtance modal-forgot" :class="{'padding-email': !submitRestore}" v-show="forgotModal">
            <div class="close-modal" @click="forgotModal = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                    <path stroke="#0F303F" d="m1 1 20 20M21 1 1 21" />
                </svg>
            </div>
            <h1 class="user-modal-title">Восстановить пароль</h1>
            <div v-if="submitRestore" class="modal-forgot__form">
                <input type="E-mail" placeholder="E-mail">
                <button class="btn" @click="submitRestore = false">ОТправить</button>
            </div>
            <div v-else class="modal-forgot__text select-font">
                Ссылка для восстановления пароля отправлено
                на katyamaryukha1998@gmail.com .
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/Counter.js'
import NavMenuComponent from './NavMenuComponent.vue';
import { ref } from 'vue';
const store = useCounterStore()
const resNav = ref(true);
const showPassword = ref(true);
const openEntranceModal = ref(false);
const forgotModal = ref(false);
const submitRestore = ref(true);
function openForgotModal(){
    openEntranceModal.value = false
    forgotModal.value = true
    submitRestore.value = true
}
function toRegist(){

}
</script>

