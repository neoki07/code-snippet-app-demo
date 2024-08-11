"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { currentUser } from "@clerk/nextjs/server";
import { addSnippet } from "@/app/_db/add-snippet";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  code: z.string().min(1, { message: "Code is required" }),
});

export async function createSnippet(_: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    code: formData.get("code"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const user = await currentUser();

  const snippet = {
    title: validatedFields.data.title,
    code: validatedFields.data.code,
    author: user?.firstName ?? "",
  };

  addSnippet(snippet);

  redirect("/");
}
