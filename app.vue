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
  <div class="preolader" v-if="loading">
    <NuxtImg class="preolader-gif" src="/preloader/preloader.gif" alt="preloader"/>
  </div>
  <NuxtLayout v-else>
    <NuxtPage/>
  </NuxtLayout>
</template>
