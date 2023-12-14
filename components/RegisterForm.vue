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

const { toast } = useToast();

const loading = ref<boolean>(false);

const { form } = useAuthForm();
const { signUpWithPassword } = useAuth();

const onSubmit = form.handleSubmit(async (values) => {
  try {
    loading.value = true;
    await signUpWithPassword(values.email, values.password);
    loading.value = false;
  } catch (error: any) {
    loading.value = false;
    toast({
      title: "Error",
      description: error.message as string,
      variant: "destructive",
    });
  }
});
</script>

<template>
  <div>
    <BaseCard>
      <template #title>Register for your account </template>
      <template #description>
        Create a new account using email and password
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
                  placeholder="password"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" :size="'lg'" class="w-full">
            {{ loading ? "Signing up..." : "Sign Up" }}
          </Button>
        </form>
      </template>
    </BaseCard>
  </div>
</template>
