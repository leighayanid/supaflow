import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const useAuthForm = () => {
  const formSchema = toTypedSchema(
    z.object({
      email: z
        .string()
        .min(5, { message: "Email must be at least 2 characters" })
        .max(50)
        .email({ message: "Email must be a valid email" }),
      password: z.string().min(2).max(50),
    })
  );

  const form = useForm({
    validationSchema: formSchema,
  });

  return {
    formSchema,
    form,
  };
};
