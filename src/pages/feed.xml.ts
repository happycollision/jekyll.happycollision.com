import type { MarkdownInstance } from "astro"
import rss from "@astrojs/rss"
import sanitizeHtml from "sanitize-html"

// Works with Markdown files only!
const postImportResult = import.meta.glob<
  true,
  string,
  MarkdownInstance<{ title: string; date: string }>
>("./20[0-9][0-9]/**/*.md", { eager: true })
const posts = Object.values(postImportResult)

export const get = () =>
  rss({
    title: "Happy Collision",
    description: "The mostly technical musings of Don Denton.",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url as string,
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.date),
      content: sanitizeHtml(post.compiledContent()),
    })),
  })
