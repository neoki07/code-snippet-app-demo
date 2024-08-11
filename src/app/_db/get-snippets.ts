import { db } from "@/db/drizzle";
import { snippet } from "@/db/schema";

export async function getSnippets() {
  return db.select().from(snippet);
}
