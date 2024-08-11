import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { desc } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";

export async function getSnippets() {
  const snippets = await db.select().from(snippet).orderBy(desc(snippet.id));
  const authorIds = snippets.map((s) => s.authorId);

  const { data: authors } = await clerkClient.users.getUserList({
    userId: authorIds,
    limit: authorIds.length, // WARNING: this will be a performance issue if we have more authors
  });

  const authorMap = new Map(authors.map((a) => [a.id, a]));

  return snippets.map((snippet) => ({
    ...snippet,
    authorName: authorMap.get(snippet.authorId)?.firstName ?? "",
  }));
}
