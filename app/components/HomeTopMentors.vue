<script setup lang="ts">
// We'll create a simple MentorCard component for this
import MentorCard from './MentorCard.vue'

defineProps<{
  mentors: any[]
  trans: (key: string) => string
}>()
</script>

<template>
  <UContainer as="section" class="py-16">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      {{ trans('discover-the-worlds-top-mentors') }}
    </h2>

    <UCarousel
      v-slot="{ item }"
      :items="mentors"
      :ui="{
        item: 'basis-full sm:basis-1/2 lg:basis-1/4 px-2',
        arrows: {
          wrapper: 'relative',
          prev: 'absolute -top-14 right-12',
          next: 'absolute -top-14 right-0',
        },
      }"
      arrows
      class="w-full"
    >
      <MentorCard :mentor="item" />
    </UCarousel>
  </UContainer>
</template>