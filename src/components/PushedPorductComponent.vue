<template>
    <div class="wishlist__container__item">
        <div class="wishlist__container__item-content">
            <div class="wishlist__container__item-content__close">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                    <path stroke="#0F303F" d="m1 1 20 20M21 1 1 21" />
                </svg>
            </div>
            <div class="wishlist__container__item-content__info">
                <div class="wishlist__container__item-content__info__img">
                    <img src="@/assets/images/wishlist-img.png" alt="">
                </div>
                <div class="wishlist__container__item-content__info__text">
                    <h2>REPlay</h2>
                    <h6>Classic shoes</h6>
                    <p class="product-price"><span class="old-price">6100 UAH</span> <span class="new-price">3800 UAH</span>
                    </p>
                    <button class="btn add-to-cart-btn" id="btn-wishlist">добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>