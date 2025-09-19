import { jsx } from 'hono/jsx';

interface LockupProps {
  type: "horizontal" | "stacked";
  brandName: string;
  description: string;
}

export function Lockup(props: LockupProps) {
  const { type, brandName, description } = props;

  if (type === "horizontal") {
    return (
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
        <strong>{brandName}</strong>
        <span className="muted">— {description}</span>
      </div>
    );
  } else if (type === "stacked") {
    return (
      <div className="lock" aria-label="Stacked lockup">
        <div className="lock-stacked-content">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--accent-3)" />
                <stop offset="100%" stop-color="var(--accent)" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" fill="url(#g2)" />
          </svg>
          <strong>{brandName}</strong>
        </div>
        <span className="muted">— {description}</span>
      </div>
    );
  }
  return null;
}
