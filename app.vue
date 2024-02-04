<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const metaItems = computed(() => {
  let staticItems = [{ name: "description", content: "My amazing site." }];
  //merge with head.meta
  return [...staticItems, ...head.value.meta];
});

const linkItems = computed(() => {
  let staticItems = [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ];
  //merge with head.link
  return [...staticItems, ...head.value.link];
});
useHead({
  titleTemplate: "%s | App-Name",
  meta: metaItems.value,
  link: linkItems.value,
});
defineOgImageComponent("NuxtSeo", {
  colorMode: "dark",
});
</script>
