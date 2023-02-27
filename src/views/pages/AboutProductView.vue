<template>
    <div v-if="pr" class="about-product container">
        <ul class="about-us__hero__list">
            <li>
                <router-link class="links-page" :to="{ name: 'home' }">Главная</router-link>
            </li>
            <li><a class="links-page" href="#">Женщины</a></li>
            <li><a class="links-page" href="#">Одежда</a></li>
            <li>
                <router-link class="links-page" :to="{ name: 'products' }">Кофты и пиджаки</router-link>
            </li>
            <li>
                <router-link class="active" :to="{ name: 'about-product' }">American vintage</router-link>
            </li>
        </ul>
        <div class="about-product__container">
            <div class="about-product__info">
                <div class="about-product__info__img" data-aos="fade-right" data-aos-duration="1000">
                    <div class="total-img">
                        <img v-for="(img, i) in pr.images" :key="i" :src="img" alt="" @click="changeImg(i)" />
                    </div>
                    <div class="main-img" v-if="pr.images">
                        <img :src="pr.images[index]" alt="" />
                        <div class="heart" @click="addToWishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18"
                                :fill="fav ? '#ff0000' : 'none'">
                                <path :stroke="fav ? '#ff0000' : '#254A5A'" stroke-linecap="round"
                                    d="M2.318 2.318a4.5 4.5 0 0 1 6.364 0L10.5 4.136l1.818-1.818a4.5 4.5 0 0 1 6.364 6.364L10.5 16.864 2.318 8.682a4.5 4.5 0 0 1 0-6.364Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="about-product__info__setting" data-aos-duration="1500" data-aos="zoom-in">
                    <h1
                        class="about-product__name avenir-800 animate__rubberBand animate__animated animate__delay-2s">
                        {{ pr.title }}
                    </h1>
                    <h6 class="about-product__title">{{ pr.name }}</h6>
                    <p class="about-product__price" v-if="pr.price">
                        <span class="product-old-item">{{ pr.price.oldPrice }}</span>
                        <span class="product-new-item">{{ pr.price.newPrice }}</span>
                    </p>
                    <div class="about-product-slider"></div>
                    <p class="about-product__size">Размер</p>
                    <ul class="about-product__size-list">
                        <li class="have" v-for="(size, i) in pr.sizes" :key="i">
                            {{ size }}
                        </li>
                    </ul>
                    <a class="about-product__link-400" href="#">Таблица размеров</a>
                    <p class="about-product__link-400">Цвет</p>
                    <ul class="about-product__color-list">
                        <li v-for="color in pr.colors" :key="color" :style="{ backgroundColor: color }"></li>
                    </ul>
                    <div class="selection1">
                        <button class="btn add-to-cart-btn" @click="addToCart(pr)">добавить в корзину</button>
                        <button class="btn buy-btn">купить в один клик</button>
                    </div>
                    <div class="selection2">
                        <button @click="openPaymentModal = true" class="select-font links-page">
                            Оплата и доставка
                        </button>
                        <button @click="openReturnModal = true" class="select-font links-page">
                            Возврат и обмен
                        </button>
                    </div>
                    <h4 class="about-product__desc-500">ИНФОРМАЦИЯ О ТОВАРЕ</h4>
                    <p class="about-product__desc-title select-font">
                        {{ pr.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="about-product__container">
            <div class="swiper-container" data-aos="fade-up" data-aos-duration="1500">
                <swiper class="similar-products" :modules="modules" :spaceBetween="19" :slidesPerView="'auto'" navigation>
                    <swiper-slide class="similar-products-slide" v-for="(item, i) in store.products" :key="i" >
                       <product-component :product="item" 
                       data-aos="fade-up"
                            data-aos-duration="1500">
                        </product-component>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- Payment Modal Style Alohida scss fileda-->
        <div class="overlay" v-show="openPaymentModal" @click="openPaymentModal = false"></div>
        <Transition name="modalsEvent">
            <div v-show="openPaymentModal" class="modal modal__payment">
                <close-btn-component @click="openPaymentModal = false"></close-btn-component>
                <h3 class="products__menu__item uppercase">Оплата</h3>
                <h3 class="products__menu__item">Наличными при получении</h3>
                <p class="description-text">
                    Оплата осуществляется наличными денежными средствами курьеру
                    непосредственно при доставке заказа на адрес получателя. Выбрав данный
                    способ оплаты, Вы получаете возможность рассмотреть и примерить
                    заказанный товар. <br />
                    <br />
                    Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее
                    курьеру, не оплачивая.
                </p>
                <h3 class="products__menu__item">Картой на сайте (Visa, Mastercard)</h3>
                <p class="description-text">
                    На сайте нашего интернет-магазина мы принимаем оплату платежными
                    картами Visa и Mastercard. Безопасность проведения платежей у нас
                    гарантирована системой eCommerceConnect с использованием современного
                    стандарта «3-D Secure».
                </p>
                <h3 class="products__menu__item uppercase">Доставка</h3>
                <h3 class="products__menu__item">На отделение «Нова Пошта»</h3>
                <p class="description-text">
                    Доставка заказов клиентам интернет-магазина ALLEGRIA осуществляется по
                    территории всей Украины курьерской службой "Нова пошта".
                </p>
            </div>
        </Transition>

        <!-- Return and exchange Modal -->
        <div class="overlay" v-show="openReturnModal" @click="openReturnModal = false"></div>
        <Transition name="modalsEvent">
            <div v-show="openReturnModal" class="modal__payment modal__return modal">
                <close-btn-component @click="openReturnModal = false"></close-btn-component>
                <h3 class="products__menu__item uppercase modal__return-name">
                    Возврат и обмен
                </h3>
                <p class="description-text">
                    Возврат товаров, приобретенных в интернет-магазине ALLEGRIA,
                    происходит согласно Закону Украины «О защите прав потребителей».
                </p>
                <p class="description-text">
                    Вы можете вернуть товар на протяжении 14 дней со дня покупки.
                </p>
                <h3 class="products__menu__item">Как оформить заявку на возврат?</h3>
                <p class="description-text">
                    Если купленная вещь Вам не понравилась или не подошла — свяжитесь с
                    нашим контакт центром по телефону 000 00 000 и мы поможем оформить
                    заявку на возврат.
                </p>
                <h3 class="products__menu__item">
                    Какие есть условия по возврату товара?
                </h3>
                <p class="description-text">
                    Обмен и возврат товара производится в том случае, если указанный товар
                    не был в употреблении, полностью сохранен его товарный вид — без
                    повреждений и следов ношения, оригинальная упаковка, а также бирки,
                    пломбы, ярлыки, фирменные знаки.
                </p>
                <p class="description-text">
                    Не возвращаются и не подлежат обмену купальники, нижнее белье,
                    чулочно-носочные изделия, предметы личной гигиены, перчатки.
                </p>
                <p class="description-text">
                    Вы можете осуществить возврат товар непосредственно в наших розничных
                    магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для
                    жителей других городов Украины пересылка товара перевозчиком Новой
                    Почтой или любым другим, на склад интернет магазина ALLEGRIA,
                    расположенного в городе Харькове, осуществляется за счет компании.
                </p>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import ProductComponent from "@/components/ProductComponent.vue";
import CloseBtnComponent from "../../components/CloseBtnComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import { ref, onMounted, computed } from "vue";
import { useCounterStore } from "@/stores/Counter.js";
import { useRoute } from "vue-router";
const store = useCounterStore();
// const route = useRoute();
const openPaymentModal = ref(false);
const openReturnModal = ref(false);
const like = ref(false);
// const id = Number(route.params.id);
const { id } = defineProps(['id'])
const index = ref(0);
const pr = ref({})
// const pr = computed(() => {
//     let item = store.products.find((el) => el.id === Number(route.params.id));
//     return item;
// });

async function getPr(){
    const res = await fetch('http://localhost:3000/products/'+id);
    const data = await res.json();
    pr.value = data
}
getPr()
function changeImg(i) {
    index.value = i
}

const fav = computed(() => {
    return store.wishlist.find(el => el.id === pr.id);
})


function addToWishlist(){
    if(!fav.value) {
        store.wishlist.push(pr)
    }
    else {
        store.wishlist = store.wishlist.filter(p => p.id !== pr.id)
    }

    localStorage.setItem('WISH', JSON.stringify(store.wishlist))
}



async function addToCart(p){
    store.addToCart(p);
}
store.getProducts()

const modules = [Navigation, A11y];
onMounted(() => {
    AOS.init();
});
</script>
