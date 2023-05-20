<template>
  <nav class="border-b-[1px] border-b-gray-200">
    <div class="container flex gap-4 items-center p-1">
      <h2 class="text-light ">ECommerce test</h2>
      <ul class="flex gap-1 items-center">
        <li >
          <NuxtLink class="text-light !text-1" :to="{name:'HOME'}">
            Home
          </NuxtLink>
        </li>
        <li >
          <NuxtLink class="text-light !text-1" :to="{name:'POSTS'}">
            Posts
          </NuxtLink>
        </li>
        <li >
          <NuxtLink class="text-light !text-1" :to="{name:'USERS'}">
            Users
          </NuxtLink>
        </li>
        <li >
          <NuxtLink class="text-light !text-1" :to="{name:'PRODUCTS'}">
            Products
          </NuxtLink>
        </li>
      </ul>
      <p class="ml-auto">
        <NuxtLink class="text-light !text-1" :to="{name:'CART'}">
          Cart
        </NuxtLink>
      </p>
    </div>
  </nav>
</template>

<script lang="ts" setup>



</script>

<style scoped>

</style>