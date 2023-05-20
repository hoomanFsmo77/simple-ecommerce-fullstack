<template>
    <section id="product">
      <div class="container p-2">
        <h2 class="text-center text-light">Products</h2>
        <div class="grid grid-cols-4 mt-3 gap-1" v-if="productFetchFlag">
          <ProductCard
             v-for="item in productList"
              :id="item.id"
              :name="item.name"
              :description="item.description"
              :price="item.price"
              :available="item.available"
              :image="item.image"
          />
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
import {useProductStore} from "~/composables/useStore";
const {productList,productFetchFlag,productStore}=useProductStore()
definePageMeta({name:'PRODUCTS'})
useHead({
  bodyAttrs:{
    style:'background-color:#333'
  }
})
onMounted(()=>{
  productStore.setProductList()
})

</script>

<style scoped>

</style>