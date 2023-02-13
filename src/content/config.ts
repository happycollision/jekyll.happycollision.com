import { z, defineCollection } from "astro:content"

const songs = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {
  songs,
}
