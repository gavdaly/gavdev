import { jsx } from 'hono/jsx';

interface CardProps {
  children: any;
  className?: string;
}

export function Card(props: CardProps) {
  return (
    <section className={`card ${props.className || ''}`}>
      <div className="pad">
        {props.children}
      </div>
    </section>
  );
}
