import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ site, url }) => {
  const baseUrl = site ?? new URL(url.origin);
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const itemsXml = posts
    .map((post) => {
      const postUrl = new URL(`/blog/${post.id}/`, baseUrl).toString();
      const categoriesXml = post.data.tags
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join('');

      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      ${categoriesXml}
    </item>`;
    })
    .join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.title)}</title>
    <description>${escapeXml(SITE.description)}</description>
    <link>${escapeXml(baseUrl.toString())}</link>
    <atom:link href="${escapeXml(new URL('/rss.xml', baseUrl).toString())}" rel="self" type="application/rss+xml" />
    <language>id</language>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
