import "server-only";
import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getSnippets() {
  return db.select().from(snippet).orderBy(desc(snippet.id));
}
