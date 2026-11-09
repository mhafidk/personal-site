import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { EXPERIENCE } from '../data/site';

function stripMarkdown(raw: string): string {
  return raw
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$\n]+\$/g, ' ')
    .replace(/[#>*_`~\[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const blogItems = sortedPosts.map((post) => ({
    type: 'Article',
    title: post.data.title,
    description: post.data.description,
    url: `/blog/${post.id}`,
    date: post.data.pubDate.toISOString().slice(0, 10),
    tags: post.data.tags,
    body: stripMarkdown(post.body ?? '').slice(0, 1200),
  }));

  const experienceItems = EXPERIENCE.map((exp) => ({
    type: 'Experience',
    title: `${exp.role} · ${exp.company}`,
    description: exp.summary || exp.highlights[0] || '',
    url: `/#experience`,
    date: exp.period,
    tags: exp.stack ?? [],
    body: `${exp.summary ?? ''} ${exp.highlights.join(' ')} ${(exp.stack ?? []).join(' ')}`.trim(),
  }));

  return new Response(
    JSON.stringify([...blogItems, ...experienceItems]),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  );
};
