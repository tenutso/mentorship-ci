<script setup lang="ts">
defineProps<{
  workflows: any[]
  trans: (key: string) => string
}>()

// Helper to apply the special shadow
const cardUi = (isFeatured: boolean) => ({
  shadow: isFeatured ? 'shadow-xl' : 'shadow-md',
  body: { padding: 'px-4 py-6 sm:p-6' },
  base: 'overflow-hidden transition-all hover:shadow-lg', 
})
</script>

<template>
  <UContainer as="section" class="py-16">
    <div class="max-w-2xl mx-auto text-center mb-10">
      <UBadge :label="trans('workflow')" color="gray" variant="soft" />
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-3">
        {{ trans('workflow-title') }}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="workflow in workflows" :key="workflow.id">
        <UCard :ui="cardUi(workflow.isFeatured)">
          <div class="text-center">
            <img :src="workflow.image" alt="workflow.title" class="h-20 w-auto mx-auto mb-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ workflow.title }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ workflow.details }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>