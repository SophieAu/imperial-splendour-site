import { FixedObject, FluidObject } from 'gatsby-image';

// ---
// Image Types

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
// GraphQL Responses

type ListResponse<Frontmatter> = {
  data: {
    allMarkdownRemark: {
      edges: Edge<Frontmatter>[];
    };
  };
};

type Edge<Frontmatter> = {
  node: {
    id: number;
    frontmatter: Frontmatter;
    html: string;
  };
};

type SingleResponse<Frontmatter> = {
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
    };
  };
};

type CommentResponse = {
  data: {
    allCommentsYaml: {
      edges: Comment[];
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
  author: string;
  date: string;
  formattedDate: string;
  excerpt: string;
};

export type PostsResponse = ListResponse<PostFrontmatter>;

export type FactionsResponse = ListResponse<FactionsFrontmatter>;

export type ToSResponse = SingleResponse<ToSFrontmatter>;

export type PostResponse = SingleResponse<PostFrontmatter> & CommentResponse;

export type SingleFaction = Edge<FactionsFrontmatter>;

export type Comment = {
  node: {
    id: number;
    date: string;
    name: string;
    comment: string;
  };
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
