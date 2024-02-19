<script setup lang="ts">

import type {ItemIdCard} from "~/interface/Items";

defineProps<{
  item: ItemIdCard
}>()

</script>

<template>
  <div class="card">
    <NuxtImg class="card-img" :src="item.img" alt="img"/>
    <h4 class="card-title">{{item.name}}</h4>
    <p class="card-price">
      <span class="card-price__discount">$220</span>
      ${{item.price}}
    </p>
  </div>
</template>

<style scoped lang="scss">
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