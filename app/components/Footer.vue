<script setup lang="ts">
// Define the props we expect. You'll fetch this data in your layout.
defineProps<{
  
  pages: any[]
}>()

const { settings, siteFont } = useSettingsStore();

// Map your old icon classes to new Nuxt UI/Iconify names
const socialIcons: Record<string, string> = {
  facebook: 'i-simple-icons-facebook',
  twitter: 'i-simple-icons-x',
  linkedin: 'i-simple-icons-linkedin',
  instagram: 'i-simple-icons-instagram',
}
</script>

<template>
  <footer class="pt-16 border-t border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
        <div class="md:col-span-5">
          <img
            :src="settings.logo"
            alt="Logo"
            class="h-10 w-auto mb-4"
          >
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            {{ settings.footerAbout }}
          </p>
          <div class="flex items-center gap-3 mt-6">
            <template v-for="(icon, key) in socialIcons" :key="key">
              <UButton
                v-if="settings[key]"
                :to="settings[key]"
                target="_blank"
                :icon="icon"
                variant="ghost"
                color="neutral"
                size="xl"
                :padded="false"
              />
            </template>
          </div>
        </div>

        <div class="hidden md:block md:col-span-1" />

        <div class="md:col-span-3">
          <h3 class="text-sm font-semibold uppercase text-gray-900 dark:text-white">
            {{ $t('services') }}
          </h3>
          <ul class="mt-4 space-y-2">
            <li><NuxtLink to="/mentors" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{{ $t('mentors') }}</NuxtLink></li>
            
            <li v-if="settings.enable_blog">
              <NuxtLink to="/blogs" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{{ $t('blogs') }}</NuxtLink>
            </li>
            <li v-if="settings.enable_faq">
              <NuxtLink to="/faqs" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{{ $t('faqs') }}</NuxtLink>
            </li>
            
            <li><NuxtLink to="/contact" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{{ $t('contact') }}</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <template v-if="pages?.length">
            <h3 class="text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {{ $t('pages') }}
            </h3>
            <ul class="mt-4 space-y-2">
              <li v-for="page in pages" :key="page.slug">
                <NuxtLink :to="`/page/${page.slug}`" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  {{ page.title }}
                </NuxtLink>
              </li>
            </ul>
          </template>
        </div>
      </div>

      <div class="py-6 border-t border-gray-200 dark:border-gray-800">
        <p class="text-center text-sm text-gray-500 dark:text-gray-400">
          {{ settings.copyright }}
        </p>
      </div>
    </UContainer>
  </footer>
</template>