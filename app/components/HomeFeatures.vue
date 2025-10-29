<script setup lang="ts">
defineProps<{
  features: any[]
  trans: (key: string) => string
}>()
</script>

<template>
  <section class="py-16 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-10">
        <UBadge :label="trans('features')" color="gray" variant="soft" />
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-3">
          {{ trans('learn-that-new-skill-launch-that-project') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.id">
          <UCard>
            <img :src="feature.image" :alt="feature.name" class="h-16 w-auto mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ feature.name }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ feature.details }}
            </p>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>