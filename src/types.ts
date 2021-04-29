import { FixedObject, FluidObject } from 'gatsby-image';

type Markdown = string;

// ---
/// Image Types

export type Image = {
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes?: string;
};

export type FixedImage = { childImageSharp: { fixed: Image } };
export type FluidImage = { childImageSharp: { fluid: Image } };

// ---
// GraphQL Response Bricks

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
    };
  };
};

type ExtendedSingleResponse<Frontmatter> = SingleResponse<Frontmatter> & {
  data: {
    markdownRemark: {
      html: string;
    };
  };
};

// ---
// Responses

export type AboutFrontmater = {
  title: string;
  description: string;
  contributorsTitle: string;
  contributors: { avatar: FixedImage; name: string }[];
};
export type AboutResponse = ExtendedSingleResponse<AboutFrontmater>;

type IndexFrontmatter = {
  description: string;
  heroImage: FixedImage;
  heroLogo: FixedImage;
  heroText: Markdown;
  infoBoxes: {
    text: Markdown;
    image: FluidImage;
    imgAlt: string;
  }[];
};
export type IndexResponse = SingleResponse<IndexFrontmatter>;

// ---
// ---
// OLD SHIT
// ---
// ---
// Image Types

type FluidImageOld = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

type FixedImageOld = {
  childImageSharp: {
    fixed: FixedObject;
  };
};

export type IndexImage = {
  heroImg: FluidImageOld;
  blackwatch: FluidImageOld;
  portraits: FluidImageOld;
  gameplay: FluidImageOld;
};

// ---
// GraphQL Responses

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
  flag: FixedImageOld;
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
