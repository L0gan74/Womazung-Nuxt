<script setup lang="ts">

import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import * as yup from "yup";
import {inject} from "vue";

const router = useRouter()

const schema = yup.object({
  name: yup.string().required("Введите Имя").min(3),
  email: yup.string().required("Введите Почту").email(),
  tel: yup.string().required("Введите Телефон").min(10),
  country: yup.string().required("Введите Страну").min(3),
  city: yup.string().required("Введите Город").min(3),
  street: yup.string().required("Введите Улицу").min(3),
  house: yup.string().required("Введите Дом").min(3),
  apartment: yup.string().required("Введите Квартиру").min(3),
});

function onSubmit() {
  router.push('/success')
  console.log(123)
}

onMounted(() => {
  onSubmit
})

const {cartBasket, totalPrice} = inject("location")

</script>

<template>
  <div class="payment">
    <Breadcrumb title="Оформление заказа" category="Оформление заказа"/>
    <Form @submit="onSubmit" :validation-schema="schema" class="payment-wrapper">
      <div class="payment-wrapper__data">
        <h3>Данные покупателя</h3>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="text" name="name" placeholder="Введите Имя"/>
          <ErrorMessage name="name"/>
        </div>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="email" name="email" placeholder="Введите Почту"/>
          <ErrorMessage name="email"/>
        </div>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="tel" name="tel" placeholder="Введите Телефон"/>
          <ErrorMessage name="tel"/>
        </div>
        <h3>Адрес получателя</h3>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="text" name="country" placeholder="Введите Страну"/>
          <ErrorMessage name="country"/>
        </div>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="text" name="city" placeholder="Введите Город"/>
          <ErrorMessage name="city"/>
        </div>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="text" name="street" placeholder="Введите Улицу"/>
          <ErrorMessage name="street"/>
        </div>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="text" name="house" placeholder="Введите Дом"/>
          <ErrorMessage name="house"/>
        </div>
        <div class="payment-wrapper__data-input">
          <Field class="input" type="text" name="apartment" placeholder="Введите Квартиру"/>
          <ErrorMessage name="apartment"/>
        </div>
        <h3>Адрес получателя</h3>
        <textarea class="textarea" placeholder="Введите Комментарий*"></textarea>
      </div>
      <div class="payment-wrapper__order">
        <h3>Ваш заказ</h3>
        <div class="payment-wrapper__order-item">
          <h4>Товар</h4>
          <h4>Всего</h4>
        </div>
        <div class="payment-wrapper__order-item" v-for="item in cartBasket" :key="item.id">
          <h4>{{ item.name }}</h4>
          <h4>${{ item.price }}</h4>
        </div>
        <div class="payment-wrapper__order-item _last">
          <h4>Итого</h4>
          <h4>${{ totalPrice }}</h4>
        </div>
        <h3>Способ оплаты</h3>
        <label class="payment-wrapper__order-label">
          <input class="payment-wrapper__order-checkbox" type="checkbox">
          <span class="payment-wrapper__order-custom"></span>
          Оплата наличными
        </label>
        <button class="btn" type="submit">Разместить заказ</button>
      </div>
    </Form>
  </div>
</template>

<style scoped lang="scss">

.payment {
  margin: 100px 0;
  @media(max-width: 992px){
    margin: 40px 0 30px;
  }

  &-wrapper {
    display: flex;
    gap: 200px;
    @media(max-width: 1200px){
      gap: 50px;
    }
    @media(max-width: 992px){
      flex-direction: column;
      gap: 25px;
    }

    &__data {
      h3 {
        padding-bottom: 47px;
      }

      &-input {
        margin-bottom: 35px;
      }

      span {
        display: block;
        padding-top: 15px;
        color: red;
        font-weight: 500;
      }
    }

    &__order {
      h3 {
        padding-bottom: 47px;
      }

      &-item {
        display: flex;
        justify-content: space-between;
        width: 255px;
        padding-bottom: 30px;

        &._last {
          margin-bottom: 80px;
          background: rgb(241, 234, 220);
          padding: 15px;
        }

        h4 {
          color: black;
          font-size: 20px;
          font-weight: 500;
          line-height: 140%;
        }
      }

      &-label {
        cursor: pointer;
        margin-bottom: 48px;
        display: block;
      }

      &-checkbox {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        z-index: -1;

        &:checked + .payment-wrapper__order-custom::before {
          transform: translate(50%, 50%) scale(1);
        }
      }

      &-custom {
        display: inline-block;
        width: 22px;
        height: 22px;
        background: white;
        box-sizing: border-box;
        border: 1px solid black;
        margin-right: 14px;
        vertical-align: sub;
        position: relative;

        &:before {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          background: black;
          position: absolute;
          transform: translate(50%, 50%) scale(0);
          transition: 0.2 ease-in;
        }
      }
    }
  }
}

</style>