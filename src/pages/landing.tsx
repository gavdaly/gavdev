import { html } from "hono/html";
import { Card } from "../components/Card";
import { Layout } from "../renderer";

export function LandingPage() {
    return (
        <Layout title="GavDev">
            <Card className="card-first">
                <p>
                    This domain is for development. Any Security concerns please
                    notify me.
                </p>
            </Card>
            <Card className="hero">
                <h1>Fast, simple, sustainable web tooling</h1>
                <p>
                    We’re building behind the scenes. For partnerships or
                    inquiries:{" "}
                    <a className="btn" href="mailto:gavin@gavdev.xyz">
                        gavin@gavdev.xyz
                    </a>
                </p>
                <div className="links">
                    <a className="btn primary" href="mailto:gavin@gavdev.xyz">
                        Report a security issue
                    </a>
                    <a className="btn" href="/.well-known/security.txt">
                        security.txt
                    </a>
                    <a className="btn" href="/brand">
                        Brand kit
                    </a>
                    <a className="btn" href="#privacy">
                        Privacy
                    </a>
                </div>
            </Card>
        </Layout>
    );
}
