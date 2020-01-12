import { graphql } from 'gatsby';

export const PostFrontmatter = graphql`
  fragment PostFrontmatter on MarkdownRemark {
    frontmatter {
      title
      author
      date(formatString: "YYYY-MM-DD")
      formattedDate: date(formatString: "MMMM DD, YYYY")
      excerpt
    }
  }
`;
