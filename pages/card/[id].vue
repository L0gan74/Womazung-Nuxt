<script setup lang="ts">
import axios from "axios";
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import type {ItemIdCard} from "~/interface/Items";
import { inject, ref } from 'vue'

const route = useRoute()

const item = ref<ItemIdCard | null>(null)
const loading = ref<boolean>(false)


const addToCart = inject('main')

const fetchItem = async () => {
  try {
    loading.value = true
    const {data} = await axios.get<ItemIdCard>(`https://30fc9ac5f1c540d7.mokky.dev/items/${route.params.id}`)
    item.value = data as ItemIdCard
    loading.value = false
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(fetchItem)

</script>

<template>
  <Breadcrumb category="Магазин"/>
  <div class="preolader" v-if="loading">
    <NuxtImg class="preolader-gif" src="/preloader/preloader.gif" alt="preloader"/>
  </div>
  <div v-else>
    <h1>{{ item?.name }}</h1>
    <div class="card">
      <NuxtImg class="card-img" :src="item?.img" alt="img"/>
      <div class="card-text">
        <div class="card-text__price">
          <p>$ {{ item?.price }}</p>
          <p>{{ item?.oldPrice }}</p>
        </div>
        <h4>Выберите размер</h4>
        <div class="card-text__size">
          <button type="button"
                  v-for="size in item?.sizes"
                  :key="size"
          >
            {{ size }}
          </button>
        </div>
        <h4>Выберите цвет</h4>
        <div class="card-text__colors">
          <button v-for="color in item?.colors" :key="item" :style="{'background': color}" type="button">
          </button>
        </div>
        <div class="card-text__basket">
          <div class="card-text__basket-count">
            1
          </div>
          <button type="button" @click="addToCart">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
h1{
  padding-bottom: 50px;
}
.card {
  display: flex;
  align-items: center;
  gap: 74px;
  margin-bottom: 130px;

  &-img {
    width: 536px;
    height: 729px;
    object-fit: cover;
    display: block;
  }

  &-text {

    h4 {
      font-size: 20px;
      font-weight: 500;
      color: black;
      padding-bottom: 34px;
      text-align: left;
    }

    &__price {
      display: flex;
      gap: 29px;
      padding-bottom: 64px;

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
        color: black;
        font-size: 17px;
        font-weight: 500;

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

    &__basket {
      display: flex;
      gap: 11px;

      &-count {
        width: 68px;
        height: 68px;
        border: 1px solid rgb(175, 175, 175);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: black;
      }

      button {
        background: rgb(110, 156, 159);
        width: 268px;
        height: 68px;
        font-size: 17px;
        color: white;
      }
    }
  }
}
</style>