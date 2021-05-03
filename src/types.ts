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
  title: string;
  description: string;
  heroImage: FluidImage;
  heroLogo: FluidImage;
  heroLogoAlt: string;
  heroText: Markdown;
  infoBoxes: {
    text: Markdown;
    image: FluidImage;
    imgAlt: string;
  }[];
};
export type IndexResponse = SingleResponse<IndexFrontmatter>;

type NotFoundFrontmatter = {
  title: string;
  description: string;
  messageTitle: string;
  image: FluidImage;
  imageAlt: string;
};
export type NotFoundResponse = ExtendedSingleResponse<NotFoundFrontmatter>;

type DownloadFrontmatter = {
  title: string;
  description: string;
  version: string;
};
export type DownloadResponse = ExtendedSingleResponse<DownloadFrontmatter>;

type ToSFrontmatter = {
  title: string;
  description: string;
};
export type ToSResponse = ExtendedSingleResponse<ToSFrontmatter>;

export type FactionFrontmatter = {
  title: string;
  slug: string;
  description: string;
  flag: FixedImage;
};
export type FactionResponse = ExtendedSingleResponse<FactionFrontmatter>;

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

export type Comment = {
  id: number;
  date: string;
  name: string;
  comment: string;
};
type CommentResponse = {
  data: {
    allCommentsYaml: {
      nodes: Comment[];
    };
  };
};

export type FactionsResponse = {
  allMarkdownRemark: {
    nodes: Node<FactionFrontmatter>[];
  };
};

export type PostFrontmatter = {
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
};
export type PostsResponse = ListResponse<PostFrontmatter>;

export type PostResponse = ExtendedSingleResponse<PostFrontmatter> &
  CommentResponse &
  SocialImageResponse;

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
