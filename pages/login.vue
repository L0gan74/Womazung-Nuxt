<script setup lang="ts">

import axios from "axios";
import * as yup from "yup";
import {Form, Field, ErrorMessage} from 'vee-validate';

const router = useRouter()

type FormUsers = {
  fullName: string,
  email: string,
  password: string,
  token: string
}

const loginForm = ref<FormUsers>({
  fullName: '',
  email: '',
  password: '',
  token: ''
})

const schema = yup.object({
  name: yup.string().required("Введите Имя").min(3),
  email: yup.string().required("Введите Почту").email(),
  password: yup.string().required("Введите Пароль").min(10),
});

const submitForm = () => {
  axios.post<FormUsers>(`https://30fc9ac5f1c540d7.mokky.dev/auth`, loginForm.value)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", response.data.fullName)
        location.reload()
      })
      .catch(err => {
        console.log(err)
      })
}

onMounted(() => {
  submitForm
})

</script>

<template>
  <div class="form">
    <h1>Авторизация</h1>
    <Form @submit="submitForm" :validation-schema="schema">
      <Field class="form-input input" v-model="loginForm.fullName" type="text" name="name" placeholder="Введите Имя"/>
      <ErrorMessage class="form-error" name="name"/>
      <Field class="form-input input" v-model="loginForm.email" type="email" name="email" placeholder="Введите почту"/>
      <ErrorMessage class="form-error" name="email"/>
      <Field class="form-input input" v-model="loginForm.password" type="password" name="password"
             placeholder="Введите пароль"/>
      <ErrorMessage class="form-error" name="password"/>
      <button class="form-button btn" type="submit">
        Авторизация
      </button>
      <NuxtLink to="/register">Зарегистрироваться</NuxtLink>
    </Form>
  </div>
</template>

<style lang="scss">
.form {
  width: fit-content;
  margin: auto;
  border-radius: 8px;
  border: 1px solid white;
  padding: 15px;
  @media(max-width: 767px) {
    width: 100%;
  }

  h1 {
    text-align: center;
    padding-bottom: 15px;
  }

  &-input {
    margin-bottom: 15px;
  }

  &-button {
    margin: 0 auto;
  }

  &-error {
    color: red;
    text-align: center;
    display: block;
    padding-bottom: 10px;
  }

  a {
    font-size: 17px;
    color: black;
    display: block;
    padding: 15px 0 0 0;
  }
}
</style>