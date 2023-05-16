<template>
  <section class="grid-cols-2 grid">
    <div class="p-3">
      <form @submit.prevent="submitHandler">
        <h3 class="text-center">Login to Ecommerce</h3>
        <p class="break-all mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis exercitationem expedita facere facilis inventore natus omnis recusandae tempora voluptatum?</p>
        <IBox v-model="userInfo.username" type="text" size="md" placeholder="username"/>
        <IBox v-model="userInfo.password" type="password" size="md" placeholder="password"/>
        <p class="text-red-400 mb-1">{{message}}</p>
        <div class="flex items-center gap-1">
          <button type="submit" class="btn">
            login
          </button>
          <p>
            Don't you have account?
            <NuxtLink :to="{name:'SIGN'}">sign in</NuxtLink>
          </p>
        </div>

      </form>
    </div>
    <div>
      <nuxt-img width="550" src="/login.svg" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({name:'LOGIN',layout:false});
const userInfo=reactive({
  username:'' as string,
  password:'' as string
})
const isLogin=useState('isLogin')
const userData:any=useState('userData',()=>null)
const message=ref<string>('')
const submitHandler = async () => {
  message.value=''
  try {
    const userInformation=await $fetch('/api/login',{
      method:'POST',
      body:{
        username:userInfo.username,
        password:userInfo.password
      }
    })
    userData.value=userInformation
    isLogin.value=true
    navigateTo({name:'HOME'})
  }catch (err) {
    isLogin.value=false
    message.value='Error in server! please try again.'
  }
}
</script>

<style scoped>

</style>