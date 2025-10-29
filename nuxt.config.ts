// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    
    locales: [
      { code: 'en', file: 'en-US.ts' },
      //{ code: 'fr', file: 'fr-FR.ts' }
    ],
    defaultLocale: 'en',
    
  }
});