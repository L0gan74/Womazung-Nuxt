<script setup lang="ts">

import axios from "axios";
import * as yup from "yup";
import {Form, Field, ErrorMessage} from 'vee-validate';

const router = useRouter()

type FormUsers = {
  fullName: string,
  email: string,
  password: string
}

const registerForm = ref<FormUsers>({
  fullName: '',
  email: '',
  password: ''
})

const schema = yup.object({
  name: yup.string().required("Введите Имя").min(3),
  email: yup.string().required("Введите Почту").email(),
  password: yup.string().required("Введите Пароль").min(10),
});

const submitForm = () => {
  axios.post<FormUsers>(`https://30fc9ac5f1c540d7.mokky.dev/register`, registerForm.value)
      .then(response => {
        router.push('/login')
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
    <h1>Регистрация</h1>
    <Form @submit="submitForm">
      <Field class="form-input input" v-model="registerForm.fullName" type="text" name="name" placeholder="Введите Имя"/>
      <ErrorMessage class="form-error" name="name"/>
      <Field class="form-input input" v-model="registerForm.email" type="email" name="email" placeholder="Введите почту"/>
      <ErrorMessage class="form-error" name="email"/>
      <Field class="form-input input" v-model="registerForm.password" type="password" name="password" placeholder="Введите пароль"/>
      <ErrorMessage class="form-error" name="password"/>
      <button class="form-button btn" type="submit">
        Зарегистрироваться
      </button>
      <NuxtLink to="/login">Авторизация</NuxtLink>
    </Form>
  </div>
</template>