<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const show = computed(() => y.value > 300) // Show after 300px scroll

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-300"
    leave-to-class="opacity-0"
  >
    <UButton
      v-if="show"
      icon="i-heroicons-arrow-up"
      size="lg"
      :ui="{ rounded: 'rounded-full' }"
      class="fixed bottom-4 right-4 z-50 shadow-lg"
      @click="scrollToTop"
    />
  </Transition>
</template>