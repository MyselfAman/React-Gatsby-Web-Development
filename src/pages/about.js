import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
// import DualInfoblock from "../components/Reuseable/DualInfoblock"
import TeamphotoComponent from "../components/About/TeamphotoComponent"
const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection img= {data.img.childImageSharp.fluid} title="About Web World"  heroclass="about-background"/>
    <Infoblock heading="About Us"/>
    {/* <DualInfoblock 
      heading="Our Team"
      image="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
      title="A Message from CEO"
      description="Some quick example text to build on the card title and make up the bulk of the card's content."
      blockDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      /> */}
      <TeamphotoComponent buttonText="Send Mail"/>
  </Layout>
)

export const query = graphql`
{
    img: file(relativePath: { eq: "about.png"}) {
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
export default AboutPage
