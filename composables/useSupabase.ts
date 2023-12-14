import type { Database } from "~/types/database";
export const useSupabase = () => {
  const client = useSupabaseClient<Database>();

  return {
    client,
  };
};
