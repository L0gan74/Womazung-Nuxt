<script setup lang="ts">

import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

const modal = ref<boolean>(false)
const backModal = ref<boolean>(false)

function openModal() {
  modal.value = true
  document.body.classList.add("_hidden")
}

function closeModal() {
  modal.value = false
  document.body.classList.remove("_hidden")
}

const schema = yup.object({
  name: yup.string().required("Введите Имя").min(3),
  email: yup.string().required("Введите Почту").email(),
  phone: yup.string().required("Введите Телефон").min(11),
});

function onSubmit() {
  modal.value = false
  backModal.value = true
  setTimeout(() => {
    backModal.value = false
    document.body.classList.remove("_hidden")
  }, 5000)
}

function closeBackModal() {
  backModal.value = false
  document.body.classList.remove("_hidden")
}


</script>

<template>
  <header class="header">
    <NuxtImg src="/img/logo.svg" width="139"/>
    <nav class="nav">
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
    </nav>
    <div class="nav-right">
      <button type="button" @click="openModal">
        <svg width="14.447693" height="14.451538" viewBox="0 0 14.4477 14.4515" fill="none"
             xmlns="http://www.w3.org/2000/svg"
        >
          <defs/>
          <path id="Vector"
                d="M13.746 1.88666L11.8528 0L7.92114 3.92519L9.44531 5.49933C9.18988 5.95277 8.63562 6.82143 7.6911 7.76599C6.7464 8.71069 5.8714 9.27122 5.41364 9.53076L3.87036 8.00714L0 11.8545L1.88287 13.7498C2.6026 14.4696 3.69769 14.6561 4.60791 14.214C5.99695 13.5394 8.0932 12.2946 10.192 10.1958C12.2908 8.09705 13.5356 6.00076 14.2102 4.61176C14.3701 4.28261 14.4477 3.9294 14.4477 3.57845C14.4478 2.95872 14.2056 2.34616 13.746 1.88666ZM13.1955 4.11885C12.5587 5.42998 11.3823 7.41017 9.39435 9.3981C7.40643 11.3861 5.42621 12.5625 4.11511 13.1992C3.63708 13.4314 3.06061 13.3321 2.68195 12.9534L1.59521 11.8595L3.87317 9.59512L5.18787 10.8931L5.53961 10.7364C5.5968 10.711 6.95721 10.0954 8.48889 8.56367C10.0216 7.03099 10.6244 5.68207 10.6493 5.62538L10.8018 5.27835L9.50452 3.93857L11.8536 1.59331L12.9489 2.68478C13.3284 3.06482 13.4276 3.64104 13.1955 4.11885Z"
                fill="#6E9C9F" fill-opacity="1.000000" fill-rule="nonzero"/>
        </svg>
        +7 (495) 823-54-12
      </button>
      <NuxtLink class="basket" to="/basket">
        <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clip4_500">
              <rect id="shopping-bags 1" width="24.000000" height="24.000000" fill="white" fill-opacity="0"/>
            </clipPath>
          </defs>
          <rect id="shopping-bags 1" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0"/>
          <g clip-path="url(#clip4_500)">
            <path id="Vector"
                  d="M23.8454 8.2243C23.7281 8.10907 23.5642 8.05443 23.4012 8.07625L17.0343 8.07625L17.0343 5.26295C17.0343 2.48259 14.7804 0.228699 12.0001 0.228699C9.21973 0.228699 6.96582 2.48259 6.96582 5.26295L6.96582 8.07625L0.598877 8.07625C0.421143 8.07625 0.24353 8.07625 0.154663 8.2243C0.0352783 8.33902 -0.0200806 8.5051 0.0065918 8.66852L2.2276 20.81C2.5379 22.5037 4.00037 23.7431 5.72198 23.7713L18.278 23.7713C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66852C24.0201 8.5051 23.9647 8.33902 23.8454 8.2243ZM8.15027 5.26295C8.15027 3.13681 9.8739 1.41324 12 1.41324C14.1262 1.41324 15.8497 3.13681 15.8497 5.26295L15.8497 8.07625L8.15027 8.07625L8.15027 5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868L5.72198 22.5868C4.58209 22.5759 3.61163 21.7547 3.41217 20.6323L1.30957 9.26079L22.6904 9.26079L20.5879 20.6323Z"
                  fill="#000000" fill-opacity="1.000000" fill-rule="nonzero"/>
            <path id="Vector"
                  d="M16.442 15.0354C16.7691 15.0354 17.0342 14.7702 17.0342 14.4431L17.0342 12.6663C17.0342 12.3392 16.7691 12.074 16.442 12.074C16.1149 12.074 15.8497 12.3392 15.8497 12.6663L15.8497 14.4431C15.8497 14.7702 16.1149 15.0354 16.442 15.0354Z"
                  fill="#000000" fill-opacity="1.000000" fill-rule="nonzero"/>
            <path id="Vector"
                  d="M7.55798 15.0354C7.88507 15.0354 8.15021 14.7702 8.15021 14.4431L8.15021 12.6663C8.15021 12.3392 7.88507 12.074 7.55798 12.074C7.23083 12.074 6.9657 12.3392 6.9657 12.6663L6.9657 14.4431C6.9657 14.7702 7.23083 15.0354 7.55798 15.0354Z"
                  fill="#000000" fill-opacity="1.000000" fill-rule="nonzero"/>
          </g>
        </svg>

      </NuxtLink>
    </div>
  </header>
  <div class="modal" v-if="modal">
    <div class="modal-wrapper">
      <Form @submit="onSubmit" :validation-schema="schema" class="modal-wrapper__form">
        <button class="modal-wrapper__form-close" type="button" @click="closeModal">
          <NuxtImg src="/img/close.svg" alt="close"/>
        </button>
        <h3>Заказать обратный звонок</h3>
        <Field type="text" name="name" placeholder="Имя"/>
        <ErrorMessage name="name"/>
        <Field type="email" name="email" placeholder="E-mail"/>
        <ErrorMessage name="email"/>
        <Field type="tel" name="phone" placeholder="Телефон"/>
        <ErrorMessage name="phone"/>
        <button class="modal-wrapper__form-submit" type="submit">
          Заказать звонок
        </button>
      </Form>
    </div>
  </div>
  <div class="modal" v-if="backModal">
    <div class="modal-wrapper _back">
      <h3>Отлично! Мы скоро вам перезвоним.</h3>
      <button @click="closeBackModal" type="button">Закрыть</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 1110px;
  margin: 0 auto;
  padding: 50px 0 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  a {
    color: black;
    font-size: 15px;
    line-height: 140%;
  }
}

