import { snippet } from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

type Snippet = Omit<typeof snippet.$inferInsert, "id">;

const SEED_SNIPPETS: Snippet[] = [
  {
    title: "Snippet 1",
    code: "console.log('Hello, world!')",
    author: "John Doe",
  },
  {
    title: "Snippet 2",
    code: "print('Hello, world!')",
    author: "Jane Doe",
  },
  {
    title: "Snippet 3",
    code: "fmt.Println('Hello, world!')",
    author: "John Doe",
  },
];

async function main() {
  try {
    // Reset database
    await db.delete(snippet).execute();
    // Seed snippets
    await db.insert(snippet).values(SEED_SNIPPETS).execute();
  } catch (error) {
    console.error("Error during seed:", error);
    process.exit(1);
  }
}

main().then(() => {
  process.exit();
});
