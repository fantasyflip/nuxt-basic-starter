// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // NUXT-OG-IMAGE: .env -> NUXT_PUBLIC_SITE_URL
  modules: ["@nuxtjs/tailwindcss", "nuxt-og-image", "@nuxtjs/color-mode"],
});
