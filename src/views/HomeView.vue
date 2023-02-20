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
            "delay": 4000,
            "disableOnInteraction": false
            }'
        >
            <swiper-slide class="hero__slide hero__one">
                <div class="container">
                    <div class="hero__one__info hero-info animate__animated animate__zoomInDown animate__slow">
                        <h1 class="cormorant-500">
                            <span>бренд</span>
                            american vintage
                        </h1>
                        <router-link :to="{ name: 'products' }" class="nav-text-font links-page animate__animated animate__bounce animate__delay-2s">Смотреть коллекцию</router-link>
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
                        <router-link :to="{ name: 'products' }" class="nav-text-font links-page">Смотреть коллекцию</router-link>
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
                        <router-link :to="{ name: 'products' }" class="nav-text-font links-page">Смотреть коллекцию</router-link>
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
                        <router-link :to="{ name: 'products' }" class="nav-text-font links-page">Смотреть коллекцию</router-link>
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
            <section class="bg-collection">
                <div class="collection">
                    <div class="container">
                        <div class="collection__info" data-aos="zoom-in" data-aos-duration="1000">
                            <h1>new arrival</h1>
                            <p class="description-text">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem
                                ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
                            <router-link :to="{name: 'products'}" class="nav-text-font links-page animate__animated animate__bounce animate__infinite animate__slower animate__delay-5s" href="#">Смотреть коллекцию</router-link>
                        </div>
                        <div class="collection__img">
                            <img src="@/assets/images/collection-img.png" alt="" data-aos="zoom-in" data-aos-duration="1000">
                            <p class="collection__img__abso collection__text">
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="famous">
                <h1 class="famous__title">Популярное</h1>
                <div class="famous__container" data-aos="fade-up" data-aos-duration="2000">
                    <swiper 
                    class="famous__container__card" 
                    :modules="modules2"
                    :breakpoints="media"
                    :slidesPerView="'auto'"
                    navigation
                    >
                        <SwiperSlide class="famous__container__card-slide" v-for="item in 14" :key="item">
                            <FamousItemComponent></FamousItemComponent>
                        </SwiperSlide>
                    </swiper>
                </div>
                <!-- Famous ALLERGIA Logo -->
                <div class="famous__dec">
                    <div class="famous__dec__left"></div>
                    <div class="famous__dec__right"></div>
                    <div class="famous__dec__img">
                        <img src="@/assets/images/famous-dec.svg" alt="">
                    </div>
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
                <div class="about__container" data-aos="fade-up-right" data-aos-duration="1500">
                    <div class="about__container__info">
                        <h1><span>О</span>нас</h1>
                        <p class="description-text">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem
                            ipsumLoreLorem ipsumLorem
                            ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                            ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem
                            ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
                    </div>
                    <div class="about__container__img animate__animated animate__delay-5s animate__zoomIn">
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
import AOS from "aos";


const modules1 = [Autoplay, Pagination, Scrollbar, A11y];
const modules2 = [Navigation, Pagination, Scrollbar, A11y];

// Hero Swiper Event
const mounted = onMounted(() => {
    let dots = document.querySelectorAll('.swiper-pagination-bullet');
    dots.forEach((dot,i) => {
        dot.innerText =   "0"+(i + 1)
    })
})

// Products Swiper Slide 
const media = {
    0: {
        spaceBetween: 20
    },
    1000: {
        spaceBetween: 45
    }
}



onMounted(() => {
    AOS.init();
})

</script>
<style lang="scss">
// Hero Swiper
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