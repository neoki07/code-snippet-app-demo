import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const snippet = pgTable("snippet", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  code: text("code").notNull(),
  authorId: text("author_id").notNull(),
});
