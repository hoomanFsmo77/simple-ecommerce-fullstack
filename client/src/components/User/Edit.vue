<template>
  <button @click="editHandler" class="btn btn-blue">
    Edit
  </button>
  <Modal :open="modalFlag" @close="closeModal">
    <h4 class="text-center">Edit User</h4>
    <IBox placeholder="username" class="!w-full"  size="md" :value="userData.username" v-model="userData.username"/>
    <IBox placeholder="firstname" class="!w-full" size="md" :value="userData.firstname" v-model="userData.firstname"/>
    <IBox placeholder="lastname" class="!w-full" size="md" :value="userData.lastname" v-model="userData.lastname"/>
    <button class="btn btn-blue" @click="confirm">
      Confirm
    </button>
  </Modal>
</template>

<script setup lang="ts">
const props=defineProps<{
  id:number
}>()
const {editHandler,closeModal,modalFlag,confirm,userData}=useUserEdit(props)




</script>

<style scoped>

</style>