import { siteConfig } from '~/site.config'

interface BreadcrumbItem {
    name: string
    path: string
}

export const useBreadcrumbs = (items: BreadcrumbItem[]) => {
    const baseUrl = siteConfig.siteUrl

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.path}`
        }))
    }

    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(breadcrumbSchema)
            }
        ]
    })
}
