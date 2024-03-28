<script setup lang="ts">

import {inject} from 'vue'

import Breadcrumb from "~/components/ui/Breadcrumb.vue";

const router = useRouter()
const {cartBasket, removeFromCart, totalPrice} = inject("location")

const linkToPayment = () => {
  router.push('/payment')
}

</script>

<template>
  <div class="basket">
    <Breadcrumb title="Корзина" category="Корзина"/>
    <div class="basket-top">
      <p>Товар</p>
      <p>Цена</p>
    </div>
    <h2 class="basket-empty" v-if="cartBasket == 0">Корзина пустая</h2>
    <div class="basket-goods" v-for="item in cartBasket">
      <div class="basket-goods__items">
        <button type="button" @click="() => removeFromCart(item)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
            <path
                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
          </svg>
        </button>
        <NuxtImg :src="item.img" alt="preloader"/>
        <p>{{ item.name }}</p>
      </div>
      <p>${{ item.price }}</p>
    </div>
    <form class="basket-refresh">
      <input class="basket-refresh__input input" type="text" placeholder="Введите купон">
      <button class="basket-refresh__button transparent" type="button">Применить купон</button>
    </form>
    <div class="basket-price">
      <div class="basket-price__total">
        <p class="basket-price__total-text">Итого:</p>
        <p class="basket-price__total-text">${{ totalPrice }}</p>
      </div>
      <button class="basket-price__button btn" type="button" :disabled="cartBasket == 0" @click="linkToPayment">Оформить
        заказ
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basket {
  margin: 196px 0 130px;
  @media(max-width: 992px) {
    margin: 40px 0 30px;
  }

  p {
    color: black;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
  }

  &-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px solid rgb(204, 204, 204);
    padding-bottom: 25px;
  }

  &-empty {
    text-align: center;
    padding: 80px 0;
  }

  &-goods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin: 72px 0;
    gap: 10px;
    @media(max-width: 992px) {
      margin: 20px 0;
    }

    &__items {
      display: flex;
      align-items: center;
      gap: 34px;
      @media(max-width: 992px) {
        gap: 10px;
      }

      img {
        width: 137px;
        height: 179px;
        object-fit: cover;
        display: block;
      }
    }
  }

  &-refresh {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 89px;
    gap: 16px;
    @media(max-width: 992px) {
      margin-bottom: 25px;
    }

    &__button{
      @media(max-width: 480px) {
        width: 100%;
      }
    }
  }

  &-price {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    &__total {
      background: rgb(241, 234, 220);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 25px;
      width: 287px;
      height: 68px;
      @media(max-width: 992px) {
        width: 243px;
        height: 48px;
      }
      @media(max-width: 480px) {
        width: 100%;
      }

      &-text {
        font-size: 25px;
        font-weight: 500;
        @media(max-width: 992px) {
          font-size: 20px;
        }
      }
    }

    &__button {
      @media(max-width: 480px) {
        width: 100%;
      }
      &:disabled {
        background: gray;
        cursor: auto;
      }
    }
  }
}
</style>