<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <Input
    v-bind="$attrs"
    type="text"
    v-model="value"
    @change="$emit('update:modelValue', $event.target?.value)"
  />
</template>

<style scoped></style>
