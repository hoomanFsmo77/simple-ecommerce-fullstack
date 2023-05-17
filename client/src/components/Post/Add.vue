<template>
  <IBox size="md"  v-model="newPostData.title" placeholder="Title" />
  <IBox size="md" v-model="newPostData.body" placeholder="Body" />
  <button @click="addPostHandler" class="btn btn-green mb-2">
    Add
  </button>
</template>

<script setup lang="ts">
const {addPostHandler,newPostData}=useAddPost()

</script>

<style scoped>

</style>