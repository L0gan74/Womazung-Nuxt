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
    <li class="breadcrumb-first text-main">
      <NuxtLink class="text-main" to="/">
        Главная
      </NuxtLink>
    </li>
    <li> —
      <NuxtLink class="text-main" :to="`/${categoryLink}`">{{ category }}</NuxtLink>
    </li>
    <li class="text-main" v-if="nameItem"> —
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
  }
}
</style>