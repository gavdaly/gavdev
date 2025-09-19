import { jsx } from 'hono/jsx';

interface SwatchProps {
  color: string;
  name: string;
  code: string;
}

export function Swatch(props: SwatchProps) {
  return (
    <div className="swatch" role="listitem">
      <div className="chip" style={{ background: props.color }}></div>
      <div className="meta"><span>{props.name}</span><code>{props.code}</code></div>
    </div>
  );
}
