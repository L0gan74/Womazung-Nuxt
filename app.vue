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
  <NuxtLayout >
    <RouterView/>
  </NuxtLayout>
</template>
