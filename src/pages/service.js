import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import ServciesCardComponent from "../components/Services/ServciesCardComponent"
import Infoblock from '../components/Reuseable/Infoblock'

const ServciePage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection img= {data.img.childImageSharp.fluid} title="Our Services"  heroclass="about-background"/>
    <ServciesCardComponent title="Our Most Promising Services"/>
    <Infoblock heading="What we provide"/>
  </Layout>
)

export const query = graphql`
{
    img: file(relativePath: { eq: "service.png"}) {
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_tracedSVG 
        }
        }
    }
    mycourses:allContentfulCourses {
        edges {
            node {
                id
                title
                price
                category
                description
                image {
                    id
                    url
                }
            }
        }
    }
}
`
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />


//  tracedSVG used to convert image into svg
export default ServciePage
