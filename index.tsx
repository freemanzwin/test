// index.tsx (Node.js runtime)
import { Hono, Context } from "hono";
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use("/*", cors());
app.get("/", (c: Context) => c.text("Hello world! Hello world!"));
app.get("/api/health", (c: Context) => c.json({ status: "ok" }));

const port = Number(process.env.PORT) || 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: port,
});
