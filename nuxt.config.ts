// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "nuxt-vitest",
  ],
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 800],
    },
    display: "swap",
  },
  supabase: {
    redirectTo: "auth",
    redirectOptions: {
      login: "/auth",
      exclude: ["/"],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
