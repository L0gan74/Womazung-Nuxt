<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";

</script>

<template>
  <div class="success">
    <Breadcrumb title="Заказ получен" category="Оформление заказа" name-item="Заказ получен"/>
    <div class="success-wrapper">
      <div class="success-wrapper__successfully">
        <NuxtImg class="success-wrapper__successfully-img" src="/img/success.png" alt="img"/>
        <div class="success-wrapper__successfully-text">
          <h3>Заказ успешно оформлен</h3>
          <p class="text-main">Мы свяжемся с вами в ближайшее время!</p>
        </div>
      </div>
      <NuxtLink class="success-wrapper__link transparent" to="/">Перейти на главную</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.success {
  margin: 100px 0;
  @media(max-width: 992px) {
    margin: 50px 0;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 992px) {
      margin-top: 40px;
      flex-direction: column;
      gap: 20px;
    }

    &__successfully {
      display: flex;
      align-items: center;
      gap: 32px;
      @media(max-width: 768px) {
        text-align: center;
        gap: 15px;
      }

      &-img {
        @media(max-width: 768px) {
          display: none;
        }
      }

      p {
        padding-top: 17px;
      }
    }
  }
}
</style>