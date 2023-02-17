<template>
    <div>
        <div class="nav">
            <div class="container">
                <div class="logo">
                    <img src="@/assets/images/logo.svg" alt="logo">
                </div>
                <div class="nav-right">
                            <nav-menu-component class="hidden"></nav-menu-component>
                    <div class="nav-icons">
                        <div class="nav-user">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" fill="none">
                                <path stroke="#0F303F" d="M0 1h20M10 8h10" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Responsive Navbar -->
        <div class="res-nav" :class="{'hidden': resNav}">
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
                <ul class="res-nav__bottom" v-for="li in 20" :key="li">
                    <li><a href="#">DEHA</a></li>
                    <li><a href="#">American vintage</a></li>
                    <li><a href="#">george gina lucy</a></li>
                    <li><a href="#">birkenstock</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/Counter.js'
import NavMenuComponent from './NavMenuComponent.vue';
import { ref } from 'vue';
const store = useCounterStore()
const resNav = ref(true)
</script>

