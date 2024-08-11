import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { eq } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";

type Snippet = typeof snippet.$inferSelect & { authorName: string };

export async function getSnippet(id: number): Promise<Snippet | undefined> {
  const [result] = await db.select().from(snippet).where(eq(snippet.id, id));
  if (!result) {
    return undefined;
  }

  const author = await clerkClient.users.getUser(result.authorId);

  return {
    ...result,
    authorName: author.firstName ?? "",
  };
}
