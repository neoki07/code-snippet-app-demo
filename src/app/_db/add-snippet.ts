import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";

type Snippet = Omit<typeof snippet.$inferInsert, "id" | "authorId">;

export async function addSnippet(data: Snippet) {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to add a snippet");
  }

  const [result] = await db
    .insert(snippet)
    .values({ ...data, authorId: user.id })
    .returning();

  return result;
}
