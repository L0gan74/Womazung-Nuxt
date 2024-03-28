<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <NuxtLink exact-active-class="_active" to="/">
        Главная
      </NuxtLink>
      <NuxtLink exact-active-class="_active" to="/shop">
        Магазин
      </NuxtLink>
      <NuxtLink exact-active-class="_active" to="/brand">
        О бренде
      </NuxtLink>
      <NuxtLink exact-active-class="_active" to="/contacts">
        Контакты
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: rgb(241, 234, 220);
  padding: 104px 0 97px;
  @media(max-width: 992px) {
    padding: 30px 0 25px;
  }

  &-container {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 0 auto;
    @media(max-width: 992px) {
      width: 100%;
      padding: 0 15px;
    }
    a {
      transition: .2s linear;
      color: black;
      font-size: 15px;
      line-height: 140%;

      &:hover {
        color: rgb(110 156 159 / 58%);
      }

      &._active {
        color: rgb(110, 156, 159);
        font-weight: 700;
      }
    }
  }
}
</style>