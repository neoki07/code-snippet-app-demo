"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { addSnippet } from "@/app/_db/add-snippet";

interface State {
  errors: {
    title?: string[];
    code?: string[];
  };
}

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  code: z.string().min(1, { message: "Code is required" }),
});

export async function createSnippet(_: State, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    code: formData.get("code"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const snippet = {
    title: validatedFields.data.title,
    code: validatedFields.data.code,
  };

  await addSnippet(snippet);

  redirect("/");
}
