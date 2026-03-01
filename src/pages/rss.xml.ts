import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../utils/constants";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const articles = await getCollection("articles");
  const published = articles
    .filter((a) => !a.data.draft)
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
    );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: published.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishedAt,
      description: article.data.description,
      link: `/articles/${article.id}/`,
    })),
  });
}
