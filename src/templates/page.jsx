import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import FlexibleContent from "../components/FlexibleContent/FlexibleContent";

export default class PageTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const postNode = data.markdownRemark;

    console.log(data);

    return (
      <Layout>
        <FlexibleContent sections={postNode.frontmatter.sections} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`

  fragment Carousel on Sections {
    type
    title
    text
    images {
      image {
        childImageSharp {
          fluid(maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      alt
    }
  }

  fragment TextBlock on Sections {
    type
    title
    text
  }

  fragment BlockList on Sections {
    type
    title
    text
    blocks {
      title
      text
    }
  }

  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        short_description
        date
        cover {
          childImageSharp {
            fluid(maxHeight: 700, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sections {
          ...TextBlock
          ...Carousel
          ...BlockList
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
