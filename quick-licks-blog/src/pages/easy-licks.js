import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { Box } from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LickList from "../components/LickList"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const EasyLicks = ({ data }) => (
  <Layout>
    <LickList data={data} />
  </Layout>
)

export const Head = () => <Seo title="Easy Guitar Licks" />

export default EasyLicks

export const query = graphql`
  {
    allContentfulGuitarLicks(filter: {level: {eq: "Beginner"}}) {
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