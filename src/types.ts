export type InfoBox = {
  image: string;
  imageAlt: string;
  text: string;
};

// ---
// Post GraphQL Response

export type Post = {
  node: {
    id: number;
    frontmatter: PostFrontmatter;
  };
};

export type GraphQLResponse = {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    };
  };
};

export type SingleGraphQLResponse = {
  data: {
    markdownRemark: {
      frontmatter: PostFrontmatter;
      html: string;
    };
  };
};

export type PostFrontmatter = {
  title: string;
  author: string;
  date: string;
  formattedDate: string;
  excerpt: string;
};
