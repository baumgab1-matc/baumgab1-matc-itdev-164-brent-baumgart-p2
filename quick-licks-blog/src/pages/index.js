import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Heading } from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Section } from '../components/Section'
import { H1 } from '../components/Heading'
import LickList from "../components/LickList"


const IndexPage = ({ data }) => (
  <Layout>
    <LickList data={data} />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulGuitarLicks(limit: 10, sort: {fields: publishedDate}) {
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
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
            )
          }
        }
      }
    }
  }
  `