.nav {
  display: flex;
  gap: 45px;

  a {
    transition: .2s linear;

    &:hover {
      color: rgb(110 156 159 / 58%);
    }

    &._active {
      color: rgb(110, 156, 159);
      font-weight: 700;
    }
  }

  &-right {
    display: flex;
    align-items: center;
    gap: 67px;

    button {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
}

.modal {
  background: rgba(110, 156, 159, 0.631372549);
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  &-wrapper {
    width: 491px;
    padding: 70px;
    background: white;
    position: relative;

    &._back {
      width: auto;

      button {
        border: 1px solid rgb(110, 156, 159);
        width: 168px;
        height: 68px;
        color: rgb(110, 156, 159);
        font-size: 17px;
        font-weight: 400;
        line-height: 138.9%;
        margin: 35px auto 0;
      }
    }

    &__form {
      text-align: center;

      &-close {
        position: absolute;
        right: 32px;
        top: 32px;
      }

      h3 {
        padding-bottom: 35px;
      }

      input {
        color: rgb(134, 134, 134);
        font-size: 17px;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 35px;
        padding-bottom: 15px;
        border: 0;
        border-bottom: 1px solid black;
        width: 100%;
        outline: none;
      }

      span {
        display: block;
        padding-bottom: 15px;
      }

      &-submit {
        background: rgb(110, 156, 159);
        width: 100%;
        height: 68px;
        color: white;
        font-size: 17px;
        font-weight: 400;
        line-height: 138.9%;
      }
    }
  }
}

</style>