import { jsx } from 'hono/jsx'

export const Layout = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}
