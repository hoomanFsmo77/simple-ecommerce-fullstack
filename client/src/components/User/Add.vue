<template>
  <div class="my-2 w-[200px]">
    <IBox placeholder="username" class="!w-full"  size="md" :value="newUserData.username" v-model="newUserData.username"/>
    <IBox placeholder="firstname" class="!w-full"  size="md" :value="newUserData.firstname" v-model="newUserData.firstname"/>
    <IBox placeholder="lastname" class="!w-full"  size="md" :value="newUserData.lastname" v-model="newUserData.lastname"/>
    <IBox placeholder="password" class="!w-full" type="password" size="md" :value="newUserData.password" v-model="newUserData.password"/>
    <button @click="addNewUser" class="btn btn-green">
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
const newUserData=reactive({
  username:'',
  firstname:'',
  lastname:'',
  password:''
})

const addNewUser = async () => {
  try {
    const createUserRequest=await $fetch('http://localhost:3000/api/users',{
      method:'POST',body:JSON.stringify(newUserData)
    })
    newUserData.username=''
    newUserData.firstname=''
    newUserData.lastname=''
    newUserData.password=''
    refreshNuxtData('userFetchData')
  }catch (err) {
    console.log(err)
  }
}

</script>

<style scoped>

</style>