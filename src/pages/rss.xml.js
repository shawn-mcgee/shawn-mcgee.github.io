import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const ideas = await getCollection("ideas")

  function slug(idea) {
    let slug = idea.filePath
    slug = slug?.replace(/^idea\//, "");
    slug = slug?.replace(/\.mdx?$/, "");
    return slug;
  }

  return rss({
    // `<title>` field in output xml
    title: "Shawn McGee's Blog",
    // `<description>` field in output xml
    description: "Full-Time Dad, Part-Time DM, Some-Time Programmer",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: ideas.map(idea => ({
      title      : idea.data.title,
      pubDate    : idea.data.pubDate,
      description: idea.data.description,
      link: `/idea/${slug(idea)}`,
    })),

    trailingSlash: false,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,

    stylesheet: "/rss/styles.xsl"
  });
}