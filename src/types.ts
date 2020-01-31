import { FixedObject, FluidObject } from 'gatsby-image';

type FluidImage = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

type FixedImage = {
  childImageSharp: {
    fixed: FixedObject;
  };
};

export type IndexImage = {
  heroImg: FluidImage;
  blackwatch: FluidImage;
  portraits: FluidImage;
  gameplay: FluidImage;
};

export type AboutImage = {
  pike: FixedImage;
  QHH: FixedImage;
  oleg2242: FixedImage;
  cro: FixedImage;
  tsanada: FixedImage;
  HD: FixedImage;
  mad_orc: FixedImage;
  myfate: FixedImage;
};

export type InfoBox = {
  imageKey: keyof IndexImage;
  imageAlt: string;
  text: string;
};

// ---
// Post GraphQL Response

export type GraphQLResponse = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: number;
          frontmatter: PostFrontmatter;
          html: string;
        };
      }[];
    };
  };
};

export type PostResponse = {
  data: {
    markdownRemark: {
      frontmatter: PostFrontmatter;
      html: string;
    };
    allCommentsYaml: {
      edges: Comment[];
    };
  };
};

export type ToSResponse = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
      };
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

export type Comment = {
  node: {
    id: number;
    date: string;
    name: string;
    comment: string;
    email?: string;
    website?: string;
    slug: string;
  };
};

export type BlogListContext = {
  pageContext: {
    numberOfPages: number;
    currentPage: number;
  };
};
