// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // NUXT-OG-IMAGE: .env -> NUXT_PUBLIC_SITE_URL
  // NUXT-i18n: .env -> NUXT_PUBLIC_I18N_BASE_URL
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_except_default",
        defaultLocale: "de",
        locales: [
          {
            code: "en",
            name: "English",
            language: "en-US",
            file: "en-US.json",
            isCatchallLocale: true,
          },
          {
            code: "de",
            name: "Deutsch",
            language: "de-DE",
            file: "de-DE.json",
          },
        ],
        langDir: "locales",
        lazy: true,
        vueI18n: "./i18n.config.ts",
      },
    ],
    "nuxt-og-image",
    [
      "@nuxtjs/color-mode",
      {
        preference: "system", // default value of $colorMode.preference
        fallback: "dark", // fallback value if not system preference found
        classSuffix: "",
        classPrefix: "",
        storageKey: "theme",
      },
    ],
    "@vueuse/nuxt",
    "@nuxt/eslint",
  ],
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      i18n: {
        baseUrl: process.env.NUXT_PUBLIC_I18N_BASE_URL || "https://example.com",
      },
    },
  },

  compatibilityDate: "2025-03-14",
});
