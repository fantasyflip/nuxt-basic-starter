<template>
  <div>
    <div class="flex gap-2">
      <NuxtLink
        v-for="(loc, index) in availableLocales"
        :key="index"
        class="rounded bg-blue-500 p-2 text-white"
        :to="switchLocalePath(typeof loc === 'string' ? loc : loc.code)"
        >{{ typeof loc === "string" ? loc : loc.name }}</NuxtLink
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
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Index",
});

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => {
    if (typeof i === "string") return i;
    return i.code !== locale.value;
  });
});
</script>
