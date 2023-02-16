<template>
    <div class="home">
        <swiper 
        class="hero" 
        :modules="modules1" 
        :space-between="30" 
        :slides-per-view="1" 
        :pagination="{ clickable: true }"
        :centeredSlides="true" 
        :autoplay='{
            "delay": 3500,
            "disableOnInteraction": false
            }'
        >
            <swiper-slide class="hero__slide hero__one">
                <div class="container">
                    <div class="hero__one__info hero-info">
                        <h1 class="cormorant-500">
                            <span>бренд</span>
                            american vintage
                        </h1>
                        <router-link :to="{ name: 'products' }" class="nav-text-font">Смотреть коллекцию</router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="hero__slide hero__two">
                <div class="container">
                    <div class="hero__two__info hero-info">
                        <h1>
                            <span>бренд</span>
                            george gina <br>lucy
                        </h1>
                        <router-link :to="{ name: 'products' }" class="nav-text-font">Смотреть коллекцию</router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="hero__slide hero__three">
                <div class="container">
                    <div class="hero__three__info hero-info">
                        <h1>
                            <span>бренд</span>
                            DEHA
                        </h1>
                        <router-link :to="{ name: 'products' }" class="nav-text-font">Смотреть коллекцию</router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="hero__slide hero__four">
                <div class="container">
                    <div class="hero__four__info hero-info">
                        <h1>
                            <span>бренд</span>
                            birkenstock
                        </h1>
                        <router-link :to="{ name: 'products' }" class="nav-text-font">Смотреть коллекцию</router-link>
                    </div>
                </div>
            </swiper-slide>
            <!-- <ul class="active-section">
                <li class="active">01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
            </ul> -->
        </swiper>
        <main>
            <!-- <section class="bg-collection">
                <div class="collection">
                    <div class="container">
                        <div class="collection__info">
                            <h1>new arrival</h1>
                            <p class="description-text">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem
                                ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
                            <a class="nav-text-font" href="#">Смотреть коллекцию</a>
                        </div>
                        <div class="collection__img">
                            <img src="@/assets/images/collection-img.png" alt="">
                            <p class="collection__img__abso collection__text">
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip
                            </p>
                        </div>
                    </div>
                </div>
            </section> -->
            <section class="famous">
                <h1 class="famous__title">Популярное</h1>
                <swiper 
                class="famous__card" 
                :space-between="45" 
                :modules="modules2"
                :breakpoints="media"
                navigation
                >
                    <SwiperSlide v-for="item in 14" :key="item">
                        <FamousItemComponent></FamousItemComponent>
                    </SwiperSlide>
                    <div class="famous__card__arrow-left famous__card__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="41" fill="none">
                            <path stroke="#254A5A" d="M17 1 1 20.5 17 40" />
                        </svg>
                    </div>
                    <div class="famous__card__arrow-right famous__card__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="41" fill="none">
                            <path stroke="#254A5A" d="m1 1 16 19.5L1 40" />
                        </svg>
                    </div>
                </swiper>
                <div class="famous__decoration">
                    <span class="famous__decoration__left"></span>
                    <span class="famous__decoration__right"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="115" height="14" fill="none">
                        <g fill="#EAE9E8" clip-path="url(#a)">
                            <path
                                d="m9.288 13.812-.9-2.415H2.445l-.967 2.415H0L5.556 0l5.233 13.812h-1.5ZM5.491 3.463l-2.638 6.799h5.105l-2.467-6.8ZM18.446 13.812V.484h1.436v12.15h4.226v1.178h-5.662ZM32.019 13.812V.484h1.435v12.15h4.226v1.178H32.02ZM45.595 13.812V.484h6.733V1.72H47.03V4.89h3.605v1.194H47.03v6.568h5.535v1.156h-6.97v.004ZM67.28 14c-3.838-.021-7.272-2.098-7.272-6.55 0-4.179 3.347-7.176 7.784-7.176.236 0 .472 0 .708.021v1.238a9.41 9.41 0 0 0-.77-.043c-3.474.021-6.327 2.14-6.327 5.96 0 3.776 3.067 5.394 5.833 5.394.192 0 .385 0 .578-.021V5.497h-2.94V4.406h4.288v9.423c-.618.107-1.261.17-1.883.17ZM84.417 10.6l2.166 3.212h-1.588l-1.78-2.707a6.43 6.43 0 0 1-2.276.42 6.91 6.91 0 0 1-1.308-.124v2.414h-1.417V.484h2.53c4.44 0 6.177 2.56 6.177 5.707.003 1.575-.596 3.232-2.504 4.41Zm-3.39-8.964H79.63v8.563a4.3 4.3 0 0 0 1.374.21c.538 0 1.18-.086 1.566-.274L81.35 8.35l1.094-.673 1.286 1.91c1.072-.63 1.864-1.785 1.864-3.232 0-3.396-2.27-4.72-4.567-4.72ZM95.29 13.812V.484h1.416v13.328H95.29ZM113.499 13.812l-.901-2.415h-5.941l-.967 2.415h-1.479L109.767 0 115 13.812h-1.501Zm-3.797-10.348-2.638 6.799h5.105l-2.467-6.8Z" />
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#fff" d="M0 0h115v14H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </section>
            <section class="about">
                <div class="about__shape">
                    <svg width="273" height="299" viewBox="0 0 273 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="272.018" y="232.636" width="318.411" height="0.393326"
                            transform="rotate(-148.533 272.018 232.636)" fill="#FFFFFF" stroke="#FFFFFF"
                            stroke-width="0.393326" />
                        <path
                            d="M102.218 75.7994C91.34 76.3167 80.7941 79.7135 71.6588 85.6425C62.5235 91.5715 55.1264 99.8199 50.2238 109.545C45.3212 119.269 43.0889 130.122 43.7551 140.992C44.4213 151.862 47.9621 162.361 54.0155 171.414C60.069 180.467 68.418 187.751 78.2089 192.52C87.9999 197.289 98.8817 199.372 109.742 198.558C120.602 197.743 131.051 194.058 140.021 187.882C148.99 181.705 156.159 173.257 160.793 163.402"
                            stroke="#FFFFFF" />
                    </svg>
                </div>
                <div class="about__container">
                    <div class="about__container__info">
                        <h1><span>О</span>нас</h1>
                        <p class="description-text">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem
                            ipsumLoreLorem ipsumLorem
                            ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                            ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem
                            ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
                    </div>
                    <div class="about__container__img">
                        <img src="@/assets/images/about-img.png" alt="about-img">
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import FamousItemComponent from '../components/FamousItemComponent.vue';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const modules1 = [Autoplay, Pagination, Scrollbar, A11y]
const modules2 = [Navigation, Pagination, Scrollbar, A11y]

const mounted = onMounted(() => {
    let dots = document.querySelectorAll('.swiper-pagination-bullet');
    dots.forEach((dot,i) => {
        dot.innerText =   "0"+(i + 1)
    })
})


const media = {
    0: {
        slidesPerView: 'auto'
    },
    1000: {
        slidesPerView: 4
    }
}
</script>

<style lang="scss">
.swiper{
    .swiper-pagination-bullet{
        background: transparent;
        &::after{
            content: attr('aria-label');
            display: block;
        }
    }
}
</style>