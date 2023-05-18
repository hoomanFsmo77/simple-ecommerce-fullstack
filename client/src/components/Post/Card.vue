<template>
  <div class="card">
    <div class="flex items-center gap-1 mb-1">
      Title: <p>{{title}}</p>
    </div>
    <div >
      Description: <p>{{body}}</p>
    </div>
    <div class="flex gap-1 mt-1">
      <PostDelete :id="id"/>
      <PostEdit :id="id"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props=defineProps<{
  title:string,
  body:string,
  id:number
}>()


</script>

<style scoped>

</style>