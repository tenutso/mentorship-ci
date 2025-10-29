<script setup lang="ts">
defineProps<{
  mentor: Record<string, any>
}>()
</script>

<template>
  <UCard
    :ui="{
      base: 'overflow-hidden transition-all hover:shadow-lg',
      body: { padding: 'p-0' }, // No padding on body, we control it
    }"
  >
    <NuxtLink :to="`/mentor/${mentor.id}`">
      <div class="relative">
        <img
          :src="mentor.image"
          :alt="mentor.name"
          class="w-full h-64 object-cover"
        >
        <div
          class="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm font-bold"
        >
          ${{ mentor.price }}/hr
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {{ mentor.name }}
        </h3>
        <p class="text-primary text-sm truncate">
          {{ mentor.designation }}
        </p>
        <div class="flex items-center gap-1 mt-2 text-sm text-gray-500">
          <UIcon name="i-heroicons-star-solid" class="text-yellow-400" />
          <span class="font-bold text-gray-700 dark:text-gray-300">{{ mentor.rating }}</span>
          <span>({{ mentor.reviews }} reviews)</span>
        </div>
      </div>
    </NuxtLink>
  </UCard>
</template>