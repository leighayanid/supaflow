<script lang="ts" setup>
const task = ref("");
const emit = defineEmits(["add"]);
function addTask() {
  emit("add", task.value);
  task.value = "";
}
</script>

<template>
  <div class="flex space-x-2 mt-10">
    <Input
      type="text"
      v-model="task"
      @keyup.enter="addTask"
      placeholder="Enter your task here"
    />
    <Button variant="default" class="w-1/2" @click="addTask">Add Task</Button>
  </div>
</template>

<style scoped></style>
