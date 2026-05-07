import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ status: "ok", message: "Hello from Hono on k8s", data: "data from here", timestamp: new Date().toISOString() }));
app.get("/health", (c) => c.json({ status: "healthy", replicas: 3 }));

export default {
  port: 5544,
  fetch: app.fetch,
};
