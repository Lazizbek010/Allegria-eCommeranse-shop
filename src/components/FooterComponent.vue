<template>
    <div class="footer">
        <div class="footer__info">
            <h1 class="footer__info__title">Будьте в курсе событий</h1>
            <form class="footer__info__form">
                <input type="email" placeholder="E-mail">
                <button>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4H8.5M8.5 4L6 1M8.5 4L6 7" stroke="#E64926" />
                    </svg>
                </button>
            </form>
            <ul class="footer__info__list">
                <li><router-link :to="{name: 'about-us'}">О нас</router-link></li>
                <li><a href="#">Распространенные вопросы</a></li>
                <li><router-link :to="{name: 'brands'}">Бренды</router-link></li>
            </ul>
        </div>
        <div class="footer__author">
            <div class="container">
                <p>Все права защищены  &copy; Lazizbek Isaqov</p>
                <p>Дизайн и разработка:</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>