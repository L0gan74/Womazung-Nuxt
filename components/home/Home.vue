<script setup lang="ts">

import axios from "axios";
import {onMounted} from "vue";
import Swiper from "~/components/home/Swiper.vue";
import type {ItemsCard} from "~/interface/Items";

const items = ref<ItemsCard[]>([])
const loading = ref<boolean>(false)

const fetchItems = async () => {
  try {
    loading.value = true
    const {data} = await axios.get('https://30fc9ac5f1c540d7.mokky.dev/items?limit=3')
    items.value = data.items
    loading.value = false
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchItems)

</script>

<template>
  <div class="receipts">
    <Swiper/>
    <div class="receipts-images">
      <NuxtImg src="/img/receipts-main.png" alt="img"/>
      <NuxtImg src="/img/receipts-2.png" alt="img"/>
      <NuxtImg src="/img/receipts-1.png" alt="img"/>
    </div>
  </div>
  <div class="collection">
    <h2>Новая коллекция</h2>
    <div class="collection-container">
      <Card :items="items"/>
    </div>
    <NuxtLink class="collection-link" to="/shop">
      Открыть магазин
    </NuxtLink>
  </div>
  <div class="important">
    <h2>Что для нас важно</h2>
    <div class="important-container">
      <div class="important-container__item">
        <NuxtImg src="/img/quality.svg" alt="img" width="61" height="61"/>
        <h3>
          Качество
        </h3>
        <p>
          Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
        </p>
      </div>
      <div class="important-container__item">
        <NuxtImg src="/img/speed.svg" alt="img" width="61" height="61"/>
        <h3>
          Скорость
        </h3>
        <p>
          Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
        </p>
      </div>
      <div class="important-container__item">
        <NuxtImg src="/img/responsibility.svg" alt="img" width="61" height="61"/>
        <h3>
          Ответственность
        </h3>
        <p>
          Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
        </p>
      </div>
    </div>
  </div>
  <div class="team">
    <h2>Команда мечты Womazing</h2>
    <div class="team-container">
      <NuxtImg class="team-container__img" src="/img/team.png" alt="img"/>
      <div class="team-container__text">
        <h3>Для каждой</h3>
        <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
        </p>
        <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой
          девушки.</p>
        <NuxtLink to="/brand">
          Подробнее о бренде
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.receipts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 130px;

  &:after {
    content: '';
    position: absolute;
    background: rgb(241, 234, 220);
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(50% - 60px);
    height: 815px;
  }

  &-swiper {
    width: 100%;
  }

  &-text {
    padding-top: 140px;

    h1 {
      padding-bottom: 45px;
    }

    p {
      color: black;
      font-size: 20px;
      line-height: 140%;
      text-align: right;
      padding-bottom: 52px;
      max-width: 385px;
    }

    a {
      color: white;
      font-size: 17px;
      line-height: 138.9%;
      width: 243px;
      height: 68px;
      background: rgb(110, 156, 159);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 100px;
    }
  }

  &-images {
    position: relative;
    padding-bottom: 50px;
    z-index: 2;

    img {
      display: block;
      object-fit: cover;

      &:nth-child(1) {
        height: 646px;
        margin-left: auto;
      }

      &:nth-child(2) {
        height: 197px;
        width: 197px;
        position: absolute;
        top: 100px;
        right: -98px;
      }

      &:nth-child(3) {
        width: 190px;
        height: 350px;
        position: absolute;
        bottom: 0;
        left: 60px;
      }
    }
  }
}

.collection {
  margin-bottom: 130px;

  h2 {
    padding-bottom: 92px;
  }

  &-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 65px;
  }

  &-link {
    border: 1px solid rgb(110, 156, 159);
    width: 243px;
    height: 68px;
    margin: 0 auto;
    color: rgb(110, 156, 159);
    font-size: 17px;
    font-weight: 400;
    line-height: 138.9%;
    justify-content: center;
    display: flex;
    align-items: center;
  }
}

.important {
  margin-bottom: 130px;

  h2 {
    padding-bottom: 92px;
  }

  &-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 75px;

    &__item {
      h3 {
        padding: 37px 0 24px;
      }

      p {
        color: black;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }
}

.team {
  margin-bottom: 130px;

  h2 {
    padding-bottom: 92px;
  }

  &-container {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 124px;
    align-items: center;

    &__img {
      display: block;
      width: 100%;
      object-fit: cover;
    }

    &__text {
      h3 {
        padding-bottom: 28px;
      }

      p {
        color: black;
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        padding-bottom: 28px;
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