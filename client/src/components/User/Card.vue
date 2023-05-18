<template>
  <div class="card">
    <p>
      username: {{username}}
    </p>
    <p class="my-1">
      firstname: {{firstname}}
    </p>
    <p>
      lastname: {{lastname}}
    </p>
    <div class="flex gap-2 mt-1">
      <UserEdit :id="id"/>
      <UserDelete :id="id"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props=defineProps<{
  id:number,
  username:string,
  lastname:string,
  firstname:string
}>()


</script>

<style scoped>

</style>