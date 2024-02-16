<script setup lang="ts">

</script>

<template>
  <div class="home-categories">
    <button class="_active" type="button">
      Все
    </button>
    <button type="button">
      Пальто
    </button>
    <button type="button">
      Свитшоты
    </button>
    <button type="button">
      Кардиганы
    </button>
    <button type="button">
      Толстовки
    </button>
  </div>
</template>

<style scoped lang="scss">
.home-categories {
  padding-bottom: 40px;
  display: flex;
  gap: 10px;
  button{
    color: black;
    font-size: 17px;
    font-weight: 500;
    line-height: 140%;
    padding: 0 65px;
    height: 62px;
    border: 1px solid rgb(0, 0, 0);
  }
}
</style>