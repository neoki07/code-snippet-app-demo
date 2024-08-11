import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

type Snippet = Omit<typeof snippet.$inferInsert, "id" | "authorId"> & {
  id: number;
};

export async function updateSnippet(data: Snippet) {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to add a snippet");
  }

  const [result] = await db
    .update(snippet)
    .set(data)
    .where(eq(snippet.id, data.id))
    .returning();

  return result;
}
