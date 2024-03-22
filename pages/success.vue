<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
</script>

<template>
  <div class="success">
    <Breadcrumb title="Заказ получен" category="Оформление заказа" name-item="Заказ получен"/>
    <div class="success-wrapper">
      <div class="success-wrapper__successfully">
        <NuxtImg src="/img/success.png" alt="img"/>
        <div class="success-wrapper__successfully-text">
          <h3>Заказ успешно оформлен</h3>
          <p>Мы свяжемся с вами в ближайшее время!</p>
        </div>
      </div>
      <NuxtLink to="/">Перейти на главную</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.success {
  margin: 100px 0;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__successfully {
      display: flex;
      align-items: center;
      gap: 32px;
      p{
        color: black;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        padding-top: 17px;
      }
    }
    a{
      border: 1px solid rgb(110, 156, 159);
      width: 272px;
      height: 68px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(110, 156, 159);
      font-size: 17px;
      font-weight: 400;
      line-height: 138.9%;
    }
  }
}
</style>