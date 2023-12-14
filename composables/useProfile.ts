import type { Profile } from "@/types";
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();

export const useProfile = () => {
  const { client } = useSupabase();
  const { userId } = useAuth();
  const first_name = ref<string>("");
  const last_name = ref<string>("");
  const avatar_url = ref<string>("");
  const user = ref<Profile>();

  const updateFullName = async (firstName: string, lastName: string) => {
    const { error } = await client
      .from("profiles")
      .update({
        first_name: firstName,
        last_name: lastName,
      })
      .eq("id", useSupabaseUser().value?.id as string);

    if (error) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Profile updated",
        variant: "default",
      });
    }
  };

  const updateAvatar = async (avatar_url: string) => {
    const { error } = await client
      .from("profiles")
      .update({
        avatar_url: avatar_url,
      })
      .eq("id", useSupabaseUser().value?.id as string);

    if (error) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Profile updated",
        variant: "default",
      });
    }
  };

  const updateEmail = async (email: string) => {
    const { error } = await client.auth.updateUser({ email: email });
    if (error) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Email updated",
        variant: "default",
      });
    }
  };

  const updatePassword = async (password: string) => {
    const { error } = await client.auth.updateUser({ password: password });
    if (error) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Password updated",
        variant: "default",
      });
    }
  };

  const getUserProfile = async () => {
    const { data, error } = await client
      .from("profiles")
      .select("*")
      .eq("id", useSupabaseUser().value?.id as string);

    if (error) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    } else {
      user.value = data[0] as Profile;
      first_name.value = data[0].first_name as string;
      last_name.value = data[0].last_name as string;
      avatar_url.value = data[0].avatar_url as string;
    }
  };

  onMounted(async () => {
    await getUserProfile();
  });

  return {
    user,
    first_name,
    last_name,
    avatar_url,
    updateEmail,
    updatePassword,
    updateFullName,
    updateAvatar,
  };
};
