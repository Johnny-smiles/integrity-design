<template>
  <main class="service-page bg-white">
    <section class="hero bg-brand-light text-center py-16 px-6">
      <p class="uppercase tracking-[0.3em] text-sm text-brand-primary mb-3">Signature Service</p>
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Deck Building in White Bear Lake & the Twin Cities</h1>
      <p class="max-w-3xl mx-auto text-lg text-brand-dark/80">
        Engineered, code-compliant decks built with premium framing, low-maintenance materials, and integrated lighting so your outdoor living space feels as refined as the rest of your home.
      </p>
      
      <div class="image-placeholder aspect-[21/9] rounded-2xl max-w-5xl mx-auto my-8">
        <span>Featured Deck Building Photo</span>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mt-8">
        <NuxtLink to="/contact" class="btn-primary">Schedule a Deck Consult</NuxtLink>
        <a :href="`tel:${siteConfig.phone}`" class="btn-accent">Call {{ siteConfig.phoneDisplay }}</a>
      </div>
    </section>

    <section class="content max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
      <div class="space-y-8">
        <div>
          <h2 class="text-3xl font-semibold text-brand-dark mb-4">Built for Minnesota seasons</h2>
          <p class="text-brand-dark/80">
            We begin every deck project with a site study and design workshop. Together we review setbacks, utilities, views, and how you plan to host so the layout—multi-levels, pergolas, or screen rooms—supports the way you live. Then we engineer footing depth, ledger flashing, and structural spans for long-term durability.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">What&apos;s included</h3>
          <ul class="list-disc pl-6 space-y-2 text-brand-dark/80">
            <li>Composite, PVC, or cedar decking installed with hidden fasteners.</li>
            <li>Powder-coated aluminum, cable, or glass railings with integrated lighting.</li>
            <li>Helical piers or concrete footings sized for soil conditions and loads.</li>
            <li>Built-in seating, planters, and dry-under systems for walk-out lower levels.</li>
            <li>Permitting, inspections, and neighborhood approvals managed start to finish.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Deck building process</h3>
          <ol class="space-y-3 text-brand-dark/80">
            <li><strong>1. Design + engineering</strong> — renderings, material palettes, and structural plans stamped for code.</li>
            <li><strong>2. Procurement</strong> — we order decking, rail systems, lighting, and specialty hardware upfront to protect timelines.</li>
            <li><strong>3. Build + detailing</strong> — respectful crews manage demo, framing, finish carpentry, and punch walks with daily updates.</li>
          </ol>
        </div>
        <div class="rounded-2xl bg-brand-neutral/60 border border-black/5 p-6">
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Pair your deck with other upgrades</h3>
          <p class="text-brand-dark/80 mb-4">Planning a kitchen or basement remodel, too? Our design-build team keeps everything under one schedule so interior and exterior updates feel cohesive.</p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/services/kitchen-remodeling" class="btn-outline">Kitchen Remodeling</NuxtLink>
            <NuxtLink to="/services/basement-finishing" class="btn-outline">Basement Finishing</NuxtLink>
          </div>
        </div>
      </div>

      <aside class="space-y-6">
        <div class="image-placeholder aspect-[4/3] rounded-xl">
          <span>Deck Detail Photo</span>
        </div>

        <div class="rounded-2xl bg-white border border-black/5 shadow-card p-6">
          <h3 class="text-xl font-semibold text-brand-dark mb-3">Deck package snapshot</h3>
          <dl class="space-y-3 text-brand-dark/80">
            <div>
              <dt class="font-semibold">Typical timelines</dt>
              <dd>6–10 weeks depending on scope and permitting.</dd>
            </div>
            <div>
              <dt class="font-semibold">Popular materials</dt>
              <dd>TimberTech AZEK, Trex Transcend Lineage, maintenance-free railings, and cable systems.</dd>
            </div>
            <div>
              <dt class="font-semibold">Enhancements</dt>
              <dd>Lighting scenes, heaters, privacy screens, outdoor kitchens, and integrated audio.</dd>
            </div>
          </dl>
        </div>
        <div class="rounded-2xl bg-brand-dark text-white p-6 space-y-4">
          <h3 class="text-2xl font-semibold">Ready to design your deck?</h3>
          <p class="text-white/85">Share photos of your backyard or existing deck and we&apos;ll prepare concepts before our in-home visit.</p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-primary inline-flex">Start the Conversation</NuxtLink>
            <a :href="`mailto:${siteConfig.email}`" class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-brand-primary text-white hover:bg-brand-primary/10">Email Plans</a>
          </div>
        </div>
      </aside>
    </section>

    <section class="bg-brand-light py-16 px-6">
      <div class="max-w-5xl mx-auto space-y-6 text-center">
        <h2 class="text-3xl font-bold text-brand-dark">Deck Building FAQs</h2>
        <div class="grid gap-6 md:grid-cols-2 text-left">
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">What areas do you serve?</h3>
            <p class="text-brand-dark/80 mt-2">White Bear Lake, Vadnais Heights, Maplewood, Shoreview, Stillwater, St Paul, and nearby communities.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Do you repair existing decks?</h3>
            <p class="text-brand-dark/80 mt-2">We evaluate the structure, then advise whether resurfacing or a full rebuild will deliver the safest, longest-lasting result.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Can you add screened porches?</h3>
            <p class="text-brand-dark/80 mt-2">Yes. We design screen rooms, pergolas, and covered decks that tie into your home&apos;s architecture.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">How do you keep job sites tidy?</h3>
            <p class="text-brand-dark/80 mt-2">Daily cleanup, protected landscaping, and magnet sweeps around the yard keep your property safe for kids and pets.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto bg-brand-gradient rounded-2xl p-8 text-white text-center space-y-4">
        <h2 class="text-3xl font-bold">Let&apos;s design your next-level deck</h2>
        <p class="text-white/85">Tell us how you plan to use the space and we&apos;ll provide a concept, budget range, and build schedule.</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <NuxtLink to="/contact" class="btn-primary">Book a Consultation</NuxtLink>
          <a :href="`tel:${siteConfig.phone}`" class="btn-accent">Call {{ siteConfig.phoneDisplay }}</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

usePageSeo({
    title: 'Deck Building | Integrity Design + Build',
    description: 'Integrity Design + Build crafts custom deck builds in White Bear Lake and the Twin Cities east metro with engineered framing, premium materials, and seamless project management.',
    path: '/services/deck-building',
    ogImage: '/images/deck-building.svg'
})

useBreadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Deck Building', path: '/services/deck-building' }
])

const { getServiceSchema } = useSchema()

useHead({
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(getServiceSchema({
            slug: 'deck-building',
            title: 'Deck Building',
            description: 'Integrity Design + Build crafts custom deck builds in White Bear Lake and the Twin Cities east metro with engineered framing, premium materials, and seamless project management.',
            serviceType: 'Custom Deck Construction'
        }))
    }]
})
</script>
