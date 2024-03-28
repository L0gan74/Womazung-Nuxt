<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";

import {ErrorMessage, Field, Form} from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Введите Имя").min(3),
  email: yup.string().required("Введите Почту").email(),
  tel: yup.string().required("Введите Телефон").min(10),
});

function onSubmit() {
  console.log("отправлена")
}

</script>

<template>
  <div class="contacts">
    <Breadcrumb title="Контакты" category="Контакты"/>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577332.6745166027!2d36.72484043383416!3d55.5810261639416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1709017417462!5m2!1sru!2sru"
        height="476" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="contacts-text">
      <div class="contacts-text__contact">
        <p>Телефон</p>
        <p>+7 (495) 823-54-12</p>
      </div>
      <div class="contacts-text__contact">
        <p>E-mail</p>
        <p>info@sitename.com</p>
      </div>
      <div class="contacts-text__contact">
        <p>Адрес</p>
        <p>г. Москва, 3-я улица Строителей, 25</p>
      </div>
    </div>
    <div class="contacts-form">
      <h3>Напишите нам</h3>
      <Form @submit="onSubmit" :validation-schema="schema">
        <Field class="input" type="text" name="name" placeholder="Имя"/>
        <ErrorMessage name="name"/>
        <Field class="input" type="email" name="email" placeholder="E-mail"/>
        <ErrorMessage name="email"/>
        <Field class="input" type="tel" name="tel" placeholder="Телефон"/>
        <ErrorMessage name="tel"/>
        <textarea class="textarea" placeholder="Сообщение*"></textarea>
        <button class="btn" type="submit">
          Отправить
        </button>
      </Form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  margin: 100px 0;
  @media(max-width: 992px) {
    margin: 40px 0 50px;
  }

  iframe {
    width: 100%;
    @media(max-width: 992px){
      height: 350px;
    }
  }

  &-text {
    display: flex;
    gap: 98px;
    padding: 130px 0;
    flex-wrap: wrap;
    @media(max-width: 992px){
      gap: 25px;
      padding: 40px 0;
    }

    p {
      font-weight: 500;

      &:first-child {
        font-size: 17px;
        padding-bottom: 19px;
      }

      &:last-child {
        font-size: 20px;
      }
    }
  }

  &-form {
    h3 {
      padding-bottom: 62px;
    }

    form {
      input {
        margin-bottom: 35.5px;
      }

      textarea {
        margin-bottom: 35.5px;
        padding-bottom: 10px;
      }
    }
  }
}
</style>