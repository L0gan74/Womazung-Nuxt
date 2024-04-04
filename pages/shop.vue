<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import axios from "axios";
import {onMounted} from "vue";
import type {Category, ItemsCard} from "~/interface/Items";
import {ref} from 'vue'

const config = useRuntimeConfig()

const API_URL = config.public.apiBase
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
    if (cashe.has(category)) {
      items.value = cashe.get(category)
    } else {
      const {data} = await axios.get(API_URL + `/${category}`)
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
      <button class="shop-categories__button text-main" v-for="category in categories"
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
      <p class="shop-length text-main">Показано: {{ items.length }} из {{ items.length }} товаров</p>
      <div class="shop-container">
        <Card :items="items"/>
      </div>
      <p class="shop-length text-main">Показано: {{ items.length }} из {{ items.length }} товаров</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shop {
  margin: 100px 0 130px;
  @media(max-width: 992px) {
    margin: 40px 0 50px;
  }

  &-categories {
    padding-bottom: 40px;
    display: flex;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    @media(max-width: 992px) {
      padding-bottom: 20px;
    }

    &__button {
      height: 62px;
      border: 1px solid rgb(0, 0, 0);
      width: 150px;

      &._active {
        background: black;
        color: white;
      }
    }
  }

  &-length {
    color: rgb(128, 128, 128);
    padding-bottom: 40px;
    @media(max-width: 992px) {
      padding-bottom: 20px;
    }
  }

  &-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 50px;
    padding: 0 0 40px;
    @media(max-width: 992px) {
      grid-column-gap: 25px;
      grid-row-gap: 20px;
      padding: 0 0 20px;
    }
  }
}

</style>