<script setup lang="ts">

const categories = [
  {id: 1, name: 'Все', categories: ""},
  {id: 2, name: 'Пальто', categories: "coat"},
  {id: 3, name: 'Свитшоты', categories: "sweatshirts"},
  {id: 4, name: 'Футболки', categories: "t-shirt"},
]

</script>

<template>
  <div class="home-categories">
    <button class="_active"
            type="button"
            v-for="category in categories"
            :key="category.id">
      {{ category.name }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.home-categories {
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
</style>