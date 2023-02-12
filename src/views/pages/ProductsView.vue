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
        <div class="products__menu">
            <ul class="gender">
                <li class="description-text active">Женщины</li>
                <li class="description-text">Мужчины</li>
            </ul>
            <h3 class="products__menu__item"><span>ОДЕЖДА</span><svg xmlns="http://www.w3.org/2000/svg" width="10"
                    height="2" fill="none">
                    <path stroke="#E64926" d="M0 1h10" />
                </svg>
                <ul>
                    <li class="select-font">Свитера толтовки</li>
                    <li class="select-font">Платья юбки</li>
                    <li class="select-font">Футболки и топы </li>
                    <li class="select-font">Брюки и шорты</li>
                    <li class="select-font">Рубашки</li>
                    <li class="select-font">Комбинезоны</li>
                    <li class="select-font">Леггинсы</li>
                </ul>
            </h3>
            <h3 class="products__menu__item"><span>ОБУВЬ</span> <svg xmlns="http://www.w3.org/2000/svg" width="10"
                    height="10" fill="none">
                    <path stroke="#000" d="M5 0v10M0 5h10" />
                </svg></h3>
            <h3 class="products__menu__item"><span>СУМКИ</span> <svg xmlns="http://www.w3.org/2000/svg" width="10"
                    height="10" fill="none">
                    <path stroke="#000" d="M5 0v10M0 5h10" />
                </svg></h3>
            <h3 class="products__menu__item"><span>АКСЕСУАРЫ</span> <svg xmlns="http://www.w3.org/2000/svg" width="10"
                    height="10" fill="none">
                    <path stroke="#000" d="M5 0v10M0 5h10" />
                </svg></h3>
            <h3 class="products__menu__item"><span>БЕЛЬЕ</span> <svg xmlns="http://www.w3.org/2000/svg" width="10"
                    height="10" fill="none">
                    <path stroke="#000" d="M5 0v10M0 5h10" />
                </svg></h3>
        </div>
    </div>
</template>

<script setup>
import ProductComponent from '../../components/ProductComponent.vue';

</script>

<style lang="scss" scoped>

</style>