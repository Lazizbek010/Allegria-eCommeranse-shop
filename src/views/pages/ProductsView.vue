<template>
    <div class="products container">
        <ul class="products__list about-us__hero__list">
            <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
            <li><a href="#">Женщины</a></li>
            <li><a href="#">Одежда</a></li>
            <li><a class="active" href="#">Кофты и пиджаки</a></li>
        </ul>
        <div class="products__container">
            <h1 class="products__title-500">Кофти та піджаки</h1>
            <div class="products__select">
                <select class="select-font" name="" id="">
                    <option value="">Размер</option>
                    <option value="">1</option>
                </select>
                <select class="select-font" name="" id="">
                    <option value="">Цена</option>
                    <option value="">2</option>
                </select>
                <select class="select-font" name="" id="">
                    <option value="">Цвет</option>
                    <option value="">3</option>
                </select>
                <select class="select-font" name="" id="">
                    <option value="">Бренд</option>
                    <option value="">4</option>
                </select>
            </div>
            <div class="all">
                <div class="number-product select-font"><span>1200</span> товаров</div>
                <div class="sort">
                    <label class="number-product select-font" for="sort">Соритировать:</label>
                    <select class="select-font" name="" id="sort">
                        <option value="">Новинки</option>
                        <option value="">123</option>
                    </select>
                </div>
            </div>
            <div class="products__card">
                <product-component v-for="item in 15" :key="item"></product-component>
            </div>
            <button class="btn show-more-btn">Показать больше</button>
        </div>
        <div class="menu">
            <ul>
                
            </ul>
        </div>
    </div>
</template>

<script setup>
import ProductComponent from '../../components/ProductComponent.vue';

</script>

<style lang="scss" scoped>

</style>