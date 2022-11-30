import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { H1, H3 } from '../components/Heading'

const GuitarLick = ({ data }) => {
  const { title, description, Difficulty, body, heroImage } = data.contentfulGuitarLicks

  return (
    <Layout>
      <H1>{title}</H1>
      <hr/>
      <GatsbyImage
        image={heroImage.gatsbyImageData}
        alt="guitar tab hero image"
      />
      <H3>{description}</H3>
      <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
    </Layout> 
  )
}

export default GuitarLick 

export const pageQuery = graphql`
  query lickQuery($slug: String!) {
    contentfulGuitarLicks(slug: {eq: $slug}) {
      title 
      description
      difficulty
      slug
      body {
		childMarkdownRemark {
		    html
        }
      }
      heroImage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 960
        )
      }
    }
  }
`


