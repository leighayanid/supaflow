import { test, expect, describe } from "vitest";

describe("import vue components", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../components/LoginForm.vue");
    expect(cmp).toBeDefined();
  });
});
