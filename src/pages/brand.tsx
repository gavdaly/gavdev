import { html } from "hono/html";
import { Card } from "../components/Card";
import { Swatch } from "../components/Swatch";
import { Lockup } from "../components/Lockup";
import { Layout } from "../renderer";

export function BrandPage() {
    return (
        <Layout title="GavDev | Branding">
            <Card id="brand" className="card-brand">
                <h2>Brand Kit</h2>
                <div className="swatches" role="list">
                    <Swatch
                        color="var(--accent)"
                        name="Aurora Lime"
                        hex="#33FF5F"
                        p3="color(display-p3 0.10 0.98 0.25)"
                    />
                    <Swatch
                        color="var(--accent-2)"
                        name="Solar Orange"
                        hex="#FF8C00"
                        p3="color(display-p3 1 0.55 0)"
                    />
                    <Swatch
                        color="var(--accent-3)"
                        name="Ion Blue"
                        hex="#00B8FF"
                        p3="color(display-p3 0 0.72 1)"
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
        </Layout>
    );
}
