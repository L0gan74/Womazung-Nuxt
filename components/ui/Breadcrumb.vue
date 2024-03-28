<script setup lang="ts">

defineProps<{
  title?: string
  category?: string
  categoryLink?: string
  name?: string
  nameItem?: string
}>()

</script>

<template>
  <h1 class="title">{{ title }}</h1>
  <ul class="breadcrumb">
    <li class="breadcrumb-first">
      <NuxtLink to="/">
        Главная
      </NuxtLink>
    </li>
    <li> —
      <NuxtLink :to="`/${categoryLink}`">{{ category }}</NuxtLink>
    </li>
    <li v-if="nameItem"> —
      {{ nameItem }}
    </li>

  </ul>
</template>

<style scoped lang="scss">
.title {
  padding-bottom: 28px;
  @media(max-width: 992px){
    padding-bottom: 15px;
  }
}

.breadcrumb {
  display: flex;
  gap: 5px;
  padding-bottom: 60px;
  @media(max-width: 992px){
    padding-bottom: 20px;
  }

  &-first a {
    color: black !important;
  }

  li, a {
    color: rgb(145, 145, 145);
    font-size: 17px;
    font-weight: 500;
    line-height: 140%;
  }
}
</style>