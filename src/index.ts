import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ status: "ok", message: "Hello from Hono on k8s" }));
app.get("/health", (c) => c.json({ status: "healthy" }));

export default {
  port: 5544,
  fetch: app.fetch,
};
