type ShowSong = { slug: string | string[]; feat?: string | undefined }
type ShowSet = ShowSong[]
type Show = { name: string; slug: string; sets: ShowSet[] }

export const shows: Show[] = [
  {
    name: "St. Patrick's 2023",
    slug: "2023-03",
    sets: [
      [
        { slug: "boys-are-back", feat: "WP" },
        { slug: "drink-the-night-away", feat: "WP" },
        { slug: "bvb", feat: "WP" },
        { slug: "paddy-murphy-died", feat: "WP" },
        { slug: "father-mallorys-dance", feat: "Don" },
        { slug: "nelsons-blood", feat: "Don" },
        { slug: "fightin-nolan", feat: "WP" },
        { slug: "kiss-me-im-irish", feat: "WP" },
        { slug: "peggy-gordon", feat: "Nick" },
        { slug: "dirty-old-town", feat: "WP" },
        { slug: "irish-rover", feat: "WP" },
        { slug: "spanish-lady", feat: "Don" },
        { slug: "rattlin-bog", feat: "Adam" },
        { slug: "galway-girl", feat: "Nick" },
        { slug: "wild-rover", feat: "WP" },
      ],
      [
        { slug: "drunken-sailor", feat: "WP" },
        { slug: "paddy-on-the-railway", feat: "WP" },
        { slug: "big-strong-man", feat: "Adam" },
        { slug: "molly-malone", feat: "WP" },
        { slug: ["oh-maggie_g", "oh-maggie_a"], feat: "Nick" },
        { slug: "come-my-friends", feat: "Don" },
        { slug: "son-never-shines", feat: "Don" },
        { slug: "danny-boy", feat: "Don" },
        { slug: ["caledonia_a", "caledonia_g"], feat: "Don" },
        { slug: "road-to-ruin", feat: "WP" },
        { slug: "jack-dolan", feat: "WP" },
        { slug: "new-york-girls", feat: "WP" },
        { slug: "mary-mac", feat: "Adam" },
      ],
      [
        { slug: "nancy-whiskey", feat: "WP" },
        { slug: "star-of-the-county-down", feat: "Don" },
        { slug: "rosie", feat: "WP" },
        { slug: "tell-me-ma", feat: "WP" },
        { slug: "black-and-tans", feat: "WP" },
        { slug: "wagon-wheel", feat: "Don" },
        { slug: "jock-stuart", feat: "WP" },
        { slug: "go-lassie-go", feat: "Nick" },
        { slug: "water-is-wide", feat: "Don" },
        { slug: "mike-dempsey", feat: "WP" },
        { slug: "scotsman", feat: "Adam" },
        { slug: "whiskey-in-the-world", feat: "WP" },
        { slug: "queen-of-argyll", feat: "WP" },
        { slug: "whiskey-in-the-jar", feat: "WP" },
      ],
    ],
  },
]
