import { z, defineCollection } from "astro:content"

const songs = defineCollection({
  schema: z.object({
    title: z.string(),
    reminder: z.optional(z.string()),
    altTitle: z.optional(z.string()),
  }),
})

export const collections = {
  songs,
}
