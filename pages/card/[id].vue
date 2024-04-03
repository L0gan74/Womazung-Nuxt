<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import type {ItemIdCard} from "~/interface/Items";

const config = useRuntimeConfig()
const API_URL = config.public.apiBase
const {id} = useRoute().params

const {data, pending} = useAsyncData("itemId", (): Promise<ItemIdCard> =>
    $fetch(API_URL + `/items/${id}`)
)

const {addToCart} = inject("location")

</script>

<template>
  <Head>
    <Meta name="description" :content="data?.description"/>
  </Head>
  <Breadcrumb category="Магазин" category-link="shop" :name-item="`${data?.name}`"/>
  <div class="preolader" v-if="pending">
    <NuxtImg class="preolader-gif" src="/preloader/preloader.gif" alt="preloader"/>
  </div>
  <div class="card" v-else>
    <h1 class="card-title">{{ data?.name }}</h1>
    <div class="card-wrapper" :key="data?.id">
      <NuxtImg class="card-img" :src="data?.img" alt="img"/>
      <div class="card-text">
        <div class="card-text__price">
          <p>$ {{ data?.price }}</p>
          <p>{{ data?.oldPrice }}</p>
        </div>
        <h4>Описание</h4>
        <p class="card-text__description">{{ data?.description }}</p>
        <!--        <h4>Выберите размер</h4>-->
        <!--        <div class="card-text__size">-->
        <!--          <button class="text-main" type="button"-->
        <!--                  v-for="size in item?.sizes"-->
        <!--                  :key="size"-->
        <!--          >-->
        <!--            {{ size }}-->
        <!--          </button>-->
        <!--        </div>-->
        <!--        <h4>Выберите цвет</h4>-->
        <!--        <div class="card-text__colors">-->
        <!--          <button v-for="color in item?.colors" :key="item" :style="{'background': color}" type="button">-->
        <!--          </button>-->
        <!--        </div>-->
        <button class="card-text__button btn" type="button" @click="() => addToCart(data)">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.card {
  &-title {
    padding-bottom: 50px;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    gap: 74px;
    margin-bottom: 130px;
    @media(max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
  }

  &-img {
    width: 536px;
    height: 729px;
    object-fit: cover;
    display: block;
    @media(max-width: 992px) {
      width: 100%;
      height: 350px;
    }
  }

  &-text {

    h4 {
      font-size: 20px;
      font-weight: 500;
      color: black;
      padding-bottom: 34px;
      text-align: left;
    }

    &__description {
      padding-bottom: 15px;
    }

    &__price {
      display: flex;
      gap: 29px;
      padding-bottom: 64px;
      @media(max-width: 992px) {
        padding-bottom: 30px;
      }

      p {
        font-size: 40px;
        font-weight: 500;
        color: rgb(153, 142, 120);

        &:last-child {
          text-decoration-line: line-through;
        }
      }
    }

    &__size {
      display: flex;
      gap: 14px;
      padding-bottom: 59px;

      button {
        width: 41px;
        height: 41px;
        border: 1px solid rgb(0, 0, 0);

        &._active {
          background: black;
          color: white;
        }
      }
    }

    &__colors {
      display: flex;
      gap: 14px;
      padding-bottom: 59px;

      button {
        width: 41px;
        height: 41px;
        border-radius: 100px;

        &._active {
          border: 2px solid black;
        }
      }
    }
  }
}
</style>