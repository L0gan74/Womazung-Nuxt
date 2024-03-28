<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
</script>

<template>
  <div class="brand">
    <Breadcrumb title="О бренде" category="О бренде"/>
    <div class="brand-item">
      <NuxtImg class="brand-item__img" src="/img/brand-left.png" alt="img"/>
      <div class="brand-item__text">
        <h3 class="brand-item__text-title">Идея и женщина</h3>
        <p class="brand-item__text-description">Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие
          итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
        </p>
        <p class="brand-item__text-description"> Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот
          метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда
          итальянских prêt-a-porter компаний.</p>
      </div>
    </div>
    <div class="brand-item">
      <div class="brand-item__text">
        <h3 class="brand-item__text-title">Магия в деталях</h3>
        <p class="brand-item__text-description">Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция
          состояла из двух пальто и костюма, которые были копиями парижских моделей.
        </p>
        <p class="brand-item__text-description"> Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с
          шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и
          шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда
          высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.</p>
      </div>
      <NuxtImg class="brand-item__img" src="/img/brand-right.png" alt="img"/>
    </div>
    <NuxtLink to="/shop" class="brand-link">
      Перейти в магазин
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.brand {
  margin: 100px 0 130px;
  @media(max-width: 992px) {
    margin: 40px 0 50px;
  }

  &-item {
    display: grid;
    align-items: center;
    grid-template-columns: 60% 40%;
    gap: 50px;
    @media(max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 25px;
    }

    &__img {
      display: block;
      width: 100%;
      object-fit: cover;
      @media(max-width: 992px){
        height: 350px;
      }
    }

    &__text {
      &-title {
        padding-bottom: 46px;
        @media(max-width: 992px){
          padding-bottom: 25px;
        }
      }

      &-description {
        padding-bottom: 20px;
        color: black;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }

  &-link {
    background: rgb(110, 156, 159);
    width: 260px;
    height: 68px;
    color: white;
    font-size: 17px;
    line-height: 138.9%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
}
</style>