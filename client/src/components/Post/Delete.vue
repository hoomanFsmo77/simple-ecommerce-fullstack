<template>
  <button @click="deleteHandler(id)" class="btn btn-red">
    Delete
  </button>
</template>

<script setup lang="ts">
const props=defineProps<{
  id:number
}>()
const {deleteHandler}=useDeletePost()
</script>

<style scoped>

</style>