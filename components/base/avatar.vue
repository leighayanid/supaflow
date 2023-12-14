<script lang="ts" setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: "https://github.com/radix-vue.png",
    required: true,
  },
  size: {
    type: String,
    default: "md",
    required: true,
  },
});
</script>

<template>
  <Avatar :class="props.size === 'lg' ? 'w-24 h-24' : 'w-6 h-6'">
    <AvatarImage :src="props.imgSrc" alt="@radix-vue" />
    <AvatarFallback>SF</AvatarFallback>
  </Avatar>
</template>

<style scoped></style>
