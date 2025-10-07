export const useSchema = () => {
  const { siteConfig } = useSiteConfig()
  const sameAsLinks = Object.values(siteConfig.social || {}).filter((link: string | undefined) => Boolean(link))
  
  const getLocalBusinessSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': siteConfig.businessType || 'LocalBusiness',
      '@id': `${siteConfig.siteUrl}/#localbusiness`,
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      description: siteConfig.description,
      image: siteConfig.socialImage ? `${siteConfig.siteUrl}${siteConfig.socialImage}` : undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.location.street || undefined,
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        postalCode: siteConfig.location.zip,
        addressCountry: siteConfig.location.country
      },
      openingHours: siteConfig.hours,
      geo: siteConfig.location.latitude && siteConfig.location.longitude ? {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.location.latitude,
        longitude: siteConfig.location.longitude
      } : undefined,
      areaServed: siteConfig.serviceAreas,
      sameAs: sameAsLinks.length ? sameAsLinks : undefined,
      priceRange: '$$$',
      ...(siteConfig.businessType === 'HVACBusiness' && {
        '@type': 'HVACBusiness',
        serviceType: 'Heating, Ventilation, and Air Conditioning'
      }),
      ...(siteConfig.businessType === 'AutoRepair' && {
        '@type': 'AutoRepair',
        serviceType: 'Automotive Repair Services'
      })
    }
  }
  
  const getServiceSchema = (service: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${siteConfig.siteUrl}/services/${service.slug}#service`,
      name: service.title,
      description: service.summary,
      areaServed: siteConfig.serviceAreas,
      provider: {
        '@type': siteConfig.businessType || 'LocalBusiness',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phone,
        image: siteConfig.socialImage ? `${siteConfig.siteUrl}${siteConfig.socialImage}` : undefined,
        areaServed: siteConfig.serviceAreas
      },
      serviceType: service.title,
      url: `${siteConfig.siteUrl}/services/${service.slug}`
    }
  }
  
  return {
    getLocalBusinessSchema,
    getServiceSchema
  }
}
