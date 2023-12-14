<script lang="ts" setup>
import features from "@/data/features.json";
const { user } = useAuth();
</script>

<template>
  <div class="max-w-3xl mx-auto w-full my-36 grid place-items-center">
    <div class="space-y-20">
      <div class="flex space-x-3 items-center justify-between">
        <div>
          <AppLogo size="lg" />
          <h1 class="text-3xl font-extrabold font-inter">
            Nuxt 3 + ShadCN Vue + Supabase Starter
          </h1>
        </div>
      </div>

      <img
        src="/bg.png"
        alt="bg"
        class="w-full mx-auto rounded-3xl shadow-2xl"
      />

      <div class="space-y-10 my-20">
        <h2 class="text-4xl font-semibold font-inter">Features</h2>
        <div class="grid grid-cols-2 gap-5">
          <div
            class="bg-primary px-4 py-6 rounded-xl"
            v-for="feature in features.features"
            :key="feature.name"
          >
            <h3 class="text-xl font-inter font-semibold mb-5">
              {{ feature.name }}
            </h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
      <TechStack />
      <div class="text-center">
        <p>
          Made with 💖 by
          <span class="text-underline"
            ><a href="https://twitter.com/struct_dev" class="text-underline"
              >Leigh Dinaya</a
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
