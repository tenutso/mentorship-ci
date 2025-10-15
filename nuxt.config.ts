// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@prisma/nuxt", "@pinia/nuxt"],
  css: [],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
});
