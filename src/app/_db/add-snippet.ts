import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";

type Snippet = Omit<typeof snippet.$inferInsert, "id">;

export async function addSnippet(data: Snippet) {
  const [result] = await db.insert(snippet).values(data).returning();
  return result;
}
