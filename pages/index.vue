<template>
    <main class="flex flex-col bg-white">
        <!-- HERO (reuse your existing component) -->
        <HeroSection />

        <!-- Services (existing component) -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8 max-w-2xl mx-auto">
                <p class="uppercase tracking-[0.3em] text-sm text-brand-primary">Our Remodeling Services</p>
                <h2 class="text-3xl md:text-4xl font-bold mt-3">Spaces planned for how you live</h2>
                <p class="mt-3 text-neutral-600">Tailored design-build packages for the rooms your family uses most. Tap a service to see how we plan, build, and finish every detail.</p>
            </div>
            <HomepageServices />
            <div class="mt-6 text-center">
                <NuxtLink to="/services/deck-building" class="btn-outline">
                    Explore Deck Building
                </NuxtLink>
            </div>
        </section>

        <!-- Why Choose {{SITE_NAME}} (value props) -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">Why Choose {{ siteConfig.siteName }}</h2>
                <p class="mt-2 text-neutral-600">Homeowners trust us for straight-talk planning, curated finishes, and craftsmanship that feels warm and intentional.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(v, i) in siteConfig.valueProps" :key="'val-'+i" class="bg-white rounded-xl shadow-md p-6">
                    <h3 class="font-semibold text-xl">{{ v.title }}</h3>
                    <p class="mt-2 text-neutral-600">{{ v.text }}</p>
                </div>
            </div>
        </section>

        <!-- About {{SITE_NAME}} -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <!-- Image placeholder: Team photo or completed project -->
                <div class="relative order-2 md:order-1">
                    <div class="image-placeholder aspect-[4/3] rounded-2xl">
                        <span>Team Photo or Featured Project</span>
                    </div>
                </div>
                <div class="order-1 md:order-2">
                    <h2 class="text-3xl md:text-4xl font-bold">About {{ siteConfig.siteName }}</h2>
                    <p class="mt-4 text-neutral-700">
                        {{ siteConfig.siteName }} is a White Bear Lake team guiding east-metro families through kitchens, baths, basements, and whole-home updates with one integrated process.
                    </p>
                    <p class="mt-4 text-neutral-700">
                        Whether it is a Maplewood bungalow or a Shoreview walkout, we combine thoughtful design, organized selections, and respectful crews so every phase feels calm and coordinated.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Plan Your Remodel</NuxtLink>
                        <NuxtLink to="/services/deck-building" class="btn-outline">Deck Building Services</NuxtLink>
                    </div>
                </div>
                <div class="relative hidden">
                    <div class="rounded-3xl bg-brand-light border border-black/5 shadow-card p-6 md:p-8">
                        <div class="grid gap-4">
                            <div class="rounded-2xl bg-white shadow-card p-5">
                                <p class="text-sm uppercase tracking-[0.4em] text-brand-primary">Featured finish</p>
                                <p class="mt-2 text-lg font-semibold text-brand-dark">Brushed brass hardware + matte quartz</p>
                                <p class="mt-3 text-sm text-brand-dark/70">Paired with warm oak flooring and layered lighting for a welcoming kitchen hub.</p>
                            </div>
                            <div class="rounded-2xl bg-brand-dark text-white p-5">
                                <p class="text-sm uppercase tracking-[0.4em] text-white/60">Process snapshot</p>
                                <ol class="mt-4 space-y-2 text-sm text-white/85">
                                    <li>1. In-home design walk-through</li>
                                    <li>2. Selections + budget alignment</li>
                                    <li>3. Build with weekly milestone updates</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Before/After Gallery -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">Recent Transformations</h2>
                <p class="mt-2 text-neutral-600">See how we've helped families reimagine their spaces</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Image placeholder: Before/After 1 -->
                <div class="image-placeholder aspect-[4/3] rounded-xl">
                    <span>Kitchen Before/After</span>
                </div>
                <!-- Image placeholder: Before/After 2 -->
                <div class="image-placeholder aspect-[4/3] rounded-xl">
                    <span>Bathroom Before/After</span>
                </div>
                <!-- Image placeholder: Before/After 3 -->
                <div class="image-placeholder aspect-[4/3] rounded-xl">
                    <span>Basement Before/After</span>
                </div>
            </div>
            <div class="mt-8 text-center">
                <NuxtLink to="/recent-work" class="btn-outline">View All Projects</NuxtLink>
            </div>
        </section>

        <!-- Reviews -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(r, i) in siteConfig.reviews" :key="'rev-'+i" class="bg-white rounded-xl shadow-md p-6">
                    <!-- Optional: Client photo placeholder -->
                    <div class="image-placeholder aspect-square w-16 h-16 rounded-full mb-4 mx-auto">
                        <span class="text-xs">Photo</span>
                    </div>
                    <p class="text-neutral-700">"{{ r.text }}"</p>
                    <p class="mt-3 text-sm text-neutral-500">— {{ r.name }}</p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="my-12 md:my-16">
            <div class="max-w-7xl mx-auto w-full px-6">
                <div class="bg-brand-gradient rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold">Plan your renovation with confidence</h2>
                        <p class="mt-2 text-white/90">Reserve a design discovery visit and we’ll map selections, budget, and timeline together.</p>
                    </div>
                    <div class="flex gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Book a Visit</NuxtLink>
                        <NuxtLink
                            to="/services/deck-building"
                            class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition bg-white text-brand-primary hover:opacity-90"
                        >
                            Deck Building Services
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">FAQs</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(f, i) in siteConfig.faqs" :key="'faq-'+i" class="bg-white rounded-xl shadow-md p-6">
                    <h3 class="font-semibold text-lg">{{ f.q }}</h3>
                    <p class="mt-2 text-neutral-700">{{ f.a }}</p>
                </div>
            </div>
        </section>

        <!-- Service Areas -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-6">
                <h2 class="text-3xl md:text-4xl font-bold">Service Areas</h2>
                <p class="mt-2 text-neutral-600">Proudly remodeling homes in White Bear Lake, Vadnais Heights, Maplewood, Shoreview, and St Paul.</p>
            </div>
            <div class="flex flex-wrap gap-2 justify-center">
        <span
            v-for="(area, i) in siteConfig.serviceAreas"
            :key="'area-'+i"
            class="chip"
        >{{ area }}</span>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import HeroSection      from '~/components/HeroSection.vue'
