<script setup lang="ts">

import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";

</script>

<template>
  <div class="wrapper">
    <Header/>
    <div class="container">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container{
  padding: 0 15px;
  flex: 1;
  @media(min-width: 1220px) {
    width: 1220px;
    margin: 0 auto;
  }
}
</style>