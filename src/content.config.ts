import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const images = import.meta.glob<{ default: ImageMetadata }>("/content/_img/*.{jpeg,jpg,png,gif}");


const transformImagePath = (imagePath: string, filePath: string) => imagePath.replace("..", `/content`)

const image = (filePath: string) => z.string().transform((imgPath) => transformImagePath(imgPath, filePath))
const optionalImage = (filePath: string) => z.string().optional().transform((imgPath) => imgPath ? transformImagePath(imgPath, filePath) : undefined)

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.array(z.string()),
    published: z.boolean().default(false),
    excerpt: z.string(),
  }),
});

const factions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/factions' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    flag: image("../.."),
    description: z.string().optional().default(''),
  }),
});

const downloads = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/downloads' }),
  schema: z.object({
    title: z.string(),
    releaseBlog: z.string().optional(),
    installationTutorial: z.string().optional(),
    links: z.array(z.object({ host: z.string(), link: z.string() })).default([]),
  }),
});

const comments = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './content/comments' }),
  schema: z.object({
    _id: z.string(),
    blogSlug: z.string(),
    name: z.string(),
    comment: z.string(),
    date: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    heroImage: optionalImage(".."),
    heroLogo: optionalImage(".."),
    heroLogoAlt: z.string().optional(),
    heroText: z.string().optional(),
    infoBoxes: z
      .array(z.object({ text: z.string(), image: image(".."), imgAlt: z.string() }))
      .optional(),
    contributorsTitle: z.string().optional(),
    contributors: z.array(z.object({ avatar: image(".."), name: z.string() })).optional(),
    mainDownload: z.string().optional(),
    messageTitle: z.string().optional(),
    image: optionalImage(".."),
    imageAlt: z.string().optional(),
  }),
});

const download = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/download' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    mainDownload: z.string(),
  }),
});

const general = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/general' }),
  schema: z.object({
    siteBuilders: z.array(z.object({ name: z.string(), link: z.string() })),
    socialMedia: z.array(z.object({ platform: z.string(), link: z.string() })),
  }),
});

export const collections = {
  posts,
  factions,
  downloads,
  comments,
  pages,
  download,
  general,
};
