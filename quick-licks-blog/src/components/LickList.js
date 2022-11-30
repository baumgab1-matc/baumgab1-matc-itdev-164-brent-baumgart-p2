import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { H3 } from '../components/Heading'
import { Box, Card } from "rebass"

const Grid = styled(Box)`
  box-sizing: border-box;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const LickList = ({data}) => {
    return (
    <Grid>
      {
        data.allContentfulGuitarLicks.edges.map(edge => (
          <Card width={256} p={3} key={edge.node.id}>
            <Link to={edge.node.slug}>
              <GatsbyImage
                alt = {edge.node.title}
                image={edge.node.heroImage.gatsbyImageData}
              />
            </Link>
            <H3>{edge.node.title}</H3>
            <div>
              {edge.node.description}
            </div>
          </Card>
        ))
      }
    </Grid>
  )
}

export default LickList