import type { Database } from "./database";

export * from "./database";
export type Todo = Database["public"]["Tables"]["todos"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
