import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import ServciesCardComponent from "../components/Services/ServciesCardComponent"
import Infoblock from '../components/Reuseable/Infoblock'
import Contactus from "../components/Contact/Contactus"
const ContactPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection img= {data.img.childImageSharp.fluid} title="Contact Us"  heroclass="about-background"/>
    <Infoblock heading="How can we help?"/>
    <Contactus/>
  </Layout>
)

export const query = graphql`
{
    img: file(relativePath: { eq: "contact.png"}) {
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
export default ContactPage
