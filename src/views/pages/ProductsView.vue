<template>
    <div class="products container">
        <ul class="products__list about-us__hero__list">
            <li>
                <router-link class="links-page" :to="{ name: 'home' }">Главная</router-link>
            </li>
            <li><a class="links-page" href="#">Женщины</a></li>
            <li><a class="links-page" href="#">Одежда</a></li>
            <li><a class="active" href="#">Кофты и пиджаки</a></li>
        </ul>
        <div class="products__container">
            <h1 class="products__title-500 animate__bounce animate__slow animate__animated">
                Кофти та піджаки
            </h1>
            <div class="products__select">
                <div class="products__select__items">
                    <div class="select select-font">
                        <div @click="hidden = !hidden">
                            <span>Размер</span>
                            <div class="triangle" :class="{ triangleRotate: hidden }">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" fill="none">
                                    <path fill="#0F303F" d="m3.5 0 3.031 4.5H.47L3.5 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="select__list" :class="{ hidden: !hidden }">
                            <ul>
                                <li class="about-product__link-400">XS</li>
                                <li class="about-product__link-400">S</li>
                                <li class="about-product__link-400">M</li>
                                <li class="about-product__link-400">L</li>
                                <li class="about-product__link-400">XL</li>
                                <li class="about-product__link-400">XP</li>
                            </ul>
                            <button class="btn" id="btn-apply">Применить</button>
                        </div>
                    </div>
                    <div class="select select-font">
                        <div>
                            <span>Цена</span>
                            <div class="triangle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" fill="none">
                                    <path fill="#0F303F" d="m3.5 0 3.031 4.5H.47L3.5 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="select select-font">
                        <div>
                            <span>Цвет</span>
                            <div class="triangle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" fill="none">
                                    <path fill="#0F303F" d="m3.5 0 3.031 4.5H.47L3.5 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="select select-font">
                        <div>
                            <span>Бренд</span>
                            <div class="triangle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" fill="none">
                                    <path fill="#0F303F" d="m3.5 0 3.031 4.5H.47L3.5 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------- Modals ---------- -->
                <div class="products__select__modals">
                    <div class="select select-font" @click="filtrModalEvent.value = true">
                        <span>Фильтры</span>
                        <div class="triangle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" fill="none">
                                <path fill="#0F303F" d="m3.5 0 3.031 4.5H.47L3.5 0Z" />
                            </svg>
                        </div>
                    </div>
                    <!-- ========== Filtr Modal =========== -->
                    <div class="overlay" v-show="filtrModalEvent" @click="closeFiltrModal"></div>
                    <Transition name="filtr">
                        <div class="filtr-modal" v-show="filtrModalEvent">
                        <h1 class="filst-sort-modal__title">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="none">
                                    <path stroke="#0F303F" d="M22 7.5H1m0 0 6.5-7M1 7.5l6.5 7" />
                                </svg>
                            </div>
                            <span>Фильтр</span>
                            <div @click="closeFiltrModal">
                                <svg class="close-filter" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                    fill="none">
                                    <path stroke="#0F303F" d="m1 1 20 20M21 1 1 21" />
                                </svg>
                            </div>
                        </h1>
                    </div>
                    </Transition>
                    <div class="select select-font" @click="sortModalEvent.value = true">
                        <span>Сортировать</span>
                        <div class="triangle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" fill="none">
                                <path fill="#0F303F" d="m3.5 0 3.031 4.5H.47L3.5 0Z" />
                            </svg>
                        </div>
                    </div>
                    <!-- =================== SORT MODAL ============= -->
                    <div class="overlay" v-show="sortModalEvent" @click="closeFiltrModal"></div>
                    <div class="sort-modal" v-show="sortModalEvent">
                        <h1 class="filst-sort-modal__title">
                            <span>Сортировка</span>
                            <div class="sort-modal-close" @click="closeFiltrModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                                    <path stroke="#0F303F" d="m1 1 20 20M21 1 1 21" />
                                </svg>
                            </div>
                        </h1>
                        <ul>
                            <li class="active">Новинки</li>
                            <li>По возрастанию цены</li>
                            <li>По убыванию цены</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="all">
                <div class="number-product select-font"><span>{{store.products.length}}</span> товаров</div>
                <div class="sort">
                    <label class="number-product select-font" for="sort">Соритировать:</label>
                    <select class="select-font" name="" id="sort">
                        <option value="">Новинки</option>
                        <option value="">123</option>
                    </select>
                </div>
            </div>
            <div class="products__card">
                <product-component v-for="(item, i) in prs" :key="i" :product="item" data-aos="fade-up"
                    data-aos-duration="500">
                </product-component>
            </div>
            <button class="btn show-more-btn" @click="yana">Показать больше</button>
        </div>
        <div class="products__menu" :class="{ block: filtrModalEvent }">
            <ul class="gender">
                <li v-for="male in store.allProducts" :key="male" class="description-text active">{{male.title}}</li>
            </ul>
            <h3 class="products__menu__item" v-for="(products, i) in store.allProducts.man.products" :key="i">
                <span>{{products.title}}</span>
                <button @click="hiddenList = !hiddenList">
                    <svg  v-if="!hiddenList" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
                    <path stroke="#000" d="M5 0v10M0 5h10" />
                </svg>
                <svg @click="hiddenList = false" v-else xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none">
                    <path stroke="#E64926" d="M0 1h10" />
                </svg>
                </button>
                <ul>
                    <li v-show="hiddenList" v-for="(item, i) in products.variants" :key="i" class="select-font">{{item.title}}</li>
                </ul>
            </h3>
        </div>
    </div>
</template>

<script setup>
import ProductComponent from "../../components/ProductComponent.vue";
import { ref, onMounted, computed } from "vue";
import AOS from "aos";
import { useCounterStore } from "@/stores/Counter.js";
const store = useCounterStore();
store.getProducts()
const hidden = ref(false);
const hiddenList = ref(false);
const filtrModalEvent = ref(false);
const sortModalEvent = ref(false);
function closeFiltrModal() {
    filtrModalEvent.value = false;
    sortModalEvent.value = false;
}

onMounted(() => {
    AOS.init();
});

const page = ref(1);
const prs = computed(() => {
    return store.products.slice(0, page.value * 6);
});

function yana(){
    if(store.products.length > page.value * 6)
    page.value++;
}
</script>

