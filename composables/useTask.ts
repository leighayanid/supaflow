import type { Todo } from "@/types";

export function useTask() {
  const isLoading = ref(false);
  const userId = useSupabaseUser().value?.id as string;
  const { client } = useSupabase();

  const addTask = async (newTask: string) => {
    console.log(newTask);
    if (!newTask) return;

    isLoading.value = true;
    const { data, error } = await client.from("todos").insert({
      task: newTask,
      is_complete: false,
      user_id: userId,
    });

    if (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  const updateCompletedTask = async (id: string) => {
    isLoading.value = true;
    const { error } = await client
      .from("todos")
      .update({
        is_complete: true,
      })
      .eq("id", id);
    if (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  const deleteTask = async (id: string) => {
    isLoading.value = true;
    const { error } = await client.from("todos").delete().eq("id", id);
    if (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  return {
    isLoading,
    addTask,
    updateCompletedTask,
    deleteTask,
  };
}
