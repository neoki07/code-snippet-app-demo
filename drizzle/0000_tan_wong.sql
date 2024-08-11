CREATE TABLE IF NOT EXISTS "snippet" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"code" text NOT NULL,
	"author" text NOT NULL
);
