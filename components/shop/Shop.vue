<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import axios from "axios";
import {onMounted} from "vue";
import type {Category, ItemsCard} from "~/interface/Items";

const items = ref<ItemsCard[]>([])
const loading = ref(false)

const categories: Category[] = [
  {id: 1, name: 'Все', categories: "/"},
  {id: 2, name: 'Пальто', categories: "?categories=coat"},
  {id: 3, name: 'Свитшоты', categories: "?categories=sweatshirts"},
  {id: 4, name: 'Футболки', categories: "?categories=t-shirt"},
]

const fetchItems = async (category = '') => {
  try {
    loading.value = true
    const {data} = await axios.get(`https://30fc9ac5f1c540d7.mokky.dev/items${category}`)
    items.value = data
    loading.value = false
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchItems)

</script>

<template>
  <div class="shop">
    <Breadcrumb title="Магазин" category="Магазин"/>
    <div class="shop-categories">
      <button class="_active"
              type="button"
              v-for="category in categories"
              :key="category.id"
              @click="fetchItems(category.categories)"
      >
        {{ category.name }}
      </button>
    </div>
    <h2 v-if="loading">Загрузка данных...</h2>
    <div v-else>
    <p class="shop-length">Показано: {{ items.length }} из {{ items.length }} товаров</p>
    <div class="shop-container">
      <NuxtLink v-for="item in items" :key="item" :to="`/card/${item.id}`">
        <div class="card">
          <NuxtImg class="card-img" :src="item.img" alt="img"/>
          <h4 class="card-title">{{ item.name }}</h4>
          <p class="card-price">
            <span class="card-price__discount">$220</span>
            ${{ item.price }}
          </p>
        </div>
      </NuxtLink>
    </div>
    <p class="shop-length">Показано: {{ items.length }} из {{ items.length }} товаров</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shop {
  margin: 196px 0 130px;

  &-categories {
    padding-bottom: 40px;
    display: flex;
    gap: 10px;

    button {
      color: black;
      font-size: 17px;
      font-weight: 500;
      line-height: 140%;
      padding: 0 65px;
      height: 62px;
      border: 1px solid rgb(0, 0, 0);

      &._active {
        background: black;
        color: white;
      }
    }
  }

  &-length {
    color: rgb(128, 128, 128);
    font-size: 17px;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 40px;
  }

  &-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
    padding: 40px 0;
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