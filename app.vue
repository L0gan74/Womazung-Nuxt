<script setup>
import './assets/scss/main.scss'

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <div v-if="loading">
    <h1>Загрузка</h1>
  </div>
  <NuxtLayout v-else>
    <NuxtPage/>
  </NuxtLayout>
</template>
