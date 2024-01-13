<template>
  {{ $t("helloworld") }}
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
</script>
