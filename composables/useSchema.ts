import { siteConfig } from '~/site.config'

const baseUrl = siteConfig.siteUrl
const sameAsLinks = Object.values(siteConfig.social || {}).filter((link): link is string => Boolean(link))

const areaServedSchema = siteConfig.serviceAreas.map(city => ({
    '@type': 'City' as const,
    name: city,
    containedInPlace: { '@type': 'State' as const, name: 'Minnesota' }
}))

export const useSchema = () => {
    const getLocalBusinessSchema = () => ({
        '@context': 'https://schema.org',
        '@type': siteConfig.businessType || 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: siteConfig.siteName,
        url: baseUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        description: siteConfig.description,
        image: `${baseUrl}/logo.png`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.location.street || undefined,
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.state,
            postalCode: siteConfig.location.zip,
            addressCountry: siteConfig.location.country
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00'
        },
        geo: siteConfig.location.latitude && siteConfig.location.longitude ? {
            '@type': 'GeoCoordinates',
            latitude: parseFloat(siteConfig.location.latitude),
            longitude: parseFloat(siteConfig.location.longitude)
        } : undefined,
        areaServed: areaServedSchema,
        sameAs: sameAsLinks.length ? sameAsLinks : undefined,
        priceRange: '$$$',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Remodeling Services',
            itemListElement: siteConfig.services.map(s => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: s.title,
                    description: s.blurb
                }
            }))
        },
        knowsAbout: [
            'kitchen remodeling',
            'bathroom remodeling',
            'basement finishing',
            'home renovation',
            'design-build remodeling',
            'Twin Cities home improvement'
        ]
    })

    const getOrganizationSchema = () => ({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
        name: siteConfig.siteName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.phone,
            contactType: 'sales',
            areaServed: ['US'],
            availableLanguage: ['English']
        },
        sameAs: sameAsLinks.length ? sameAsLinks : undefined
    })

    const getWebSiteSchema = () => ({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`,
        url: baseUrl,
        name: siteConfig.siteName,
        description: siteConfig.description,
        publisher: { '@id': `${baseUrl}#organization` }
    })

    const getFAQPageSchema = (faqs: { q: string; a: string }[]) => ({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
            }
        }))
    })

    const getServiceSchema = (service: { slug: string; title: string; description: string; serviceType: string }) => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${baseUrl}/services/${service.slug}#service`,
        name: service.title,
        description: service.description,
        url: `${baseUrl}/services/${service.slug}`,
        serviceType: service.serviceType,
        provider: {
            '@type': siteConfig.businessType || 'HomeAndConstructionBusiness',
            name: siteConfig.siteName,
            url: baseUrl,
            telephone: siteConfig.phone
        },
        areaServed: areaServedSchema
    })

    const getContactPageSchema = () => ({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${baseUrl}/contact#contactpage`,
        name: `Contact ${siteConfig.siteName}`,
        description: 'Request a design consultation for your kitchen, bathroom, or basement remodel.',
        url: `${baseUrl}/contact`
    })

    const getAboutPageSchema = () => ({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${baseUrl}/about#aboutpage`,
        name: `About ${siteConfig.siteName}`,
        description: 'Meet the Integrity Design + Build team. We guide kitchen, bath, and whole-home remodels with clear budgets and collaborative design.',
        url: `${baseUrl}/about`
    })

    return {
        getLocalBusinessSchema,
        getOrganizationSchema,
        getWebSiteSchema,
        getFAQPageSchema,
        getServiceSchema,
        getContactPageSchema,
        getAboutPageSchema
    }
}
