import { jsx } from 'hono/jsx';

interface SwatchProps {
  color: string;
  name: string;
  hex: string;
  p3: string;
}

export function Swatch(props: SwatchProps) {
  return (
    <div className="swatch" role="listitem">
      <div className="chip" style={{ background: props.color }}></div>
      <div className="meta">
        <span>{props.name}</span>
        <code>
          <span>{props.hex}</span>
          <span>{props.p3}</span>
        </code>
      </div>
    </div>
  );
}
