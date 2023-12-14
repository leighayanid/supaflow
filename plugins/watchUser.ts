export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  const user = useSupabaseUser();

  watchEffect(() => {
    if (!user.value && route.path !== "/auth" && route.path !== "/") {
      navigateTo("/auth");
    } else if (user.value && route.path === "/auth") {
      navigateTo("/");
    }
  });
});
