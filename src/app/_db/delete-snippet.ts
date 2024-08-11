import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function deleteSnippet(id: number) {
  await db.delete(snippet).where(eq(snippet.id, id));
}
