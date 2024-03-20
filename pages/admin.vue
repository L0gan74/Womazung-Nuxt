<script setup lang="ts">

import axios from "axios";

type formItems = {
  name: string,
  price: string,
  oldPrice?: string,
  img: string,
  categories: string
}

const addItems = ref<formItems>({
  name: '',
  price: '',
  oldPrice: '',
  img: '',
  categories: ''
})

const addform = () => {
  axios.post<formItems>(`https://30fc9ac5f1c540d7.mokky.dev/register`, addItems.value)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
}

onMounted(() => {
  addform
})

</script>

<template>
  <div class="form">
    <h1>Добавление товара</h1>
    <form @submit="addform">
      <input v-model="addItems.name" type="text" name="name" placeholder="Введите название товара"/>
      <input v-model="addItems.price" type="number" name="name" placeholder="Введите новую цену товара"/>
      <input v-model="addItems.oldPrice" type="number" name="name" placeholder="Введите старую цену товара *"/>
      <input v-model="addItems.img" type="text" name="name" placeholder="Вставьте url картинки"/>
      <input v-model="addItems.categories" type="text" name="name" placeholder="Введите категорию"/>
      <button type="button">
        Добавить
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">

</style>