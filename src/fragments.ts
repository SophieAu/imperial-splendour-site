import { graphql } from 'gatsby';

export const blogPosts = graphql`
  fragment blogPosts on MarkdownRemarkConnection {
    totalCount
    edges {
      node {
        id
        ...postFrontmatter
      }
    }
  }
`;

export const blogPost = graphql`
  fragment blogPost on MarkdownRemark {
    id
    html
    ...postFrontmatter
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

export const factions = graphql`
  fragment factions on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          flag {
            childImageSharp {
              fixed(height: 66, quality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
        html
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
    }
  }
`;

export const avatarImage = graphql`
  fragment avatarImage on File {
    childImageSharp {
      fixed(width: 66, height: 88, quality: 90) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;

export const infoBoxImage = graphql`
  fragment infoBoxImage on File {
    childImageSharp {
      fluid(maxWidth: 805, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const heroImage = graphql`
  fragment heroImage on File {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

export const carouselButtonImage = graphql`
  fragment carouselButtonImage on File {
    childImageSharp {
      fixed(width: 24, quality: 90) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;

export const headerLogo = graphql`
  fragment headerLogo on File {
    childImageSharp {
      fixed(height: 56, width: 183) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;

export const notFoundImage = graphql`
  fragment notFoundImage on File {
    childImageSharp {
      fluid(maxWidth: 1040) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;
