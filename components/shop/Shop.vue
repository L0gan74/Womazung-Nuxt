<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import axios from "axios";
import {onMounted} from "vue";
import type {Category, ItemsCard} from "~/interface/Items";

const items = ref([])

const categories:Category[] = [
  {id: 1, name: 'Все', categories: "/"},
  {id: 2, name: 'Пальто', categories: "?categories=coat"},
  {id: 3, name: 'Свитшоты', categories: "?categories=sweatshirts"},
  {id: 4, name: 'Футболки', categories: "?categories=t-shirt"},
]

const fetchItems = async (category = '') => {
  try {
    const {data} = await axios.get<ItemsCard[]>(`https://30fc9ac5f1c540d7.mokky.dev/items${category}`)
    items.value = data
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
    <p class="shop-length">Показано: 2 из {{ items.length }} товаров</p>
    <div class="shop-container">
      <NuxtLink v-for="item in items" :key="item.id" :to="`/card/${item.id}`">
        <Card :item="item"/>
      </NuxtLink>
    </div>
    <p class="shop-length">Показано: 2 из {{ items.length }} товаров</p>
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
</style>