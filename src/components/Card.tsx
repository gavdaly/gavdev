import { jsx } from "hono/jsx";

interface CardProps {
    children: any;
    id?: string;
    className?: string;
}

export function Card(props: CardProps) {
    return (
        <section id={props.id} className={`card ${props.className || ""}`}>
            <div className="pad">{props.children}</div>
        </section>
    );
}
