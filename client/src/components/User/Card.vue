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
    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props=defineProps<{
  username:string,
  lastname:string,
  firstname:string
}>()


</script>

<style scoped>

</style>