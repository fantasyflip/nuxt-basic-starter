<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

useHead({
  titleTemplate: "%s | App-Name",
  meta: [{ name: "description", content: "My amazing site." }],
});
defineOgImageComponent("NuxtSeo", {
  colorMode: "dark",
});

const route = useRoute();
const { locale } = useI18n();
watch(
  () => route.params.locale,
  (newLocale, oldLocale) => {
    if (newLocale !== oldLocale) {
      locale.value = newLocale as string;
    }
  },
  { immediate: true }
);
</script>
