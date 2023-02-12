<template>
    <div class="about-product container">
        <ul class="about-us__hero__list" >
            <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
            <li><a href="#">Женщины</a></li>
            <li><a href="#">Одежда</a></li>
            <li><a href="#">Кофты и пиджаки</a></li>
            <li><router-link class="active" :to="{name: 'about-product'}">American vintage</router-link></li>
        </ul>
        <div class="about-product__container">
            <div class="about-product__info">
            <div class="about-product__info__img">
                <div class="total-img">
                    <img v-for="image in 3" :key="image" src="@/assets/images/famous-item1.png" alt="">
                </div>
                <div class="main-img">
                    <img src="@/assets/images/famous-item1.png" alt=""/>
                </div>
            </div>
            <div class="about-product__info__setting">
                <h1 class="about-product__name avenir-800">American vintage</h1>
                <h6 class="about-product__title">Classic shirt</h6>
                <p class="about-product__price"><span class="product-old-item">6100 UAH</span> <span class="product-new-item">3800 UAH</span></p>
                <div class="about-product-slider"></div>
                <p class="about-product__size">Размер</p>
                <ul class="about-product__size-list">
                    <li class="have">XS</li>
                    <li class="have">S</li>
                    <li class="have">M</li>
                    <li class="have">L</li>
                    <li>XL</li>
                    <li>XP</li>
                </ul>
                <a class="about-product__link-400" href="#">Таблица размеров</a>
                <p class="about-product__link-400">Цвет</p>
                <ul class="about-product__color-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
               <div class="selection1">
                <button class="btn add-to-cart-btn">добавить в корзину</button>
                <button class="btn buy-btn">купить в один клик</button>
               </div>
                <div class="selection2">
                    <button class="select-font">Оплата и доставка</button>
                    <button class="select-font">Возврат и обмен</button>
                </div>
                <h4 class="about-product__desc-500">ИНФОРМАЦИЯ О ТОВАРЕ</h4>
                <p class="about-product__desc-title select-font">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        </div>
        <div class="about-product__container">
            <div class="similar-products"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>