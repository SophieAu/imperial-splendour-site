import { FixedObject, FluidObject } from 'gatsby-image';

export type AboutFrontmater = {
  title: string;
  description: string;
  contributorsTitle: string;
  contributors: { avatar: { childImageSharp: { fixed: Image } }; name: string }[];
};

export type AboutResponse = SingleResponse<AboutFrontmater>;

// ---
// Image Types

type FluidImage = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

export type Image = {
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes?: string;
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

// ---
// GraphQL Responses

type ListResponse<Frontmatter> = {
  data: {
    allMarkdownRemark: {
      nodes: Node<Frontmatter>[];
    };
  };
};

type Node<Frontmatter> = {
  id: number;
  frontmatter: Frontmatter;
  html: string;
};

type SingleResponse<Frontmatter> = {
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
    };
  };
};

type SocialImageResponse = {
  data: {
    markdownRemark: {
      fields: {
        socialImage: {
          childImageSharp: {
            original: {
              src: string;
            };
          };
        };
      };
    };
  };
};

type CommentResponse = {
  data: {
    allCommentsYaml: {
      nodes: Comment[];
    };
  };
};

type ToSFrontmatter = {
  title: string;
  description: string;
};

export type FactionsFrontmatter = {
  title: string;
  slug: string;
  description: string;
  flag: FixedImage;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
};

export type PostsResponse = ListResponse<PostFrontmatter>;

export type FactionsResponse = ListResponse<FactionsFrontmatter>;

export type ToSResponse = SingleResponse<ToSFrontmatter>;

export type PostResponse = SingleResponse<PostFrontmatter> & CommentResponse & SocialImageResponse;

export type SingleFaction = Node<FactionsFrontmatter>;

export type Comment = {
  id: number;
  date: string;
  name: string;
  comment: string;
};

// ---
// Page Contexts

export type BlogListContext = {
  pageContext: {
    numberOfPages: number;
    currentPage: number;
  };
};

export type SlugContext = {
  pageContext: {
    slug: string;
  };
};

// ---
// Prop Types

export interface ClassNameProp {
  className: string;
}
