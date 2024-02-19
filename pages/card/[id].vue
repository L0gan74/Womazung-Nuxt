<script setup lang="ts">
import axios from "axios";
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import type {ItemIdCard} from "~/interface/Items";

const route = useRoute()

const item = ref(null)

const fetchItem = async () => {
  try {
    const {data} = await axios.get<ItemIdCard>(`https://30fc9ac5f1c540d7.mokky.dev/items/${(route.params as {
      id: string
    }).id}`)
    item.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchItem)

</script>

<template>
  <Breadcrumb title="Магазин" category="Магазин"/>
  <h1>wef</h1>
  <h2>{{route.params.id}}</h2>

</template>

<style scoped lang="scss">

</style>