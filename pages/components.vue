<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <NuxtLink class="btn" to="">Ссылка</NuxtLink>
    <NuxtLink class="transparent" to="">Ссылка</NuxtLink>
    <input class="input" placeholder="Текст"/>
    <textarea class="textarea"></textarea>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>