<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loading = ref<boolean>(false);
const { toast } = useToast();

const { form } = useAuthForm();
const { signInWithPassword } = useAuth();

const onSubmit = form.handleSubmit(async (values) => {
  try {
    loading.value = true;
    await signInWithPassword(values.email, values.password);
    loading.value = false;
  } catch (error: any) {
    loading.value = false;
    toast({
      title: "Error",
      description: error.message,
    });
  }
});
</script>

<template>
  <div>
    <BaseCard>
      <template #title>Login to your account </template>
      <template #description>
        Login to your account using email and password
      </template>
      <template #content>
        <form @submit="onSubmit" class="space-y-4">
          <FormField v-slot="{ componentField }" name="email" class="space-y-2">
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Email address"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" :size="'lg'" class="w-full">
            {{ loading ? "Logging in..." : "Login" }}
          </Button>
        </form>
      </template>
    </BaseCard>
  </div>
</template>
