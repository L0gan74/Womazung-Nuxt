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
        router.push('/')
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
      <Field v-model="loginForm.fullName" type="text" name="name" placeholder="Введите Имя"/>
      <ErrorMessage name="name"/>
      <Field v-model="loginForm.email" type="email" name="email" placeholder="Введите почту"/>
      <ErrorMessage name="email"/>
      <Field v-model="loginForm.password" type="password" name="password" placeholder="Введите пароль"/>
      <ErrorMessage name="password"/>
      <button type="submit">
        Авторизация
      </button>
      <NuxtLink to="/register">Зарегистрироваться</NuxtLink>
    </Form>
  </div>
</template>

<style lang="scss">
.form {
  width: 600px;
  height: auto;
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

  input {
    width: 100%;
    height: 40px;
    padding-left: 15px;
    margin-bottom: 15px;
    color: black;
    font-size: 16px;
    outline: none;
    border-radius: 8px;

    &::placeholder {
      color: black;
    }
  }

  button {
    width: 200px;
    margin: 0 auto;
    height: 48px;
    border-radius: 4px;
    background: #0fae96;
    color: #ecf1f0;
    font-size: 17px;
    border: 0;
    display: block;
  }

  a {
    font-size: 17px;
    color: black;
    display: block;
    padding: 15px 0 0 0;
  }
}
</style>