<script lang="ts" setup>
import type { RealtimeChannel } from "@supabase/supabase-js";
import { useDateFormat } from "@vueuse/core";

let realtimeChannel: RealtimeChannel;
const { client } = useSupabase();
const { userId } = useAuth();
const { addTask } = useTask();
const date = useDateFormat(new Date(), "YYYY MMMM, DD");

const { data: tasks, refresh } = await useAsyncData("todos", async () => {
  const { data, error } = await client
    .from("todos")
    .select()
    .eq("user_id", userId)
    .order("inserted_at", { ascending: false });

  if (error) {
    console.error(error);
  } else {
    return data;
  }
});

onMounted(async () => {
  realtimeChannel = client
    .channel("public:todos")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "todos" },
      () => refresh()
    );

  realtimeChannel.subscribe();
});

onUnmounted(() => {
  realtimeChannel.unsubscribe();
});
</script>

<template>
  <div class="max-w-3xl mx-auto space-y-5">
    <TodoNew @add="addTask" />
    <BaseCard>
      <template #title>Todo List </template>
      <template #description> {{ date }}</template>
      <template #content>
        <TodoEmpty v-show="!tasks || tasks.length === 0" />
        <TodoList :todos="tasks" />
      </template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
