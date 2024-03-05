<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
</script>

<template>
  <div class="basket">
    <Breadcrumb title="Корзина" category="Корзина"/>
    <div class="basket-top">
      <p>Товар</p>
      <p>Цена</p>
      <p>Количество</p>
      <p>Всего</p>
    </div>
    <div class="basket-goods">
      <div class="basket-goods__items">
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
            <path
                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
          </svg>
        </button>
        <NuxtImg src="https://files.gifts.ru/reviewer/tb/13/6140.60_73_500.jpg" alt="preloader"/>
        <p>Футболка USA</p>
      </div>
      <p>$129</p>
      <div class="basket-goods__count">
        1
      </div>
      <p>$129</p>
    </div>
    <div class="basket-goods">
      <div class="basket-goods__items">
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
            <path
                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
          </svg>
        </button>
        <NuxtImg src="https://files.gifts.ru/reviewer/tb/13/6140.60_73_500.jpg" alt="preloader"/>
        <p>Футболка USA</p>
      </div>
      <p>$129</p>
      <div class="basket-goods__count">
        1
      </div>
      <p>$129</p>
    </div>
    <div class="basket-refresh">
      <div class="basket-refresh__form">
        <input type="text" placeholder="Введите купон">
        <button type="submit">Применить купон</button>
      </div>
      <button class="basket-refresh__button" type="button">Обновить корзину</button>
    </div>
    <div class="basket-price">
      <p class="basket-price__subtotal">
        Подытог: <span>$129</span>
      </p>
      <div class="basket-price__bottom">
        <div class="basket-price__bottom-total">
          <p>Итого:</p>
          <p>$129</p>
        </div>
        <button type="button">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basket {
  margin: 196px 0 130px;

  p {
    color: black;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
  }

  &-top {
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    border-bottom: 1px solid rgb(204, 204, 204);
    padding-bottom: 25px;
  }

  &-goods {
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    align-items: center;
    margin: 72px 0;

    &__items {
      display: flex;
      align-items: center;
      gap: 34px;

      img {
        width: 137px;
        height: 179px;
        object-fit: cover;
        display: block;
      }
    }

    &__count {
      width: 47px;
      height: 47px;
      border: 1px solid rgb(175, 175, 175);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }

  &-refresh {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 89px;

    &__form {
      display: flex;
      align-items: center;
      gap: 16px;

      input {
        color: rgb(134, 134, 134);
        font-size: 17px;
        border: 0;
        height: 68px;
        border-bottom: 1px solid black;
        outline: none;
      }
      button{
        border: 1px solid rgb(110, 156, 159);
        width: 248px;
        height: 68px;
        color: rgb(110, 156, 159);
        font-size: 17px;
      }
    }
    &__button{
      border: 1px solid rgb(110, 156, 159);
      width: 248px;
      height: 68px;
      color: rgb(110, 156, 159);
      font-size: 17px;
    }
  }

  &-price{
    width: 538px;
    margin-left: 0;
    &__subtotal{
      font-size: 17px !important;
      padding-bottom: 28px;
      span{
        padding-left: 10px;
      }
    }
    &__bottom{
      display: flex;
      align-items: center;
      gap: 15px;
      &-total{
        background: rgb(241, 234, 220);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 25px;
        width: 287px;
        height: 68px;
        p{
          font-size: 25px;
          font-weight: 500;
        }
      }
      button{
        background: rgb(110, 156, 159);
        width: 236px;
        height: 68px;
        color: white;
        font-size: 17px;
      }
    }
  }
}
</style>