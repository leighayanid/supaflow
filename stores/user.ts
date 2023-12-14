import { defineStore } from "pinia";
const user = useSupabaseUser();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: user,
  }),
});
