<template>
    <div class="brands">
        <section class="brands__hero">
            <div class="container">
                <ul class="brands__hero__list about-us__hero__list">
                    <li><router-link class="links-page" :to="{ name: 'home' }">Главная</router-link></li>
                    <li><router-link class="active" :to="{ name: 'brands' }">Бренды</router-link></li>
                </ul>
                <div class="brands__hero__info animate__animated animate__zoomInUp animate__slow">
                    <h1 class="cormorant-500 animate__animated animate__delay-2s animate__bounce"><span>бренд</span>american vintage</h1>
                    <p class="description-text">American Vintage - модная торговая марка по производству трикотажной
                        одежды для мужчин и женщин. </p>
                </div>
            </div>
        </section>
        <section class="american-vintage">
            <div class="container">
                <div class="american-vintage__info">
                    <div class="american-vintage__info__left" data-aos="fade-right" data-aos-duration="2000">
                        <img src="@/assets/images/about-us-info-img2.png" alt="">
                    </div>
                    <div class="american-vintage__info__right" data-aos="fade-left" data-aos-duration="2000">
                        <h1 class="avenir-800">American vintage</h1>
                        <p class="description-text">Продукция также включает немногочисленные аксессуары в виде шарфов,
                            ремней, шапок, а также
                            женских сумок.
                            Несмотря на название «American Vintage», бренд создан французом Мишель Азулэ.
                            Отличие бренда от других - это простота в исполнении изделий (минимализм) и 100% натуральные
                            ткани. бренд сочетает в себе расслабленность южной Франции и простоту Америки. При создании
                            одежды используется очень тонкий высококачественный трикотаж, который дает ощущение «второй
                            кожи». Основная цветовая гамма - это спокойные пастельные расцветки: ореховые, бежевые,
                            желтые,
                            серые и так далее.
                            На первый взгляд, кажется, что вещи просты в своем исполнении, но вся продукция от этой
                            марки
                            выглядит очень стильно, оставляя без ума многих покупателей.

                        </p>
                        <img src="@/assets/images/about-us-info-img2.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="deha">
            <div class="deha__hero">
                <div class="deha__hero__text" data-aos="zoom-in-up" data-aos-duration="2000">
                    <h1 class="cormorant-500"><span>бренд</span>DEHA</h1>
                    <p class="description-text">Бренд DEHA принадлежит компании Meeting Group SpA, которая является
                        лидером на итальянском рынке спортивной одежды премиум-класса. </p>
                </div>
            </div>
            <div class="container">
                <div class="deha__about">
                    <div class="deha__about__left" data-aos="fade-right" data-aos-duration="2000">
                        <h1 class="avenir-800">DeHA</h1>
                        <p class="description-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
                            sed
                            totam incidunt! Nisi eveniet soluta sed laudantium perferendis voluptate hic molestias, id
                            eos
                            expedita consequatur doloremque illum, iusto nulla quidem impedit alias voluptatum aliquam,
                            non
                            vitae tenetur voluptatem reiciendis pariatur aspernatur. Quod esse corporis molestiae quis
                            facere quia alias, suscipit velit amet rem omnis sit eius repudiandae ex placeat iste ipsum
                            non
                            cumque, nostrum autem nulla qui quos error. Totam reprehenderit soluta dolore excepturi
                            mollitia
                            corporis est, itaque harum?
                        </p>
                        <div class="deha__about__left__img">
                            <img src="@/assets/images/deha-about-img01.png" alt="">
                            <div class="deha__about__left__img__shape">
                                <svg xmlns="http://www.w3.org/2000/svg" width="273" height="299" fill="none">
                                    <path fill="#CEC6C4" stroke="#CEC6C4" stroke-width=".393"
                                        d="M272.018 232.636.432 66.423l.205-.335L272.223 232.3z" />
                                    <path stroke="#CEC6C4"
                                        d="M102.218 75.8a61.499 61.499 0 0 0-24.01 116.72 61.51 61.51 0 0 0 31.534 6.038 61.502 61.502 0 0 0 51.051-35.156" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="deha__about__right" data-aos="fade-left" data-aos-duration="2000">
                        <img src="@/assets/images/deha-about-img01.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="lucy">
            <div class="lucy__info" data-aos="flip-up" data-aos-duration="2000">
                <h1 class="cormorant-500"><span>бренд</span>george gina & lucy</h1>
                <p class="description-text">Бренд основан в 2004 году недалеко от Франкфурта, когда супруги Николь Бейли
                    и Николас Нойхаус вместе
                    с Оливером Брюном выпустили свою первую и очень удачную коллекцию сумок, каждая из которых
                    имела свое имя. </p>
            </div>
            <div class="lucy__img"></div>
            <div class="container">
                <div class="lucy__about">
                <div class="lucy__about__img" data-aos="fade-up-right" data-aos-duration="2000">
                    <img src="@/assets/images/about-us-info-img1.png" alt="">
                </div>
                <div class="lucy__about__text" data-aos="fade-up-left" data-aos-duration="2000">
                    <h1 class="avenir-800">george gina & lucy</h1>
                    <p class="description-text">Популярность и любовь дизайнеры заслужили тем, что соединили в своих
                        творениях оригинальность,
                        индивидуальность и легкий юмор, что вызвало у них появление огромного количества поклонниц во
                        всем мире.
                        Каждая сумка этого уникального бренда неповторима и индивидуальна, а их отличие от других
                        брендовых сумок в том, что они имеют преувеличенно крупную фурнитуру – кольца, карабины и
                        молнии.
                        Такие сумки созданы специально для тех , кто любит индивидуальность и неповторимость.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <section class="birkenstock">
            <div class="birkenstock__img">
                <div class="birkenstock__img__info container" data-aos="flip-right" data-aos-duration="2000">
                    <h1 class="cormorant-500"><span>бренд</span>birkenstock</h1>
                    <p class="description-text">BIRKENSTOCK — известная немецкая компания, занимающаяся производством ортопедической обуви.</p>
                </div>
            </div>
            <div class="container">
                <div class="birkenstock__about">
                <div class="birkenstock__about__left" data-aos="fade-right" data-aos-duration="2000">
                    <h1 class="avenir-800">birkenstock</h1>
                    <p class="description-text">Свою славу она заслужила благодаря удобству, экологичности материалов и поддержанию здоровья ног.
                        Знаменитая мягкая ортопедическая стелька фирмы BIRKENSTOCK позволяет долгое время находиться в
                        обуви не уставая.
                        В 1990 году пара сандалий BIRKENSTOCK Аризона в США была признана самой экологичной.
                        В 2004 году BIRKENSTOCK были удостоены звания «лучший дизайн, проверенный годами и подходящий
                        всем».
                        На данном этапе бренд производит не только вьетнамки и сандалии, а и много других комфортных
                        видов обуви. Созданы в стиле кэжуал и вписываются в будничные образы. Бренд также прославился
                        капсульными коллекциями, выпущенными в коллаборации со многими современными дизайнерами.
                    </p>
                    <div class="birkenstock__about__left__img">
                        <img src="@/assets/images/bg-hero-four1.png" alt="">
                        <div class="birkenstock__about__left__img-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="270" fill="none"><path fill="#CEC6C4" stroke="#CEC6C4" stroke-width=".393" d="M272.018 232.636.432 66.423l.205-.335L272.223 232.3z"/><path stroke="#CEC6C4" d="M102.218 75.8a61.499 61.499 0 0 0-24.01 116.72 61.51 61.51 0 0 0 31.534 6.038 61.502 61.502 0 0 0 51.051-35.156"/></svg>
                        </div>
                    </div>
                </div>
                <div class="birkenstock__about__right" data-aos="fade-left" data-aos-duration="2000">
                    <img src="@/assets/images/bg-hero-four2.png" alt="">
                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from "aos";
onMounted(() => {
    AOS.init();
})
</script>

