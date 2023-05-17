<template>
  <div class="w-full bg-gray-200 p-1 rounded-4 cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
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