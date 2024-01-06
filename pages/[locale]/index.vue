<template>
  MainIndex
  <br />
  <button
    class="dark:bg-black dark:text-white bg-white text-black px-4 py-2 rounded"
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
