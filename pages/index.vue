<template>
  <div class="flex gap-2">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      class="rounded bg-blue-500 p-2 text-white"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</NuxtLink
    >
  </div>
  <p>{{ $t("helloworld") }}</p>
  <br />
  <button
    class="rounded bg-white px-4 py-2 text-black dark:bg-black dark:text-white"
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.value = 'light')
        : ($colorMode.value = 'dark')
    "
  >
    {{ $colorMode.value === "dark" ? "change to light" : "change to dark" }}
  </button>
</template>

<script lang="ts" setup>
useHead({
  title: "Index",
});

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
