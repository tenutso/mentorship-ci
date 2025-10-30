<script setup lang="ts">
import BlogPostCard from './BlogPostCard.vue'

defineProps<{
  posts: any[]
}>()
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-10">
        <UBadge :label="$t('blogs')" color="neutral" variant="soft" />
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-3">
          {{ $t('learn-more-empower-yourself') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id">
          <BlogPostCard :post="post" />
        </div>
      </div>
    </UContainer>
  </section>
</template>