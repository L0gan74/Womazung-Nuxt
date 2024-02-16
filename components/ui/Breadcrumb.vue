<script setup lang="ts">

defineProps<{
  name?: string
}>()

</script>

<template>
  <ul class="breadcrumb">
    <li>
      <NuxtLink to="/">
        Главная
      </NuxtLink>
    </li>
    <li> — {{name}}</li>
  </ul>
</template>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  gap: 5px;
  padding-bottom: 102px;

  li,a {
    color: black;
    font-size: 17px;
    font-weight: 500;
    line-height: 140%;
  }
  li{
    &:last-child {
      color: rgb(145, 145, 145);

    }
  }
}
</style>