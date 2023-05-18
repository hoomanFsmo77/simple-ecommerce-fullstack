<template>
    <section id="users">
      <div class="container p-2">
        <h2 class="text-light text-center">Users</h2>
        <UserAdd />
        <div class="div grid grid-cols-4 gap-2 mt-4" v-if="!pending">
          <UserCard
              v-for="item in usersList"
              :id="item.id"
              :username="item.username"
              :lastname="item.lastname"
              :firstname="item.firstname"
          />
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({name:'USERS'})
useHead({
  bodyAttrs:{
    style:'background-color:#333'
  }
})
const {pending,data:usersList}=await useAsyncData('userFetchData',()=>$fetch('http://localhost:3000/api/users'))


</script>

<style scoped>

</style>