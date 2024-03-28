<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <div class="error">
    <div class="error-wrapper">
      <h2 class="error-wrapper__text">К сожалению страница не найдена или она не работает :(</h2>
      <h3 class="error-wrapper__error">{{ error.statusCode }}</h3>
      <NuxtLink class="error-wrapper__link" to="/">Главная</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &-wrapper{
    text-align: center;
    &__text{
      padding: 40px 0;
    }
    &__link{
      color: rgb(110, 156, 159);
      font-weight: 700;
      font-size: 24px;
    }
  }
}
</style>