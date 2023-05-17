<template>
  <button @click="editHandler(id)" class="btn btn-blue">
    Edit
  </button>
  <Modal :open="modalFlag" @close="closeModal">
    <h4 class="text-center">Edit Post</h4>
    <IBox placeholder="Title" class="!w-full"  size="md" :value="postData.title" v-model="postData.title"/>
    <IBox placeholder="Body" class="!w-full" size="md" :value="postData.body" v-model="postData.body"/>
    <button class="btn btn-blue" @click="confirm(id)">
      Confirm
    </button>
  </Modal>
</template>

<script setup lang="ts">
const props=defineProps<{id:number}>()
const {editHandler,modalFlag,closeModal,postData,confirm}=useEditPost()
</script>

<style scoped>

</style>