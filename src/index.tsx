import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { serveStatic } from "hono/cloudflare-workers";
import { HelloPage } from "./pages/hello";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use("/*", serveStatic({ root: "./public" }));

app.get(
  "/hello",
  jsxRenderer(({ children }) => {
    return (
      <html>
        <body>
          <div className="max-w-2xl mx-auto">{children}</div>
        </body>
      </html>
    );
  })
);

app.get("/hello", (c) => {
  return c.render(<HelloPage />);
});

app.get("/{key:.+\.(png|jpg|jpeg|gif|svg|webp)$}", async (c) => {
  const key = c.req.param("key");

  if (c.env.__ga) {
    c.executionCtx.waitUntil(
      c.env.__ga.writeDataPoint({
        blobs: [key, c.req.headers.get("user-agent") ?? ""],
        doubles: [1],
        indexes: ["imageView"],
      })
    );
  }

  const object = await c.env.IMAGES_BUCKET.get(key);

  if (object === null) {
    return c.text("Not Found", 404);
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000");

  return new Response(object.body, {
    headers,
  });
});

app.all("*", (c) => c.text("Not Found", 404));

export default app;
