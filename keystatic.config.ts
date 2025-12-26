// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
     storage: {
    kind: 'github',
    // 👇 Your Repo Name (Double check this matches your GitHub exactly)
    repo: 'thesoulpixel/ttc-frontend-astro', 
  },
    collections: {
        posts: collection({
            label: 'New Stories',
            slugField: 'slug',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                slug: fields.slug({
                    name: { label: 'Article Headline' },
                }),

                title: fields.text({
                    label: 'Display Title',
                }),

                date: fields.date({
                    label: 'Publish Date',
                    defaultValue: { kind: 'today' },
                }),

                author: fields.text({
                    label: 'Author Name',
                    defaultValue: 'The Times Clock',
                }),

                featuredImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                }),

                seo: fields.object({
                    title: fields.text({ label: 'SEO Title' }),
                    description: fields.text({
                        label: 'Meta Description',
                        multiline: true,
                    }),
                    canonical: fields.text({ label: 'Canonical URL' }),
                    noindex: fields.checkbox({ label: 'No Index', defaultValue: false }),
                }),

                content: fields.document({
                    label: 'Article Body',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/content',
                        publicPath: '/images/content/',
                    },
                    tables: true,
                }),
            },
        }),
    },
});
