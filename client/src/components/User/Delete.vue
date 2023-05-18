<template>
  <button @click="deleteHandler" class="btn btn-red">
    Delete
  </button>
</template>

<script setup lang="ts">
const props=defineProps<{
  id:number
}>()

const deleteHandler = async () => {
    try {
      const deleteReq=await $fetch(`http://localhost:3000/api/users/${props.id}`,{
        method:'DELETE'
      })
      refreshNuxtData('userFetchData')
    }catch (err) {
      console.log(err)
    }
}

</script>

<style scoped>

</style>