<script lang="ts" setup>
const email = useSupabaseUser().value?.email as string;
const password = ref("");
const {
  updateEmail,
  updateAvatar,
  first_name,
  last_name,
  avatar_url,
  updateFullName,
  user,
} = useProfile();

function updateEmailProfile(email: string) {
  updateEmail(email);
}

function updateNameProfile(firstName: string, lastName: string) {
  updateFullName(firstName, lastName);
}

function updateUserAvatar(path: string) {
  updateAvatar(path);
}
</script>

<template>
  <div class="max-w-xl mx-auto my-10">
    <BaseCard>
      <template #title> Edit Profile </template>
      <template #description>
        <p>Edit your profile information</p>
      </template>
      <template #content>
        <div class="space-y-10 mt-10">
          <div class="space-y-3">
            <div class="flex space-x-2">
              <div class="input-group flex flex-col space-y-2 w-full">
                <label for="Email">First Name</label>
                <BaseInput v-model="first_name" />
              </div>
              <div class="input-group flex flex-col space-y-2 w-full">
                <label for="Email">Last Name</label>
                <BaseInput v-model="last_name" />
              </div>
            </div>

            <Button @click="updateNameProfile(first_name, last_name)"
              >Update Name</Button
            >
          </div>
          <Separator />
          <div class="space-y-3">
            <div class="input-group flex flex-col space-y-2">
              <label for="Email">Email Address</label>
              <BaseInput v-model="email" />
            </div>
            <Button @click="updateEmailProfile(email)"
              >Update Email Address</Button
            >
          </div>
          <Separator />
          <div class="space-y-3">
            <div class="input-group flex flex-col space-y-2">
              <label for="Password">New Password</label>
              <Input v-model="password" />
            </div>
            <Button>Change Password</Button>
          </div>
          <Separator />
          <BaseCard>
            <template #title>Delete</template>
            <template #description>
              <p>Deleting your account is irreversible.</p>
            </template>
            <template #content>
              <Button variant="destructive">Delete account</Button>
            </template>
          </BaseCard>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
