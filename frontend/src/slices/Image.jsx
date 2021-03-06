import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} style={{
      'maxWidth': input.primary.image.localFile.childImageSharp.fluid.presentationWidth,
      'margin': 'auto'
    }} />
  </Content>
)

export default Image
