# Project Overview

This is a Cloudflare Workers project named `gavdev` that leverages Hono.js for routing and JSX for rendering. It serves static assets from the `public` directory and dynamically fetches images from a Cloudflare R2 bucket. The project is configured to use TypeScript.

# Building and Running

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Local Development

To run the project locally for development, use:

```bash
npm run dev
```

This will start the Cloudflare Worker in development mode, accessible via `http://0.0.0.0:8787` (or another port if configured).

## Deployment

To deploy the project to Cloudflare Workers, execute:

```bash
npm run deploy
```

This command will minify the code and deploy it to your Cloudflare account.

## Type Generation

To generate or synchronize types based on your Worker configuration, run:

```bash
npm run cf-typegen
```

This command generates the `worker-configuration.d.ts` file, which provides type definitions for your Cloudflare Bindings.

# Development Conventions

*   **Frameworks:** Hono.js for API routing and JSX for UI rendering.
*   **Language:** TypeScript.
*   **Static Assets:** Served from the `public` directory.
*   **Image Storage:** Cloudflare R2 bucket named `IMAGES_BUCKET` is used for storing and serving images.
*   **Routing:**
    *   The root path (`/`) renders the `HomePage`.
    *   The `/hello` path renders the `HelloPage`.
    *   Image requests matching `/{key:.+\.(png|jpg|jpeg|gif|svg|webp)$}` are handled by fetching from the `IMAGES_BUCKET` R2 bucket.
*   **Cloudflare Bindings:** The `CloudflareBindings` interface is used for type-checking environment variables and bindings. When instantiating `Hono`, ensure to pass `CloudflareBindings` as a generic:

    ```typescript
    const app = new Hono<{ Bindings: CloudflareBindings }>();
    ```
