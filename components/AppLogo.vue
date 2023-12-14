<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size: "sm" | "lg";
  }>(),
  {
    size: "sm",
  }
);
</script>

<template>
  <NuxtLink
    to="/"
    class="font-bold font-inter"
    :class="props.size === 'sm' ? 'text-base' : 'text-5xl'"
  >
    SupaFlow
  </NuxtLink>
</template>

<style scoped></style>
