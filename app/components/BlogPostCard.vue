<script setup lang="ts">
defineProps<{
  post: Record<string, any>
}>()
</script>

<template>
  <UCard
    :ui="{
      base: 'overflow-hidden transition-all hover:shadow-lg',
      body: { padding: 'p-0' },
    }"
  >
    <NuxtLink :to="post.slug">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-48 object-cover"
      >
      <div class="p-4">
        <p class="text-primary text-sm font-semibold mb-1">
          {{ post.category }}
        </p>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white truncate mb-2">
          {{ post.title }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ post.date }}
        </p>
      </div>
    </NuxtLink>
  </UCard>
</template>