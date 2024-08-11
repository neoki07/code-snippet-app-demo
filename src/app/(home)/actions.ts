"use server";

import { deleteSnippet as deleteSnippetFromDb } from "@/app/_db/delete-snippet";
import { revalidatePath } from "next/cache";

export async function deleteSnippet(id: number) {
  await deleteSnippetFromDb(id);
  revalidatePath("/");
}
