<script setup>
import './assets/scss/main.scss'
import {ref, computed} from "vue";

useHead({
  title: "Одежда и аксессуары | Womazing",
  meta: [
    {
      name: 'description',
      content: 'Купить модную мужскую и женскую одежду, обувь, аксессуары и многое другое в нашем интернет-магазине одежды.',
    }
  ]
})

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

const cartBasket = ref([])

const addToCart = (item) => {
  const index = cartBasket.value.findIndex(cartItem => cartItem.id === item.id)
  if (index > -1) {
    cartBasket.value.splice(index, 1)
    alert("Товар удалён из корзины")
  } else {
    cartBasket.value.push(item)
    alert("Товар добавлен в корзину")
  }
  console.log(cartBasket)
}

const removeFromCart = (item) => {
  const index = cartBasket.value.findIndex(cartItem => cartItem.id === item.id)
  if (index > -1) {
    cartBasket.value.splice(index, 1)
    alert("Товар удалён из корзины")
  }
}

const totalPrice = computed(() =>
    cartBasket.value.reduce((acc, item) => acc + Number(item.price), 0)
)

provide('location', {
  addToCart, cartBasket, removeFromCart, totalPrice
})

</script>

<template>
  <div class="preolader" v-if="loading">
    <NuxtImg class="preolader-gif" src="/preloader/preloader.gif" alt="preloader"/>
  </div>
  <NuxtLayout v-else>
    <NuxtPage/>
  </NuxtLayout>
</template>
