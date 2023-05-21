<template>
  <template v-if="cartLength===0">
    <div class="p-2">
      <h2 class="text-center text-light">Cart is empty.</h2>
    </div>
  </template>
  <template v-else>
    <div class="p-2">
      <h2 class="text-center text-light">Cart List</h2>
      <div class="mt-2">
        <div class="mb-1 flex flex-row gap-2 items-center border-b-gray-200 border-b-[1px] last:border-b-[0px] p-0.5 [&_*]:text-light">
          <p>id</p><p>image</p><p class="ml-1">name</p><p class="ml-21">price</p><p class="ml-2">quantity</p><p class="ml-11">subtotal</p><p>action</p>
        </div>
        <CartItem
            v-for="item in cartList"
            :id="item.id"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :image="item.image"
            :count="item.count"
            :available="item.available"
        />
        <div class="flex justify-between items-center">
          <h3 class="mt-2 text-light">Total Price: {{totalPrice}}$</h3>
          <button @click="clearCart" class="btn btn-blue">
            clear cart
          </button>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
definePageMeta({name:'CART'})
useHead({
  bodyAttrs:{
    style:'background-color:#333'
  }
})
const {cartLength,cartList,totalPrice,cartStore}=useCartStore()
const clearCart = () => {
  cartStore.clearCart()
}
</script>

<style scoped>

</style>