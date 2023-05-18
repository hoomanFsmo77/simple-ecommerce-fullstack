<template>
  <section class="grid grid-cols-2 h-[100vh]">
    <div class="p-2.5">
      <form @submit.prevent="submitHandler">
        <h3 class="text-center">Sign in</h3>
        <p class="mt-1.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa doloribus ex exercitationem illo, in nam possimus, quaerat temporibus ut veniam. Debitis ducimus expedita laudantium maxime, quisquam ut voluptate. Consequuntur dolore eius inventore necessitatibus soluta. Esse praesentium sequi sunt.</p>
        <IBox v-model="userInfo.firstname" type="text" size="md" placeholder="firstname"/>
        <IBox v-model="userInfo.lastname" type="text" size="md" placeholder="lastname"/>
        <IBox v-model="userInfo.username" type="text" size="md" placeholder="username"/>
        <IBox v-model="userInfo.password" type="password" size="md" placeholder="password"/>
        <p class="text-red-500 mb-1">{{message}}</p>
        <div class="flex items-center gap-1">
          <button type="submit" class="btn">
            sign in
          </button>
          <p>
            Do you have account?
            <NuxtLink :to="{name:'LOGIN'}">login</NuxtLink>
          </p>
        </div>
      </form>
    </div>
    <div class="flex">
      <nuxt-img width="500" src="/sign.svg"/>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({name:'SIGN',layout:false})
useHead({
  bodyAttrs:{
    style:'background-color:#fff !important'
  }
})
const userInfo=reactive({
  firstname:'' as string,
  lastname:'' as string,
  username:'' as string,
  password:'' as string,
})
const message=ref<string>('')
const isLogin=useState('isLogin')

const submitHandler =async () => {
  message.value=''
  try {
    const signIn=await $fetch('/api/sign',{
      method:'POST',
      body:userInfo
    })
    isLogin.value=true
    return navigateTo({name:'HOME'})
  }catch (err) {
    isLogin.value=false
    message.value='All inputs are required!'
  }
}

</script>

<style scoped>

</style>