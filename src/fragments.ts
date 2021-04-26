import { graphql } from 'gatsby';

export const blogPost = graphql`
  fragment blogPost on MarkdownRemark {
    id
    html
    ...postFrontmatter
  }
`;

export const socialImage = graphql`
  fragment socialImage on MarkdownRemarkFields {
    socialImage {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`;

export const postFrontmatter = graphql`
  fragment postFrontmatter on MarkdownRemark {
    frontmatter {
      title
      author
      date(formatString: "YYYY-MM-DD")
      formattedDate: date(formatString: "MMMM DD, YYYY")
      excerpt
    }
  }
`;

export const termsOfService = graphql`
  fragment termsOfService on MarkdownRemark {
    html
    frontmatter {
      description
      title
    }
  }
`;

export const comments = graphql`
  fragment comments on CommentsYamlConnection {
    edges {
      node {
        id
        name
        comment
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export const faction = graphql`
  fragment faction on MarkdownRemark {
    id
    html
    frontmatter {
      title
      slug
      flag {
        ...fixedImage
      }
    }
  }
`;

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: $width, height: $height, quality: 90) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: $maxWidth, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
