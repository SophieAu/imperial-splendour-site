import { graphql } from 'gatsby';

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
