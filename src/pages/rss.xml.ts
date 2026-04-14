import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { createPostSlug } from '../lib/slug';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', p => p.data.published);
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Imperial Splendour',
    description: 'Imperial Splendour: Rise of the Republic — development blog',
    site: context.site!,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog/${createPostSlug(post.data.title, post.data.date)}`,
    })),
  });
}
