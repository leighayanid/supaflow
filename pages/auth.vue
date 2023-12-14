<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

definePageMeta({
  layout: "auth",
});

watch(useSupabaseUser(), (user) => {
  if (user) {
    navigateTo("/");
  }
});
</script>

<template>
  <div class="mx-auto grid place-items-center w-full h-screen">
    <div class="md:w-1/2 w-full">
      <div class="mb-8">
        <div class="flex flex-col">
          <AppLogo size="lg" />
          <small class="text-md">Join SupaFlow to start</small>
        </div>
      </div>
      <Tabs default-value="signin">
        <TabsList class="grid grid-cols-2 w-full">
          <TabsTrigger value="signin"> Sign In </TabsTrigger>
          <TabsTrigger value="register"> Register </TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped></style>
