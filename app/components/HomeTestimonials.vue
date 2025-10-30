<script setup lang="ts">
defineProps<{
  testimonials: any[]
  siteName: string
}>()
</script>

<template>
  <section class="py-16 bg-gray-100 dark:bg-gray-800">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-10">
        <UBadge :label="$t('testimonial')" color="neutral" variant="soft" />
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-3">
          {{ $t('testimonial-title') }} <span class="text-primary">{{ siteName }}</span>
        </h2>
      </div>

      <UCarousel
        v-slot="{ item }"
        :items="testimonials"
        :ui="{
          item: 'basis-full md:basis-1/2 px-2',
          arrows: {
            wrapper: 'relative',
            prev: 'absolute -top-16 right-12',
            next: 'absolute -top-16 right-0',
          },
        }"
        arrows
        class="w-full max-w-4xl mx-auto"
      >
        <UCard
          :ui="{
            base: 'h-full',
            body: { class: 'text-center flex flex-col items-center' },
          }"
        >
          <UAvatar :src="item.image" :alt="item.name" size="lg" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-1">
            {{ item.name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ item.designation }}
          </p>
          <p class="text-gray-600 dark:text-gray-300 italic">
            "{{ item.feedback }}"
          </p>
        </UCard>
      </UCarousel>
    </UContainer>
  </section>
</template>