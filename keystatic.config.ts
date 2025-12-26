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
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                // 1. Basic Article Info
                title: fields.slug({ name: { label: 'Article Headline' } }),
                date: fields.date({
                    label: 'Publish Date',
                    validation: { isRequired: true },
                    defaultValue: { kind: 'today' }
                }),
                author: fields.text({
                    label: 'Author Name',
                    defaultValue: 'The Times Clock'
                }),
                featuredImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                    validation: { isRequired: true }
                }),

                // 2. Advanced SEO (RankMath Style)
                seo: fields.object({
                    customTitle: fields.text({
                        label: 'SEO Title (Blue Link)',
                        description: 'Overwrites the main title for Google.'
                    }),
                    metaDescription: fields.text({
                        label: 'Meta Description',
                        description: 'The short text in Google results.',
                        multiline: true
                    }),
                    canonicalUrl: fields.text({
                        label: 'Canonical URL',
                        description: 'Only use if reposting content.'
                    }),
                    noIndex: fields.checkbox({
                        label: 'Hide from Google (NoIndex)',
                        defaultValue: false
                    })
                }, { label: '🚀 SEO Settings' }),

                // 3. The Content
                content: fields.document({
                    label: 'Article Body',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/content',
                        publicPath: '/images/content/'
                    },
                    tables: true,
                }),
            },
        }),
    },
});