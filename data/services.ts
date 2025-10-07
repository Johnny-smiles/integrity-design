export type Service = {
  slug: string
  title: string
  summary: string
  bullets: string[]
  schemaType?: 'Service' | 'HVACBusiness' | 'AutoRepair' // optional
  // SEO enhancements
  metaDescription?: string
  keywords?: string[]
  content?: string // Full page content for SEO
  image?: string // Service-specific image
}

export const services: Service[] = [
  // Default placeholders—Codex / setup can rewrite these per client/industry
  { 
    slug: 'service-a', 
    title: 'Service A', 
    summary: 'Short description of Service A.',
    metaDescription: 'Professional Service A in your area. Expert service with guaranteed results.',
    keywords: ['service a', 'professional service', 'local business'],
    bullets: [
      'Key benefit one', 'Key benefit two', 'Key benefit three'
    ],
    content: 'Detailed content about Service A. This is where you can add comprehensive information about the service, process, benefits, and anything else that helps with SEO and user experience.',
    image: '/service-a.jpg'
  },
  { 
    slug: 'service-b', 
    title: 'Service B', 
    summary: 'Short description of Service B.',
    metaDescription: 'Quality Service B solutions. Trusted professionals with years of experience.',
    keywords: ['service b', 'quality service', 'professional solutions'],
    bullets: [
      'Feature one', 'Feature two', 'Feature three'
    ],
    content: 'Comprehensive information about Service B. Include detailed descriptions, processes, benefits, and any other relevant content that helps both users and search engines understand the service.',
    image: '/service-b.jpg'
  },
  { 
    slug: 'service-c', 
    title: 'Service C', 
    summary: 'Short description of Service C.',
    metaDescription: 'Expert Service C professionals. Reliable service with excellent results.',
    keywords: ['service c', 'expert service', 'reliable professionals'],
    bullets: [
      'Advantage one', 'Advantage two', 'Advantage three'
    ],
    content: 'In-depth coverage of Service C. This section allows for rich content that can include case studies, detailed processes, testimonials, and other SEO-friendly content.',
    image: '/service-c.jpg'
  },
]
