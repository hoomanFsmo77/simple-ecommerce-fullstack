<template>
  <client-only>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="open" class="modal-wrapper" @click.self="close">
          <div  class="modal">
            <slot />
          </div>
        </div>
      </Transition>

    </Teleport>
  </client-only>
</template>

<script setup lang="ts">
const props=defineProps<{open:boolean}>()
const emit=defineEmits<{
  (e:'close'):void
}>()
const close = () => emit('close')
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
  transition: all 300ms linear;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
  visibility: hidden;

}
.fade-enter-to,.fade-leave-from {
  opacity: 1;
  visibility: visible;
}
</style>