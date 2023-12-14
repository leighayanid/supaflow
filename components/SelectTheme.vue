<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <Select v-model="colorMode.preference">
    <SelectTrigger>
      <SelectValue placeholder="Select theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="system"> System </SelectItem>
        <SelectItem value="light"> Light </SelectItem>
        <SelectItem value="dark"> Dark </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped></style>
