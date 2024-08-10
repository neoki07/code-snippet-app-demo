import { Hono } from "hono";
import { handle } from "hono/vercel";
import { snippets } from "./store";
import { sleep } from "@/lib/sleep";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .get("/snippets", async (c) => {
    await sleep(1000);
    return c.json({
      snippets,
    });
  })
  .get(
    "/snippets/:id",
    zValidator("param", z.object({ id: z.string() })),
    async (c) => {
      const { id } = c.req.valid("param");

      const snippet = snippets.find((s) => s.id === id);
      if (!snippet) {
        return c.json({ error: "Snippet not found" }, 404);
      }

      await sleep(500);
      return c.json({
        snippet,
      });
    },
  );

export const GET = handle(app);

export type AppType = typeof routes;
