<template>
    <div class="common-questions">
        <ul class="common__hero__list about-us__hero__list">
            <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
            <li><router-link class="active" :to="{ name: 'common-questions' }">Бренды</router-link></li>
        </ul>
        <div class="common-questions__container">
            <h1 class="common-questions__container__title">Популярные вопросы</h1>
            <div class="common-questions__container__info">
                <div class="common-questions__container__info__text"></div>
                <div class="common-questions__container__form"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>