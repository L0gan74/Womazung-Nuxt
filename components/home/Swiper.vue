<script>

import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};

</script>

<template>
  <swiper :pagination="{
      clickable: true,
    }" :modules="modules" :grabCursor="true" class="receipts-swiper">
    <swiper-slide>
      <div class="receipts-text">
        <h1>
          Новые поступления
          в этом сезоне
        </h1>
        <p class="receipts-text__description">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
        <NuxtLink class="receipts-text__link btn" to="/shop">
          Открыть магазин
        </NuxtLink>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="receipts-text">
        <h1>
          Новые поступления
          в этом сезоне
        </h1>
        <p class="receipts-text__description">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
        <NuxtLink class="receipts-text__link btn" to="/shop">
          Открыть магазин
        </NuxtLink>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="receipts-text">
        <h1>
          Новые поступления
          в этом сезоне
        </h1>
        <p class="receipts-text__description">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
        <NuxtLink class="receipts-text__link btn" to="/shop">
          Открыть магазин
        </NuxtLink>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">

</style>