import HomepageServices from '~/components/HomepageServices.vue'
import { siteConfig }   from '~/site.config'
import { useHead }      from '#imports'

/* ------------------------------------------------------------------
   LocalBusiness structured data tailored for Integrity Design + Build
-------------------------------------------------------------------*/
const sameAsLinks = Object.values(siteConfig.social || {}).filter((link): link is string => Boolean(link))
const structuredData = {
    '@context': 'https://schema.org',
    '@type':    siteConfig.businessType || 'LocalBusiness',
    '@id':      `${siteConfig.siteUrl}/#localbusiness`,
    name:        siteConfig.siteName,
    url:         siteConfig.siteUrl,
    email:       siteConfig.email,
    telephone:   siteConfig.phone,
    description: siteConfig.description,
    image:       siteConfig.socialImage ? `${siteConfig.siteUrl}${siteConfig.socialImage}` : undefined,
    address: {
        '@type':           'PostalAddress',
        streetAddress:     siteConfig.location.street || undefined,
        addressLocality:   siteConfig.location.city,
        addressRegion:     siteConfig.location.state,
        postalCode:        siteConfig.location.zip,
        addressCountry:    siteConfig.location.country
    },
    openingHours: siteConfig.hours,
    areaServed:   siteConfig.serviceAreas,
    sameAs:       sameAsLinks.length ? sameAsLinks : undefined,
    priceRange:   '$$$',
    geo: siteConfig.location.latitude && siteConfig.location.longitude ? {
        '@type':    'GeoCoordinates',
        latitude:   siteConfig.location.latitude,
        longitude:  siteConfig.location.longitude
    } : undefined
}

useHead({
    script: [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }]
})
</script>

<style scoped>
.chip {
    display: inline-flex; align-items: center; gap: .5rem;
    border-radius: 9999px; padding: .35rem .75rem; font-size: .875rem;
    border: 1px solid rgba(0,0,0,.08); background: #fff;
}
</style>
