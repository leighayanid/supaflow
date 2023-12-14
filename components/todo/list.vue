<script lang="ts" setup>
import type { Todo } from "@/types";

const props = defineProps({
  todos: {
    type: Array<Todo>,
  },
});
</script>

<template>
  <div v-for="todo in props.todos" :key="todo.id">
    <TodoItem :todo="todo" />
    <Separator />
  </div>
</template>

<style scoped></style>
