<template>
    <div class="about-us">
        <div class="about-us__hero">
            <div class="container">
                <ul class="about-us__hero__list">
                    <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
                    <li><router-link class="active" :to="{ name: 'about-us' }">О нас</router-link></li>
                </ul>
                <div class="about-us__hero__info">
                    <h1 class="cormorant-500">о нас</h1>
                    <p class="description-text">Бутик Allegria специализируется на продаже комфортной и современной
                        одежды для свободного времени в стиле кэжуал . Мы считаем, что одежда - это источник радости,
                        что и отражено в названии нашего бутика.</p>
                </div>
            </div>
        </div>
        <!-- <div class="about-us__text1">
            <p class="description-text">American Vintage в первую очередь – это качественный трикотаж, изящная красота и
                летящий крой.</p>
        </div> -->
        <!-- <div class="about-us__img1">
            <div class="container">
                <div class="about-us__img1__left">
                    <img src="@/assets/images/about-us-img01.png" alt="">
                </div>
                <div class="about-us__img1__right">
                    <div class="about-us__img1__right-shape">
                        <svg xmlns="http://www.w3.org/2000/svg" width="273" height="299" fill="none">
                            <path fill="#CEC6C4" stroke="#CEC6C4" stroke-width=".393"
                                d="M272.018 232.636.432 66.423l.205-.335L272.223 232.3z" />
                            <path stroke="#CEC6C4"
                                d="M102.218 75.8a61.499 61.499 0 0 0-24.01 116.72 61.51 61.51 0 0 0 31.534 6.038 61.502 61.502 0 0 0 51.051-35.156" />
                        </svg>
                    </div>
                    <img src="@/assets/images/about-us-img02.png" alt="">
                </div>
            </div>
        </div> -->
        <!-- <div class="about-us__info">
            <div class="about-us__info-container">
                <div class="about-us__info__text">
                    <h1 class="avenir-800">о нас</h1>
                    <p class="description-text">
                        <span>Броские сумки George Gina & Lucy поднимают настроение и своим обладательницам и окружающим.</span>
                        <span>Birkenstock – это обувь с мягкой ортопедической стелькой, позволяющая долгое время находиться в обуви не уставая.</span>
                        <span>Для всех представленных в бутике брендов важным приоритетом является экологическая безопасность одежды и производства.</span>
                    </p>
                </div>
                <div class="about-us__info__img">
                    <div class="about-us__info__img__left">
                        <img src="@/assets/images/about-us-info-img1.png" alt="">
                    </div>
                    <div class="about-us__info__img__right">
                        <div class="about-us__info__img__right-shape"></div>
                        <img src="@/assets/images/about-us-info-img2.png" alt="">
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div class="about-us__warning">
            <p class="description-text">Для всех представленных в бутике брендов важным приоритетом является экологическая безопасность одежды и производства.</p>
        </div> -->
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>