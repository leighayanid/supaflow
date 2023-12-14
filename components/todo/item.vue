<script lang="ts" setup>
const { deleteTask, updateCompletedTask } = useTask();

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="my-2 flex items-center justify-between">
    <p :class="props.todo.is_complete ? 'line-through' : ''">
      {{ props.todo.task }}
    </p>
    <div class="flex space-x-2">
      <div class="flex items-center space-x-2">
        <Switch
          id="task"
          v-model:checked="props.todo.is_complete"
          @update:checked="updateCompletedTask(props.todo.id)"
          :disabled="props.todo.is_complete"
        />
        <Label
          for="task"
          :class="props.todo.is_complete ? 'text-green-500' : 'text-orange-500'"
          >Done</Label
        >
      </div>
      <Button variant="ghost"
        ><Icon
          name="i-heroicons-trash"
          class="w-5 h-5"
          @click="deleteTask(props.todo.id)"
      /></Button>
    </div>
  </div>
</template>

<style scoped></style>
