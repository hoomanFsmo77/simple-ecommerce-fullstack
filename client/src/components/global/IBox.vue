<template>
  <div class="my-1.5">
    <input @input="inputHandler($event)" :placeholder="placeholder" :class="[`input-${size}`]" class="input" :type="type">
  </div>
</template>

<script setup lang="ts">
const {placeholder,type,size}=defineProps<{
  size:string,
  placeholder:string,
  type:string
}>()
const emit=defineEmits<{
  (ev:'input',value:any):void,
  (ev:'update:modelValue',value:any):void
}>()

const inputHandler = (ev:InputEvent) => {
  const value=(ev.target as HTMLInputElement).value
  emit('input',value)
  emit('update:modelValue',value)
}

</script>

<style scoped>
@tailwind components;
@layer components {
  .input-sm{
    @apply px-0.4 py-0.1 text-0.9
  }
  .input-md{
    @apply px-0.5 py-0.4 text-1
  }
  .input-lg{
    @apply px-0.7 py-0.5 text-1.1
  }
}
</style>