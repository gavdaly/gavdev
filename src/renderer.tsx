import { jsx, PropsWithChildren } from "hono/jsx";

interface LayoutProps {
    title: string;
}

export function Layout(props: PropsWithChildren<LayoutProps>) {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>GavDev</title>
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

                <meta
                    http-equiv="Content-Security-Policy"
                    content="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; base-uri 'none'; form-action 'self'"
                />

                <link rel="stylesheet" href="/static/home.css" />
                <script src="/static/home.js" defer></script>
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

                    {props.children}

                    <footer>
                        © <span id="y"></span>{" "}
                        <span id="brand-name">GavDev</span> • All rights
                        reserved
                    </footer>
                </div>
            </body>
        </html>
    );
}
