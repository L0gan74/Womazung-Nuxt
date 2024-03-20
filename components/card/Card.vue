<script setup lang="ts" generic="T extends ItemsCard">

import type {ItemsCard} from "~/interface/Items";

defineProps<{
  items: T[]
}>()

</script>

<template>
  <NuxtLink v-for="item in items" :key="item.id" :to="`/card/${item.id}`">
    <div class="card">
      <div class="card-img">
        <NuxtImg :src="item.img" alt="img"/>
      </div>
      <h4 class="card-title">{{ item.name }}</h4>
      <p class="card-price">
        <span class="card-price__discount">$220</span>
        ${{ item.price }}
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.card {
  text-align: center;

  &-img {
    position: relative;
    transition: background-color 1s ease-in-out;
    &:hover {
      &:after {
        background-color: #6e9c9fa1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 1;
      }
    }

    img {
      display: block;
      width: 100%;
      max-height: 550px;
      object-fit: cover;
    }
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