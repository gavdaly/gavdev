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
            </Card>
            <Card>
                <h2 id="privacy">Privacy & Security</h2>
                <dl className="security">
                    <dt>Contact</dt>
                    <dd>
                        <a href="mailto:gavin@gavdev.xyz">gavin@gavdev.xyz</a>
                    </dd>

                    <dt class="flex">
                        <span>age public key</span>
                        <span>
                            <button
                                className="btn age-key-copy-button"
                                onClick="copyAgeKey()"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <use href="/static/icons.svg#icon-copy" />
                                </svg>
                            </button>
                        </span>
                    </dt>
                    <dd>
                        <code id="age-public-key" className="age-key-code">
                            age1lyvetw03hc2slx02vh2ndp5wp5uhvpdl3e4z7z3sym7umuhm7uyqzqvj20
                        </code>
                    </dd>

                    <dt>Policy</dt>
                    <dd>
                        No trackers. No third-party cookies. Please avoid
                        automated scans that may disrupt service.
                    </dd>

                    <dt>Coordinated Disclosure</dt>
                    <dd>
                        We follow a 90‑day disclosure window. If you find a
                        vulnerability, email us with steps to reproduce and
                        impact. We’ll acknowledge within 72 hours.
                    </dd>

                    <dt>security.txt</dt>
                    <dd>
                        <a href="/.well-known/security.txt">
                            /.well-known/security.txt
                        </a>{" "}
                        (linked for crawlers)
                    </dd>
                </dl>
            </Card>
        </Layout>
    );
}
