"use server";

import { z } from "zod";
import { updateSnippet as updateSnippetInDb } from "@/app/_db/update-snippet";
import { redirect } from "next/navigation";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  code: z.string().min(1, { message: "Code is required" }),
});

export async function updateSnippet({ id }: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    code: formData.get("code"),
  });

  if (!validatedFields.success) {
    return { id, errors: validatedFields.error.flatten().fieldErrors };
  }

  const snippet = {
    id,
    title: validatedFields.data.title,
    code: validatedFields.data.code,
  };

  await updateSnippetInDb(snippet);

  redirect("/");
}
