import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { serveStatic } from "hono/cloudflare-workers";
import { LandingPage } from "./pages/landing";
import { BrandPage } from "./pages/brand";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => c.html(LandingPage()));
app.get("/brand", (c) => c.html(BrandPage()));

app.use("/*", serveStatic({ root: "./public", manifest: {} }));

app.get("/{key:.+\.(png|jpg|jpeg|gif|svg|webp)$}", async (c) => {
    const key = c.req.param("key");

    if (key === undefined) {
        return c.text("Not Found", 404);
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
