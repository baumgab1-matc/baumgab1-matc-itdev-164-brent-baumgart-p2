import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LickList from "../components/LickList"

const AdvancedLicks = ({ data }) => {
return (
  <Layout>
    <LickList data={data} />
  </Layout>
)
}

export const Head = () => <Seo title="Advanced Guitar Licks" />

export default AdvancedLicks

export const query = graphql`
  {
    allContentfulGuitarLicks(
      filter: {level: {eq: "Advanced"}}
    ) {
      edges {
        node {
          id
          title
          slug
          description
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
          }
        }
      }
    }
  }
  `