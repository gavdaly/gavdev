import { jsx } from 'hono/jsx'
import { Layout } from '../renderer'

export const HelloPage = () => {
  return (
    <Layout>
      <h1>Hello from Hono!</h1>
    </Layout>
  )
}
