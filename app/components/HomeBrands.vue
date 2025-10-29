<script setup lang="ts">
defineProps<{
  brands: any[]
}>()
</script>

<template>
  <section class="py-8 bg-gray-200 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
    <UContainer>
      <UCarousel
        v-slot="{ item }"
        :items="brands"
        :ui="{
          item: 'basis-1/3 sm:basis-1/5 px-4',
          container: 'flex items-center',
        }"
        :arrows="false"
        :indicators="false"
        class="w-full max-w-4xl mx-auto"
      >
        <NuxtLink :to="item.link" target="_blank" class="block">
          <img
            :src="item.logo"
            :alt="item.name"
            class="h-8 w-auto mx-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          >
        </NuxtLink>
      </UCarousel>
    </UContainer>
  </section>
</template>