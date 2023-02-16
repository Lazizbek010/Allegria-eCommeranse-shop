<template>
    <div class="com-ques">
        <div class="container">
            <ul class="common__hero__list about-us__hero__list">
            <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
            <li><router-link class="active" :to="{ name: 'common-questions' }">Популярные вопросы</router-link></li>
        </ul>
        <div class="com-ques__container">
            <h1 class="com-ques__container__title">Популярные вопросы</h1>
            <div class="com-ques__container__info">
                <div class="com-ques__container__info__text">
                    <h3>ПОКУПКИ</h3>
                    <ul>
                        <li>
                            <span>Вопрос от покупателя</span>
                            <span class="question-text">Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар. Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none"><path stroke="#E64926" d="M0 1h10"></path></svg>
                        </li>
                        <li v-for="li in 4" :key="li">
                            <span>Вопрос от покупателя</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"><path stroke="#000" d="M5 0v10M0 5h10"></path></svg>
                        </li>
                    </ul>
                    <h3>ВОЗВРАТ И ОБМЕН</h3>
                    <ul>
                        <li v-for="li2 in 3" :key="li2">
                            <span>Вопрос от покупателя</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"><path stroke="#000" d="M5 0v10M0 5h10"></path></svg>
                        </li>
                    </ul>
                </div>
                <div class="com-ques__container__info__form">
                    <form action="#">
                        <h2>Есть вопросы или предложения? НАПИШИТЕ НАМ</h2>
                        <input required type="text" placeholder="Имя" name="name" id="name">
                        <input type="email" placeholder="E-mail" name="email" id="email">
                        <label for="sel">Что Вас интересует:</label>
                        <select name="sel" id="sel">
                            <option value="0" selected disabled>Вопрос</option>
                            <option value="1">1</option>
                        </select>
                        <textarea name="message" id="message" cols="20" rows="4" placeholder="Текс сообщения"></textarea>
                        <button class="btn-submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>