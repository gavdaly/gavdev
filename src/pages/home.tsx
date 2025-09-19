import { html } from "hono/html";
import { Card } from "../components/Card";
import { Swatch } from "../components/Swatch";
import { Lockup } from "../components/Lockup";

export function HomePage() {
    return (
        <>
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>GavDev — Fast, simple web tooling</title>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="description"
                    content="Polished placeholder for GavDev. Clean business card + brand kit + security page on one file."
                />
                <link rel="canonical" href="https://gavdev.xyz/" />
                <link rel="security.txt" href="/.well-known/security.txt" />

                <meta property="og:title" content="GavDev" />
                <meta
                    property="og:description"
                    content="Clean business card, brand kit, and security contact."
                />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Basic CSP (relaxed due to inline CSS/JS). Tighten later by moving CSS/JS to files. */}
                <meta
                    http-equiv="Content-Security-Policy"
                    content="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; base-uri 'none'; form-action 'self'"
                />

                <link rel="stylesheet" href="/static/home.css" />
            </head>
            <body>
                <div className="fx-wrap" aria-hidden="true">
                    <div className="fx"></div>
                </div>
                <div className="container">
                    <header>
                        <a className="logo" href="#">
                            <div className="mark" aria-hidden="true">
                                GD
                            </div>
                            <div className="wordmark">GavDev</div>
                        </a>
                        <nav>
                            <a className="btn" href="/docs">
                                Docs
                            </a>
                            <a
                                className="btn"
                                href="https://status.gavdev.xyz"
                                rel="noopener"
                            >
                                Status
                            </a>
                            <a
                                className="btn"
                                href="https://github.com/gavdaly"
                                rel="noopener"
                            >
                                GitHub
                            </a>
                            <a
                                className="btn primary"
                                href="mailto:gavin @gavdev.xyz"
                            >
                                Contact
                            </a>
                        </nav>
                    </header>

                    <Card>
                        <p>
                            This domain is primarily for development.
                            Significant content will be added later.
                        </p>
                    </Card>

                    <div className="grid">
                        <Card className="hero">
                            <h1>Fast, simple, sustainable web tooling</h1>
                            <p>
                                We’re building behind the scenes. For
                                partnerships or inquiries:{" "}
                                <a
                                    className="btn"
                                    href="mailto:gavin @gavdev.xyz"
                                >
                                    gavin@gavdev.xyz
                                </a>
                            </p>
                            <div className="links">
                                <a
                                    className="btn primary"
                                    href="mailto:gavin @gavdev.xyz"
                                >
                                    Report a security issue
                                </a>
                                <a
                                    className="btn"
                                    href="/.well-known/security.txt"
                                >
                                    security.txt
                                </a>
                                <a className="btn" href="#brand">
                                    Brand kit
                                </a>
                                <a className="btn" href="#privacy">
                                    Privacy
                                </a>
                            </div>
                        </Card>

                        <Card>
                            <h2 id="privacy">Privacy & Security</h2>
                            <dl className="security">
                                <dt>Contact</dt>
                                <dd>
                                    <a href="mailto:gavin @gavdev.xyz">
                                        gavin@gavdev.xyz
                                    </a>
                                </dd>

                                <dt>age public key</dt>
                                <dd>
                                    <div
                                        style={{
                                            border: "1px solid var(--border)",
                                            borderRadius: "var(--radius)",
                                            padding: "10px",
                                            marginTop: "5px",
                                            overflowY: "auto",
                                            maxHeight: "150px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: "5px",
                                            }}
                                        >
                                            <span style={{ fontWeight: 600 }}>
                                                age Public Key
                                            </span>
                                            <button
                                                className="btn"
                                                onClick="copyAgeKey()"
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    padding: 0,
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <svg width="20" height="20">
                                                    <use href="/static/icons.svg#icon-copy" />
                                                </svg>
                                            </button>
                                        </div>
                                        <code
                                            id="age-public-key"
                                            style={{ flexGrow: 1 }}
                                        >
                                            age1lyvetw03hc2slx02vh2ndp5wp5uhvpdl3e4z7z3sym7umuhm7uyqzqvj20
                                        </code>
                                    </div>
                                </dd>

                                <dt>Policy</dt>
                                <dd>
                                    No trackers. No third-party cookies. Please
                                    avoid automated scans that may disrupt
                                    service.
                                </dd>

                                <dt>Coordinated Disclosure</dt>
                                <dd>
                                    We follow a 90‑day disclosure window. If you
                                    find a vulnerability, email us with steps to
                                    reproduce and impact. We’ll acknowledge
                                    within 72 hours.
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
                    </div>

                    {/* Brand kit card (Option 6) */}
                    <Card id="brand" style={{ marginTop: "18px" }}>
                        <h2>Brand Kit</h2>
                        <div className="swatches" role="list">
                            <Swatch
                                color="var(--accent)"
                                name="Aurora Lime"
                                code="#33FF5F / color(display-p3 0.10 0.98 0.25)"
                            />
                            <Swatch
                                color="var(--accent-2)"
                                name="Solar Orange"
                                code="#FF8C00 / color(display-p3 1 0.55 0)"
                            />
                            <Swatch
                                color="var(--accent-3)"
                                name="Ion Blue"
                                code="#00B8FF / color(display-p3 0 0.72 1)"
                            />
                        </div>
                        <div className="lockups">
                            <Lockup
                                type="horizontal"
                                brandName="Your&nbsp;Brand"
                                description="horizontal lockup"
                            />
                            <Lockup
                                type="stacked"
                                brandName="Your&nbsp;Brand"
                                description="stacked mark"
                            />
                        </div>{" "}
                    </Card>

                    <footer>
                        © <span id="y"></span>{" "}
                        <span id="brand-name">GavDev</span> • All rights
                        reserved
                    </footer>
                </div>

                <script src="/static/home.js"></script>
            </body>
        </>
    );
}
