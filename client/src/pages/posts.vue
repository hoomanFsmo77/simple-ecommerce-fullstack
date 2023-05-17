<template>
    <section>
      <div class="container p-3 " v-if="!pending">
        <h1 class="text-center mb-2 text-light">Posts</h1>
        <PostAdd />
        <div class="grid grid-cols-3 gap-1.5">
          <PostCard v-for="item in postsData"
                    :title="item.title"
                    :body="item.body"
                    :id="item.id"
          />
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({name:'POSTS'})
useHead({
  bodyAttrs:{
    style:'background-color:#333'
  }
})
const {data:postsData,pending}=await useAsyncData('postsFetchData',()=>$fetch('http://localhost:3000/api/posts'))
</script>

<style scoped>

</style>