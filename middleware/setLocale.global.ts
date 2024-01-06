export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp();

  const validLocales =
    nuxtApp.vueApp.config.globalProperties.$i18n.availableLocales;

  let locale = to.params.locale as string;

  if (!validLocales.includes(locale)) {
    const headers = useRequestHeaders();
    const lang = headers["accept-language"]?.split("-")[0];

    if (lang && validLocales.includes(lang)) {
      locale = lang;
    } else {
      locale = nuxtApp.vueApp.config.globalProperties.$i18n
        .fallbackLocale as string;
    }

    const newPath = "/" + locale + to.fullPath;

    return newPath;
  }
});
