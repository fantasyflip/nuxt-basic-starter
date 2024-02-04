<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "%s | App-Name",
  meta: [{ name: "description", content: "My amazing site." }],
});
defineOgImageComponent("NuxtSeo", {
  colorMode: "dark",
});
</script>
