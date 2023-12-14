<script lang="ts" setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logos = [
  {
    name: "nuxt 3",
    icon: "i-logos-nuxt-icon",
  },

  {
    name: "vue 3",
    icon: "i-logos-vue",
  },

  {
    name: "typescript",
    icon: "i-logos-typescript-icon",
  },

  {
    name: "vercel",
    icon: "i-logos-vercel-icon",
  },
  {
    name: "supabase",
    icon: "i-logos-supabase-icon",
  },
  {
    name: "postgresql",
    icon: "i-logos-postgresql",
  },
  {
    name: "vueuse",
    icon: "i-logos-vueuse",
  },
  {
    name: "pinia",
    icon: "i-logos-pinia",
  },
  {
    name: "vitest",
    icon: "i-logos-vitest",
  },
  {
    name: "google-fonts",
    icon: "i-simple-icons-googlefonts",
  },
  {
    name: "tailwind",
    icon: "i-logos-tailwindcss-icon",
  },
  {
    name: "shadcnui",
    icon: "i-simple-icons-shadcnui",
  },
];
</script>

<template>
  <div class="mt-10">
    <h2 class="text-4xl font-semibold font-inter mb-5">Tech Stack</h2>
    <div class="grid md:grid-cols-6 grid-cols-3 gap-3">
      <div
        v-for="logo in logos"
        :key="logo.name"
        class="grid place-items-center py-5 px-2 bg-gray-800 rounded-xl"
      >
        <Icon :name="logo.icon" class="w-10 h-10" />
        <p>{{ logo.name }}</p>
      </div>
    </div>
  </div>
</template>
