<template>
  <div class="product-card">
    <nuxt-img :src="image" />
    <div class="mt-1 ">
      <p>{{name}}</p>
      <p class="my-0.5">{{description}}</p>
    </div>
    <div class="flex justify-between items-center">
      <p>Price: {{price}}$</p>
      <p>Available: {{available}}</p>
    </div>
    <button @click="addToCart" class="btn btn-green mt-1">
      Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "~/composables/useStore";

interface IProduct {
  id:number,
  name:string
  description:string,
  price:number
  available:number
  image:string
}
const props=defineProps<IProduct>()
const {cartStore}=useCartStore()

const addToCart = () => {
  cartStore.addToCart(props.id)
}



if(process.client){
  cartStore.$subscribe(()=>{
    localStorage.setItem('x_cart_x',JSON.stringify(cartStore.cartList))
  })
}



</script>

<style scoped>

</style>