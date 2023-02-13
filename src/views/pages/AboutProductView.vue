<template>
    <div class="about-product container">
        <ul class="about-us__hero__list">
            <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
            <li><a href="#">Женщины</a></li>
            <li><a href="#">Одежда</a></li>
            <li><a href="#">Кофты и пиджаки</a></li>
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
                    <p class="about-product__price"><span class="product-old-item">6100 UAH</span> <span
                            class="product-new-item">3800 UAH</span></p>
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
                        <button @click="openModal" class="select-font">Оплата и доставка</button>
                        <button @click="openModalReturn" class="select-font">Возврат и обмен</button>
                    </div>
                    <h4 class="about-product__desc-500">ИНФОРМАЦИЯ О ТОВАРЕ</h4>
                    <p class="about-product__desc-title select-font">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div class="about-product__container">
            <div class="similar-products">
                <product-component v-for="sim in 3" :key="sim"></product-component>
                <div class="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="41" fill="none">
                        <path stroke="#254A5A" d="M17 1 1 20.5 17 40" />
                    </svg>
                </div>
                <div class="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="41" fill="none">
                        <path stroke="#254A5A" d="m1 1 16 19.5L1 40" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- Payment Modal -->
        <div class="overlay" v-show="openPaymentModal" @click="closeModal"></div>
        <div class="modal" v-show="openPaymentModal">
            <div class="modal__payment" :class="{ 'showModal': openPaymentModal }">
                <close-btn-component @click="closeModal"></close-btn-component>
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
        </div>
        <!-- Return and exchange Modal -->
        <div class="overlay" v-show="openReturnModal" @click="closeModalReturn"></div>
        <div class="modal" v-show="openReturnModal">
            <div class="modal__payment modal__return" :class="{ 'showModal': openReturnModal }">
                <close-btn-component @click="closeModalReturn"></close-btn-component>
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
    </div>
</template>

<script setup>
import ProductComponent from '@/components/ProductComponent.vue';
import HeartComponent from '@/components/HeartComponent.vue';
import CloseBtnComponent from '../../components/CloseBtnComponent.vue';
import { ref } from 'vue';
const openPaymentModal = ref(false)
const openReturnModal = ref(false)
//  Payment Modal
function openModal() {
    openPaymentModal.value = true;
}
function closeModal() {
    openPaymentModal.value = false;
}
// Return Modal
function openModalReturn() {
    openReturnModal.value = true;
}

function closeModalReturn() {
    openReturnModal.value = false;
}

// document.addEventListener('keydown', (e)=>{
//     console.log(e.target);
//     if(e.target.value = 'Escape'){
//         openPaymentModal.value = false;
//         openReturnModal.value = false;
//     }
// })

</script>

<style lang="scss" scoped>

</style>