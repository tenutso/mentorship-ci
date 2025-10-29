<script setup lang="ts">
const props = defineProps<{
  categories: any[]
  catCount: any[]
}>()

const categoryCount = (id: Number) => {
  return props.catCount.find((item: any) => item.id === id) || 0;
}

</script>

<template>
  <section class="py-16 bg-primary-50 dark:bg-primary-950">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-10">
        <UBadge :label="$t('categories')" color="gray" variant="soft" />
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-3">
          {{ $t('browse-mentors-by-categories') }}
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="category in categories" :key="category.id">
          <NuxtLink :to="`/mentors?category=${category.slug}`">
            <UCard
              :ui="{
                body: { padding: 'px-4 py-6 sm:p-6', class: 'text-center' },
                base: 'transition-all hover:shadow-lg hover:-translate-y-1',
              }"
            >
              <div
                class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-4"
              >
                <UIcon :name="category.icon" class="text-2xl text-primary" />
              </div>
              <p class="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {{ category.name }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ categoryCount(category.id).cnt }} {{ $t('mentors') }}
              </p>
            </UCard>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>