import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();

export const useAuth = () => {
  const { client } = useSupabase();
  const userId = useSupabaseUser().value?.id as string;
  const user = useSupabaseUser();

  const signInWithPassword = async (email: string, password: string) => {
    try {
      const { error } = await client.auth.signInWithPassword({
        email,
        password,
      });

      if (!error) navigateTo("/");
      else {
        toast({
          title: "Error",
          description: error.message as any,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    }
  };

  const signUpWithPassword = async (email: string, password: string) => {
    try {
      const { error } = await client.auth.signUp({
        email,
        password,
      });
      if (!error) {
        navigateTo("/");
      } else {
        toast({
          title: "Error",
          description: error.message as any,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    }
  };

  const updateEmail = async (email: string) => {
    try {
      const { error } = await client.auth.updateUser({ email });
      if (!error) {
        toast({
          title: "Success",
          description: "Email updated",
          variant: "success",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message as any,
        variant: "destructive",
      });
    }
  };

  const signOut = async () => {
    await client.auth.signOut();
  };

  return {
    signInWithPassword,
    signUpWithPassword,
    signOut,
    updateEmail,
    userId,
    user,
  };
};
