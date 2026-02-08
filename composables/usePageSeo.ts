import { siteConfig } from '~/site.config'

interface PageSeoOptions {
    title: string
    description: string
    path: string
    ogType?: string
    ogImage?: string
}

export const usePageSeo = (options: PageSeoOptions) => {
    const { title, description, path, ogType = 'website', ogImage } = options
    const baseUrl = siteConfig.siteUrl
    const canonicalUrl = `${baseUrl}${path}`
    const imageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/logo.png`

    useHead({
        title,
        meta: [
            { name: 'description', content: description },
            { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            { name: 'author', content: siteConfig.siteName },

            // Open Graph
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: canonicalUrl },
            { property: 'og:type', content: ogType },
            { property: 'og:image', content: imageUrl },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:site_name', content: siteConfig.siteName },
            { property: 'og:locale', content: 'en_US' },

            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: imageUrl },
        ],
        link: [
            { rel: 'canonical', href: canonicalUrl }
        ]
    })
}
