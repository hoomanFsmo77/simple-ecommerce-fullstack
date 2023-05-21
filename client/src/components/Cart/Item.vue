<template>
  <div class="mb-1 flex flex-row gap-2 items-center border-b-gray-200 border-b-[1px] last:border-b-[0px] p-0.5">
    <p class="text-light">
      {{id}}
    </p>
    <nuxt-img width="60" :src="image"/>
    <div >
      <h4 class="text-light ">
        {{name}}
      </h4>
      <p class="text-light mt-1">{{description}}</p>
    </div>
    <h5 class="text-light">
      {{price}}$
    </h5>
    <div class="flex gap-0.5 items-center">
      <button @click="increase" class="btn btn-green">
        Increase
      </button>
      <h5 class="text-light">
        {{count}}
      </h5>
      <button @click="decrease" class="btn btn-red">
        Decrease
      </button>
    </div>
    <h5 class="text-light ml-4">
      {{count*price}}$
    </h5>
    <p>
      <button @click="removeProduct" class="btn btn-red">
        Remove
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
export interface ICart {
  id:number,
  name:string
  description:string,
  price:number
  available:number
  image:string,
  count:number
}
const props=defineProps<ICart>()
const {cartStore}=useCartStore()
const increase = () => {
  cartStore.increase(props.id)
}
const decrease = () => {
  cartStore.decrease(props.id)
}
const removeProduct = () => {
  cartStore.removeProduct(props.id)
}
</script>

<style scoped>

</style>