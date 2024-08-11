import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { eq } from "drizzle-orm";

type Snippet = typeof snippet.$inferSelect;

export async function getSnippet(id: number): Promise<Snippet | undefined> {
  const [result] = await db.select().from(snippet).where(eq(snippet.id, id));
  return result;
}
