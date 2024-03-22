<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import axios from "axios";
import {onMounted} from "vue";
import type {Category, ItemIdCard, ItemsCard} from "~/interface/Items";
import { provide, ref } from 'vue'

const items = ref<ItemsCard[]>([])
const loading = ref<boolean>(false)
const cashe = new Map()

const categories: Category[] = [
  {id: 1, name: 'Все', categories: "/", isActive: true},
  {id: 2, name: 'Пальто', categories: "?categories=coat", isActive: false},
  {id: 3, name: 'Свитшоты', categories: "?categories=sweatshirts", isActive: false},
  {id: 4, name: 'Футболки', categories: "?categories=t-shirt", isActive: false},
]


const toggleCategory = (selectedCategory: Category) => {
  categories.forEach(category => {
    category.isActive = category === selectedCategory;
  });
  fetchItems(selectedCategory.categories);
};

const fetchItems = async (category = '') => {
  try {
    loading.value = true
    if(cashe.has(category)){
      items.value = cashe.get(category)
    } else{
      const {data} = await axios.get(`https://30fc9ac5f1c540d7.mokky.dev/items${category}`)
      items.value = data
      cashe.set(category, data)
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchItems)

</script>

<template>
  <div class="shop">
    <Breadcrumb title="Магазин" category="Магазин" category-link="shop"/>
    <div class="shop-categories">
      <button v-for="category in categories"
              :class="{'_active' : category.isActive}"
              type="button"
              :key="category.id"
              @click="toggleCategory(category)"
      >
        {{ category.name }}
      </button>
    </div>
    <div class="preolader" v-if="loading">
      <NuxtImg class="preolader-gif" src="/preloader/preloader.gif" alt="preloader"/>
    </div>
    <div v-else>
      <p class="shop-length">Показано: {{ items.length }} из {{ items.length }} товаров</p>
      <div class="shop-container">
        <Card :items="items"/>
      </div>
      <p class="shop-length">Показано: {{ items.length }} из {{ items.length }} товаров</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shop {
  margin: 100px 0 130px;

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