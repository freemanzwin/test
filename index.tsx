// index.tsx (Node.js runtime)
import { Hono } from "hono@4";
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use("/*", cors());
app.get("/", (c) => c.text("Hello world! Hello world!"));
app.get("/api/health", (c) => c.json({ status: "ok" }));

const port = Number(process.env.PORT) || 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: port,
});
