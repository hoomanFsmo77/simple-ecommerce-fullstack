<template>
  <section id="home">
    <div class="container p-2 ">
      <h1 class="text-center text-light">Home Page</h1>
      <p class="text-center text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate illo ipsam quia, quo repudiandae rerum voluptatum! Adipisci aliquid debitis delectus, harum laborum possimus quod sapiente similique sint vel voluptatum?</p>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({name:'HOME'})
useHead({
  bodyAttrs:{
    style:'background-color:#333'
  }
})
</script>

<style scoped>

</style>