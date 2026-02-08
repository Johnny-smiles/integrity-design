<template>
    <main id="main">
        <section class="max-w-5xl mx-auto px-6 py-20 space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About {{ siteConfig.siteName }}</h1>

            <!-- Image placeholder: Team or office photo -->
            <div class="image-placeholder aspect-[16/9] rounded-2xl mb-8">
                <span>Team Photo or Office Interior</span>
            </div>

            <p>
                {{ siteConfig.siteName }} brings designers and builders together under one roof in {{ siteConfig.location.city }}. We guide kitchen, bath, and whole-home projects across the Twin Cities east metro with steady, collaborative leadership.
            </p>

            <p>
                Every remodel begins with how you live. We shape layouts, finish palettes, and weekly updates that keep families in Vadnais Heights and Shoreview informed, comfortable, and excited for the reveal.
            </p>

            <!-- Image placeholder: Process or work in progress -->
            <div class="grid md:grid-cols-2 gap-6 py-6">
                <div class="image-placeholder aspect-[4/3] rounded-xl">
                    <span>Design Consultation Photo</span>
                </div>
                <div class="image-placeholder aspect-[4/3] rounded-xl">
                    <span>Construction Process Photo</span>
                </div>
            </div>

            <div class="grid gap-4 md:grid-cols-3 pt-4">
                <div class="rounded-2xl bg-brand-light border border-black/5 p-5">
                    <h2 class="text-lg font-semibold text-brand-dark mb-2">Our Promise</h2>
                    <p class="text-sm text-brand-dark/70">Clear budgets and timelines presented before we demo.</p>
                </div>
                <div class="rounded-2xl bg-white border border-black/5 p-5 shadow-card">
                    <h2 class="text-lg font-semibold text-brand-dark mb-2">Trusted Team</h2>
                    <p class="text-sm text-brand-dark/70">Seasoned designers and craftspeople working as one team.</p>
                </div>
                <div class="rounded-2xl bg-brand-dark text-white p-5">
                    <h2 class="text-lg font-semibold text-white mb-2">Next Step</h2>
                    <p class="text-sm text-white/95 mb-3">Book a design walk-through to explore tailored options.</p>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <NuxtLink to="/contact" class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-brand-primary text-white hover:bg-brand-primary/10">Start the Conversation</NuxtLink>
                        <NuxtLink
                            to="/services/deck-building"
                            class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-white text-white hover:bg-white/10"
                        >
                            Deck Building Services
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

usePageSeo({
    title: 'About Our Team | Integrity Design + Build',
    description: 'Meet the Integrity Design + Build team in White Bear Lake, MN. We guide kitchen, bath, and whole-home remodels with clear budgets and collaborative design.',
    path: '/about'
})

useBreadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
])

// AboutPage + Organization structured data
const sameAsLinks = Object.values(siteConfig.social || {}).filter((link): link is string => Boolean(link))

const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteConfig.siteUrl}/about#aboutpage`,
    name: `About ${siteConfig.siteName}`,
    description: 'Meet the Integrity Design + Build team. We guide kitchen, bath, and whole-home remodels with clear budgets and collaborative design.',
    url: `${siteConfig.siteUrl}/about`
}

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}#organization`,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'sales',
        areaServed: ['US'],
        availableLanguage: ['English']
    },
    sameAs: sameAsLinks.length ? sameAsLinks : undefined
}

useHead({
    script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(aboutPageSchema) },
        { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) }
    ]
})
</script>

