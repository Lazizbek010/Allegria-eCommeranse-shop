<template>
    <div class="nav-right__com">
        <div class="nav-right__menu">
            <ul>
                <li><router-link class="active nav-text-font links-page" :to="{name: 'products'}">{{$t('collection')}}</router-link></li>
                <!-- <li><router-link class="nav-text-font links-page" :to="{name: 'products'}">Мужчины</router-link></li> -->
            </ul>
            <div class="search">
                <span class="nav-text-font">{{$t("search")}}</span>
                <input type="text">
            </div>
        </div>
        <ul class="langs">
            <li @click="$i18n.locale = 'ru', lang = 'ru' " :class="{'active': lang === 'ru'}" class="nav-text-font">RU</li>
            <li @click="$i18n.locale = 'uz', lang = 'uz' " :class="{'active': lang === 'uz'}" class="nav-text-font">UZ</li>
            <li @click="$i18n.locale = 'en', lang = 'en' " :class="{'active': lang === 'en'}" class="nav-text-font">EN</li>
        </ul>
</div>
</template>

<script setup>
import { ref } from "vue";

const lang = ref('ru')

</script>