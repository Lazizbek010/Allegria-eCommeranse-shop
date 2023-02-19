<template>
    <div class="about-product container">
        <ul class="about-us__hero__list">
            <li><router-link class="links-page" :to="{ name: 'home' }">Главная</router-link></li>
            <li><a class="links-page" href="#">Женщины</a></li>
            <li><a class="links-page" href="#">Одежда</a></li>
            <li><a class="links-page" href="#">Кофты и пиджаки</a></li>
            <li><router-link class="active" :to="{ name: 'about-product' }">American vintage</router-link></li>
        </ul>
        <div class="about-product__container">
            <div class="about-product__info">
                <div class="about-product__info__img">
                    <div class="total-img">
                        <img v-for="image in 3" :key="image" src="@/assets/images/famous-item1.png" alt="">
                    </div>
                    <div class="main-img">
                        <img src="@/assets/images/famous-item1.png" alt="" />
                        <heart-component></heart-component>
                    </div>
                </div>
                <div class="about-product__info__setting">
                    <h1 class="about-product__name avenir-800">American vintage</h1>
                    <h6 class="about-product__title">Classic shirt</h6>
                    <p class="about-product__price">
                        <span class="product-old-item">6100 UAH</span>
                        <span class="product-new-item">3800 UAH</span>
                    </p>
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
                        <button @click="openPaymentModal = true" class="select-font links-page">Оплата и доставка</button>
                        <button @click="openReturnModal = true" class="select-font links-page">Возврат и обмен</button>
                    </div>
                    <h4 class="about-product__desc-500">ИНФОРМАЦИЯ О ТОВАРЕ</h4>
                    <p class="about-product__desc-title select-font">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div class="about-product__container">
            <div class="swiper-container">
                <swiper 
                    class="similar-products" 
                    :modules="modules"
                    :spaceBetween="19"
                    :slidesPerView="'auto'"
                    navigation
                    >
                        <swiper-slide v-for="sim in 9" :key="sim" class="similar-products-slide">
                            <product-component id="similar-products-slide-item"></product-component>
                        </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- Payment Modal Style Alohida scss fileda-->
        <div class="overlay" v-show="openPaymentModal" @click="openPaymentModal = false"></div>
        <div v-show="openPaymentModal" class="modal modal__payment" :class="{ 'showModal': openPaymentModal }">
            <close-btn-component @click="openPaymentModal = false"></close-btn-component>
            <h3 class="products__menu__item uppercase">Оплата</h3>
            <h3 class="products__menu__item">Наличными при получении</h3>
            <p class="description-text">Оплата осуществляется наличными денежными средствами курьеру
                непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы
                получаете возможность рассмотреть и примерить заказанный товар. <br> <br> Если какая-то позиция
                Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
            <h3 class="products__menu__item">Картой на сайте (Visa, Mastercard)</h3>
            <p class="description-text">На сайте нашего интернет-магазина мы принимаем оплату платежными картами
                Visa и Mastercard. Безопасность проведения платежей у нас гарантирована системой
                eCommerceConnect с использованием современного стандарта «3-D Secure».</p>
            <h3 class="products__menu__item uppercase">Доставка</h3>
            <h3 class="products__menu__item">На отделение «Нова Пошта»</h3>
            <p class="description-text">Доставка заказов клиентам интернет-магазина ALLEGRIA осуществляется по
                территории всей Украины курьерской службой "Нова пошта".</p>
        </div>
        <!-- Return and exchange Modal -->
        <div class="overlay" v-show="openReturnModal" @click="openReturnModal = false"></div>
        <div v-show="openReturnModal" class="modal__payment modal__return modal" :class="{ 'showModal': openReturnModal }">
            <close-btn-component @click="openReturnModal = false"></close-btn-component>
            <h3 class="products__menu__item uppercase modal__return-name">Возврат и обмен</h3>
            <p class="description-text">Возврат товаров, приобретенных в интернет-магазине ALLEGRIA, происходит
                согласно Закону Украины «О защите прав потребителей».</p>
            <p class="description-text">Вы можете вернуть товар на протяжении 14 дней со дня покупки.</p>
            <h3 class="products__menu__item">Как оформить заявку на возврат?</h3>
            <p class="description-text">Если купленная вещь Вам не понравилась или не подошла — свяжитесь с нашим
                контакт центром по телефону 000 00 000 и мы поможем оформить заявку на возврат.</p>
            <h3 class="products__menu__item">Какие есть условия по возврату товара?</h3>
            <p class="description-text">Обмен и возврат товара производится в том случае, если указанный товар не
                был в употреблении, полностью сохранен его товарный вид — без повреждений и следов ношения,
                оригинальная упаковка, а также бирки, пломбы, ярлыки, фирменные знаки.</p>
            <p class="description-text">Не возвращаются и не подлежат обмену купальники, нижнее белье,
                чулочно-носочные изделия, предметы личной гигиены, перчатки.</p>
            <p class="description-text">Вы можете осуществить возврат товар непосредственно в наших розничных
                магазинах, расположенных в Киеве, Харькове, Днепре и Одессе. Для жителей других городов Украины
                пересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет магазина ALLEGRIA,
                расположенного в городе Харькове, осуществляется за счет компании.</p>
        </div>
</div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductComponent from '@/components/ProductComponent.vue';
import HeartComponent from '@/components/HeartComponent.vue';
import CloseBtnComponent from '../../components/CloseBtnComponent.vue';
import { ref } from 'vue';
const openPaymentModal = ref(false)
const openReturnModal = ref(false)
//  DOCUMENT ADDEVENTLISTENER 1
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        openPaymentModal.value = false;
        openReturnModal.value = false;
    }
})

const modules = [Navigation, A11y];
</script>
