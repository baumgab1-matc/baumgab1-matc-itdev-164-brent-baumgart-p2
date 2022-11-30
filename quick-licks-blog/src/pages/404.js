import * as React from "react"
import { H3 } from "../components/Heading"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <H3>404: Not Found</H3>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
