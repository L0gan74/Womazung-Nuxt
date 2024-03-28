<script setup lang="ts">

import axios from "axios";
import {onMounted} from "vue";
import Swiper from "~/components/home/Swiper.vue";
import type {ItemsCard} from "~/interface/Items";

const items = ref<ItemsCard[]>([])
const loading = ref<boolean>(false)
const apiUrl = process.env.apiBase
const fetchItems = async () => {
  try {
    loading.value = true
    const {data} = await axios.get('https://30fc9ac5f1c540d7.mokky.dev/items?limit=3')
    items.value = data.items
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchItems)

</script>

<template>
  <div class="receipts indentation">
    <Swiper/>
    <div class="receipts-images">
      <NuxtImg src="/img/receipts-main.png" alt="img"/>
      <NuxtImg src="/img/receipts-2.png" alt="img"/>
      <NuxtImg src="/img/receipts-1.png" alt="img"/>
    </div>
  </div>
  <div class="collection indentation">
    <h2 class="collection-title _title">Новая коллекция</h2>
    <div class="collection-container">
      <Card :items="items"/>
    </div>
    <NuxtLink class="collection-link transparent" to="/shop">
      Открыть магазин
    </NuxtLink>
  </div>
  <div class="important indentation">
    <h2 class="important-title _title">Что для нас важно</h2>
    <div class="important-container">
      <div class="important-container__item">
        <NuxtImg class="important-container__item-img" src="/img/quality.svg" alt="img" width="61" height="61"/>
        <h3 class="important-container__item-title">
          Качество
        </h3>
        <p class="important-container__item-description">
          Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
        </p>
      </div>
      <div class="important-container__item">
        <NuxtImg class="important-container__item-img" src="/img/speed.svg" alt="img" width="61" height="61"/>
        <h3 class="important-container__item-title">
          Скорость
        </h3>
        <p class="important-container__item-description">
          Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
        </p>
      </div>
      <div class="important-container__item">
        <NuxtImg class="important-container__item-img" src="/img/responsibility.svg" alt="img" width="61" height="61"/>
        <h3 class="important-container__item-title">
          Ответственность
        </h3>
        <p class="important-container__item-description">
          Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
        </p>
      </div>
    </div>
  </div>
  <div class="team indentation">
    <h2 class="team-title _title">Команда мечты Womazing</h2>
    <div class="team-container">
      <NuxtImg class="team-container__img" src="/img/team.png" alt="img"/>
      <div class="team-container__text">
        <h3 class="team-container__text-title">Для каждой</h3>
        <p class="team-container__text-description">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
        </p>
        <p class="team-container__text-description">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой
          девушки.</p>
        <NuxtLink class="team-container__text-link" to="/brand">
          Подробнее о бренде
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.receipts {
  display: grid;
  gap: 20px;
  @media(min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &:after {
    content: '';
    position: absolute;
    background: rgb(241, 234, 220);
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(50% - 60px);
    height: 815px;
    @media (max-width: 992px){
      display: none;
    }
  }

  &-swiper {
    width: 100%;
  }

  &-text {
    padding-top: 140px;
    @media (max-width: 992px) {
      text-align: center;
      padding-top: 40px;
    }

    h1 {
      padding-bottom: 45px;
      @media (max-width: 992px){
        padding-bottom: 25px;
      }
    }

    &__description {
      color: black;
      font-size: 20px;
      line-height: 140%;
      padding-bottom: 25px;
      @media (min-width: 992px) {
        max-width: 385px;
        text-align: right;
        padding-bottom: 52px;
      }
    }

    &__link {
      margin-left: 100px;
      @media (max-width: 992px){
        margin: 0 auto 15px;
      }
    }
  }

  &-images {
    position: relative;
    padding-bottom: 50px;
    z-index: 2;
    @media(max-width: 992px) {
      display: none;
    }

    img {
      display: block;
      object-fit: cover;

      &:nth-child(1) {
        height: 646px;
        margin-left: auto;
        @media(max-width: 1400px) {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }

      &:nth-child(2) {
        height: 197px;
        width: 197px;
        position: absolute;
        top: 100px;
        right: -98px;
        @media(max-width: 1400px) {
          display: none;
        }
      }

      &:nth-child(3) {
        width: 190px;
        height: 350px;
        position: absolute;
        bottom: 0;
        left: 60px;
        @media(max-width: 1400px) {
          display: none;
        }
      }
    }
  }
}

.collection {

  &-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 65px;
    @media(max-width: 992px){
     margin-bottom: 30px;
      gap: 15px;
    }
  }

  &-link {
    margin: 0 auto;
  }
}

.important {

  &-container {
    display: grid;
    grid-gap: 20px;
    @media(min-width: 992px){
      grid-template-columns: repeat(3, 1fr);
    }

    &__item {
      @media(max-width: 992px){
        width: 360px;
        margin: 0 auto;
        text-align: center;
      }
      &-title {
        padding: 37px 0 24px;
        @media(max-width: 992px){
          padding: 20px 0 10px;
        }
      }

      &-description {
        color: black;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }
}

.team {

  &-container {
    display: grid;
    grid-template-columns: 60% 30%;
    grid-gap: 124px;
    align-items: center;
    @media(max-width: 992px){
      grid-template-columns: 1fr;
      gap: 35px;
    }

    &__img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text {
      &-title {
        padding-bottom: 28px;
        @media(max-width: 992px){
          padding-bottom: 15px;
        }
      }

      &-description {
        color: black;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        padding-bottom: 28px;
        @media(max-width: 992px){
          padding-bottom: 15px;
        }
      }

      a {
        color: rgb(110, 156, 159);
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }
}

.card {
  text-align: center;

  &-img {
    display: block;
    width: 100%;
    max-height: 550px;
    object-fit: cover;
  }

  &-title {
    color: black;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
    padding: 24px 0 7px;
  }

  &-price {
    display: flex;
    justify-content: center;
    gap: 10px;
    color: rgb(153, 142, 120);
    font-size: 15px;
    font-weight: 500;
    line-height: 140%;

    &__discount {
      text-decoration-line: line-through;
    }
  }
}

</style>