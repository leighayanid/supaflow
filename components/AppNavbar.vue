<script lang="ts" setup>
const { signOut } = useAuth();
const user = useSupabaseUser();
</script>

<template>
  <div
    class="w-full py-2 rounded-full max-w-3xl mx-auto flex justify-between items-center"
  >
    <AppLogo size="sm" />
    <div class="flex space-x-2 items-center">
      <SelectTheme />

      <NuxtLink
        to="/auth"
        class="bg-primary px-4 py-2 rounded-md w-fit"
        v-if="!user"
        >Auth</NuxtLink
      >
      <div class="flex space-x-2" v-else>
        <NuxtLink to="/profile" class="bg-primary px-4 py-2 rounded-md"
          >Profile</NuxtLink
        >

        <NuxtLink to="/todo" class="bg-secondary px-4 py-2 rounded-md"
          >Todo</NuxtLink
        >
        <Button @click="signOut" variant="ghost">
          <Icon
            name="i-heroicons-arrow-right-on-rectangle"
            class="w-6 h-6 hover:cursor-pointer"
          />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
