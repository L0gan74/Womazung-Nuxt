<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <NuxtLink class="btn" to="">Ссылка</NuxtLink>
    <NuxtLink class="transparent" to="">Ссылка</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>