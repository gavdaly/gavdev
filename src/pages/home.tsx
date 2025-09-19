import { html } from 'hono/html';

export function HomePage() {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GavDev — Fast, simple web tooling</title>
        {/* Toggle discoverability: change to index,follow when you're ready */}
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Polished placeholder for GavDev. Clean business card + brand kit + security page on one file." />
        <link rel="canonical" href="https://gavdev.xyz/" />
        <link rel="security.txt" href="/.well-known/security.txt" />

        {/* Open Graph / Twitter cards (swap image later) */}
        <meta property="og:title" content="GavDev — Coming Soon" />
        <meta property="og:description" content="Clean business card, brand kit, and security contact." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Basic CSP (relaxed due to inline CSS/JS). Tighten later by moving CSS/JS to files. */}
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; base-uri 'none'; form-action 'self'" />

        <link rel="stylesheet" href="/static/home.css" />
      </head>
      <body>
        <div className="fx-wrap" aria-hidden="true"><div className="fx"></div></div>
        <div className="container">
          <header>
            <a className="logo" href="#">
              <div className="mark" aria-hidden="true">GD</div>
              <div className="wordmark">GavDev</div>
            </a>
            <nav>
              <a className="btn" href="/docs">Docs</a>
              <a className="btn" href="https://status.gavdev.xyz" rel="noopener">Status</a>
              <a className="btn" href="https://github.com/gavdaly" rel="noopener">GitHub</a>
              <a className="btn primary" href="mailto:gavin @gavdev.xyz">Contact</a>
            </nav>
          </header>

          <div className="grid">
            {/* Left: Hero + Security summary */}
            <section className="card hero">
              <div className="pad">
                <h1>Fast, simple, sustainable web tooling</h1>
                <p>We’re building behind the scenes. For partnerships or inquiries: <a className="btn" href="mailto:gavin @gavdev.xyz">gavin@gavdev.xyz</a></p>
                <div className="links">
                  <a className="btn primary" href="mailto:gavin @gavdev.xyz">Report a security issue</a>
                  <a className="btn" href="/.well-known/security.txt">security.txt</a>
                  <a className="btn" href="#brand">Brand kit</a>
                  <a className="btn" href="#privacy">Privacy</a>
                </div>
              </div>
            </section>

            {/* Right: Security quick info (Option 10) */}
            <aside className="card">
              <div className="pad">
                <h2 id="privacy">Privacy & Security</h2>
                <dl className="security">
                  <dt>Contact</dt>
                  <dd><a href="mailto:gavin @gavdev.xyz">gavin@gavdev.xyz</a></dd>



                  <dt>age public key</dt>
                  <dd>
                    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '10px', marginTop: '5px', overflowY: 'auto', maxHeight: '150px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <span style={{ fontWeight: 600 }}>age Public Key</span>
                        <button className="btn" onClick="copyAgeKey()" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </button>
                      </div>
                      <code id="age-public-key" style={{ flexGrow: 1 }}>age1lyvetw03hc2slx02vh2ndp5wp5uhvpdl3e4z7z3sym7umuhm7uyqzqvj20</code>
                    </div>
                  </dd>

                  <dt>Policy</dt>
                  <dd>No trackers. No third-party cookies. Please avoid automated scans that may disrupt service.</dd>

                  <dt>Coordinated Disclosure</dt>
                  <dd>We follow a 90‑day disclosure window. If you find a vulnerability, email us with steps to reproduce and impact. We’ll acknowledge within 72 hours.</dd>

                  <dt>security.txt</dt>
                  <dd><a href="/.well-known/security.txt">/.well-known/security.txt</a> (linked for crawlers)</dd>
                </dl>
              </div>
            </aside>


          </div>

          {/* Brand kit card (Option 6) */}
          <section className="card" id="brand" style={{ marginTop: '18px' }}>
            <div className="pad">
              <h2>Brand Kit</h2>

              <div className="swatches" role="list">
                <div className="swatch" role="listitem">
                  <div className="chip" style={{ background: 'var(--accent)' }}></div>
                  <div className="meta"><span>Aurora Lime</span><code>#33FF5F / color(display-p3 0.10 0.98 0.25)</code></div>
                </div>
                <div className="swatch" role="listitem">
                  <div className="chip" style={{ background: 'var(--accent-2)' }}></div>
                  <div className="meta"><span>Solar Orange</span><code>#FF8C00 / color(display-p3 1 0.55 0)</code></div>
                </div>
                <div className="swatch" role="listitem">
                  <div className="chip" style={{ background: 'var(--accent-3)' }}></div>
                  <div className="meta"><span>Ion Blue</span><code>#00B8FF / color(display-p3 0 0.72 1)</code></div>
                </div>
              </div>

              <div className="lockups">
                <div className="lock" aria-label="Horizontal lockup">
                  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="var(--accent)" />
                        <stop offset="100%" stop-color="var(--accent-2)" />
                      </linearGradient>
                    </defs>
                    <rect rx="10" width="40" height="40" fill="url(#g1)" />
                    <text x="50%" y="55%" text-anchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="ui-monospace,monospace">GD</text>
                  </svg>
                  <strong>Your&nbsp;Brand</strong>
                  <span className="muted">— horizontal lockup</span>
                </div>
                <div className="lock" aria-label="Stacked lockup">
                  <div style={{ display: 'grid', placeItems: 'center', gap: '6px' }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                      <defs>
                        <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="var(--accent-3)" />
                          <stop offset="100%" stop-color="var(--accent)" />
                        </linearGradient>
                      </defs>
                      <circle cx="20" cy="20" r="18" fill="url(#g2)" />
                    </svg>
                    <strong>Your&nbsp;Brand</strong>
                  </div>
                  <span className="muted">— stacked mark</span>
                </div>
              </div>
            </div>
          </section>

          <footer>
            © <span id="y"></span> <span id="brand-name">GavDev</span> • All rights reserved
          </footer>
        </div>

        <script src="/static/home.js"></script>
      </body>
    </>
  );
}
