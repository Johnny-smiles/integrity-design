<template>
  <main>
    <section class="relative overflow-hidden bg-brand-dark text-white">
      <div class="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(177,18,18,0.25),_transparent_60%)]" aria-hidden="true" />
      <div class="max-w-6xl mx-auto px-6 py-20 lg:py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div class="space-y-6">
          <p class="text-sm uppercase tracking-[0.4em] text-white/70">Recent Work</p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">Renovations that feel considered in every detail</h1>
          <p class="text-lg text-white/80">A glimpse at kitchens, baths, and lower levels we recently completed across the Twin Cities east metro. Each project blends thoughtful design, organized selections, and craftsmanship that stands up to family life.</p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a Walk-Through</NuxtLink>
            <NuxtLink to="/services" class="inline-flex items-center font-semibold underline underline-offset-4">
              View All Services
            </NuxtLink>
          </div>
        </div>
        <div class="relative">
          <div class="rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-6">
            <NuxtImg src="/images/kitchen-remodel.svg" alt="Render of a modern kitchen renovation" class="rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold">Featured Renovations</h2>
        <p class="text-brand-dark/80">Three recent Integrity Design + Build projects that showcase how we plan, communicate, and craft welcoming spaces for families in White Bear Lake, Shoreview, and St Paul.</p>
      </div>
      <div class="grid gap-10 lg:grid-cols-3">
        <article v-for="project in caseStudies" :key="project.title" class="rounded-3xl border border-black/5 shadow-card overflow-hidden bg-white flex flex-col">
          <NuxtImg :src="project.image" :alt="project.imageAlt" class="w-full h-52 object-cover" />
          <div class="p-6 space-y-4 flex-1 flex flex-col">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-brand-primary">{{ project.location }}</p>
              <h3 class="text-2xl font-semibold mt-2">{{ project.title }}</h3>
            </div>
            <p class="text-brand-dark/75">{{ project.summary }}</p>
            <ul class="space-y-2 text-sm text-brand-dark/70">
              <li v-for="highlight in project.highlights" :key="highlight" class="flex items-start gap-2">
                <span class="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
            <div class="mt-auto pt-4">
              <NuxtLink :to="project.link" class="btn-primary inline-flex">{{ project.cta }}</NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-brand-light">
      <div class="max-w-6xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div class="rounded-3xl bg-white border border-black/5 shadow-card p-8 space-y-5">
          <h2 class="text-3xl font-bold">How we bring each space to life</h2>
          <ol class="space-y-4 text-brand-dark/80">
            <li><strong>1. Discovery walk-through</strong> — align on goals, budget, and timeline while gathering measurements.</li>
            <li><strong>2. Design lab sessions</strong> — refine layouts, finishes, and palettes alongside our designers.</li>
            <li><strong>3. Build with clarity</strong> — weekly milestone updates, protected job sites, and a polished handoff.</li>
          </ol>
        </div>
        <div class="rounded-3xl bg-brand-dark text-white p-8 space-y-4">
          <h3 class="text-2xl font-semibold">Material palettes we love right now</h3>
          <ul class="space-y-3 text-white/80">
            <li>Warm oak, matte quartz, and brushed brass hardware.</li>
            <li>Charcoal tile, white oak vanities, and satin black plumbing.</li>
            <li>Layered lighting with soft whites and dimmable accents.</li>
          </ul>
          <NuxtLink to="/contact" class="btn-accent inline-flex mt-2">Share Your Vision</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '#imports'
import { siteConfig } from '~/site.config'

type CaseStudy = {
  title: string
  location: string
  summary: string
  highlights: string[]
  image: string
  imageAlt: string
  link: string
  cta: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Bright Gathering Kitchen',
    location: 'St Paul, MN',
    summary: 'Removed walls to open the main level, added a prep pantry, and layered lighting for lively family dinners.',
    highlights: [
      'Custom white oak cabinetry with hidden storage',
      'Quartz waterfall island with seating for five',
      'Weekly punch walks kept schedule on track'
    ],
    image: '/images/kitchen-remodel.svg',
    imageAlt: 'Kitchen rendering with warm wood cabinetry',
    link: '/services/kitchen-remodeling',
    cta: 'See Kitchen Services'
  },
  {
    title: 'Spa Bath Retreat',
    location: 'Shoreview, MN',
    summary: 'Converted a dated bath into a calm retreat with heated floors, layered lighting, and a curbless shower.',
    highlights: [
      'Custom walnut vanity with integrated linen tower',
      'Large-format porcelain tile and matte black fixtures',
      'Steam shower with frameless glass enclosure'
    ],
    image: '/images/bathroom-remodel.svg',
    imageAlt: 'Bathroom rendering with soaking tub and vanity',
    link: '/services/bathroom-remodeling',
    cta: 'Explore Bathroom Work'
  },
  {
    title: 'Lower-Level Living Suite',
    location: 'White Bear Lake, MN',
    summary: 'Finished a blank-slate basement with a media lounge, guest bedroom, and wet bar for easy entertaining.',
    highlights: [
      'Moisture mitigation and insulation upgrades',
      'Custom built-ins with integrated sound system',
      'Wet bar with beverage fridge and quartz tops'
    ],
    image: '/images/basement-finishing.svg',
    imageAlt: 'Basement rendering with sectional seating',
    link: '/services/basement-finishing',
    cta: 'View Basement Finishing'
  }
]

const pageDescription = 'Integrity Design + Build showcases recent kitchen, bathroom, and basement renovations crafted across the Twin Cities east metro.'

useHead({
  title: `Recent Projects | ${siteConfig.siteName}`,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: `Recent Projects | ${siteConfig.siteName}` },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: `${siteConfig.siteUrl}${siteConfig.socialImage}` },
    { property: 'og:url', content: `${siteConfig.siteUrl}/recent-work` },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Recent Projects | ${siteConfig.siteName}` },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: `${siteConfig.siteUrl}${siteConfig.socialImage}` }
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.siteUrl}/recent-work` }]
})

const structuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteConfig.siteUrl}/recent-work#collection`,
  name: `Recent projects by ${siteConfig.siteName}`,
  description: pageDescription,
  url: `${siteConfig.siteUrl}/recent-work`,
  hasPart: caseStudies.map(project => ({
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    image: `${siteConfig.siteUrl}${project.image}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.siteUrl}${project.link}`
    },
    locationCreated: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.location
      }
    }
  }))
}))

useHead({
  script: [{ type: 'application/ld+json', children: JSON.stringify(structuredData.value) }]
})
</script>
