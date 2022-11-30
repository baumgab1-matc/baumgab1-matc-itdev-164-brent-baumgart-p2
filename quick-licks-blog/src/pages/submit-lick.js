import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {Label, Input, Select} from '@rebass/forms'
import { Button } from "rebass"
import { Section } from "../components/Section"
import { H1 } from "../components/Heading"


const Submit = ({ data }) => {
    const levels = data.allContentfulGuitarLicks.distinct

    return (
    <Layout>
        <H1>Bless us with your killer lick</H1>
        <StaticImage
            src="../images/zoidberg.jpeg"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby Astronaut"
            style={{ marginBottom: `1.45rem` }}
        />

        <Section>
            <Section width={4/12} flex flexDirection="column">
                <Label htmlFor='level'>Level</Label>
                <Select
                    id='level'
                    name='level'
                    >
                    {levels.map(level => (
                        <option key={level} >
                            {level}
                        </option>
                    ))}
                </Select>
            </Section>
            <Section width={6/12} flex flexDirection="column" >
                <Label htmlFor='description'>Description</Label>
                <Input
                    id='name'
                    name='name'
                    defaultValue='Jane Doe'
                />
            </Section>
            <Section width={6/12} flex flexDirection="column" >
                <Label htmlFor='description'>Tab Image</Label>
                <Input type="file" id="img" name="img" accept="image/*"/>
            </Section>
            <Section width={3/12} flex flexDirection="column" mt='2' >
                <Button>Submit</Button>
            </Section>
        </Section>

    </Layout>
)
}

export default Submit

export const query = graphql`
  {
    allContentfulGuitarLicks(filter: {}) {
        distinct(field: level)
      }
  }
  `