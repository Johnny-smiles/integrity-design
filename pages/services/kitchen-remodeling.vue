<template>
  <main class="service-page bg-white">
    <section class="hero bg-brand-light text-center py-16 px-6">
      <p class="uppercase tracking-[0.3em] text-sm text-brand-primary mb-3">Kitchen Remodeling</p>
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Chef-Ready Kitchens for White Bear Lake Homes</h1>
      <p class="max-w-3xl mx-auto text-lg text-brand-dark/80">
        We plan every renovation around the way you cook, host, and move through the space. From structural changes that open the main level to cabinetry systems that hide small appliances, each choice is coordinated by one design-build team so selections, schedule, and budget stay aligned.
      </p>
      
      <!-- Image placeholder: Kitchen hero -->
      <div class="image-placeholder aspect-[21/9] rounded-2xl max-w-5xl mx-auto my-8">
        <span>Featured Kitchen Remodel Photo</span>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mt-8">
        <NuxtLink to="/contact" class="btn-primary">Book a Kitchen Walk-Through</NuxtLink>
        <a :href="`tel:${siteConfig.phone}`" class="btn-accent">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
      </div>
    </section>

    <section class="content max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
      <div class="space-y-8 text-brand-dark/85">
        <div>
          <h2 class="text-3xl font-semibold text-brand-dark mb-4">Layouts that balance beauty and workflow</h2>
          <p>
            Every kitchen begins with listening. We document how many people cook at once, where groceries get set down, and which views you want to highlight. Then we map work triangles, appliance zones, and traffic paths that make meal prep effortless whether you are wrangling weeknight dinners or hosting a crowd after a hockey game. Structural updates, like removing walls or widening openings, are engineered in-house so the finished space feels original to your home.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">What&apos;s included</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Custom cabinetry with storage inserts, paneled appliances, and interior lighting.</li>
            <li>Quartz, Dekton, butcher block, or natural stone countertops with curated edge profiles.</li>
            <li>Layered lighting plans covering ambient, task, and accent fixtures with smart dimming.</li>
            <li>Flooring, tile, hardware, and plumbing packages coordinated for durability and style.</li>
            <li>Permitting, inspections, and daily site protection handled by the same respectful crew.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Remodel roadmap</h3>
          <ol class="space-y-3">
            <li><strong>1. Design lab session</strong> — mood boards, elevations, and 3D visuals that dial in finishes before deposits are due.</li>
            <li><strong>2. Pre-construction</strong> — final measurements, cabinet shop drawings, and procurement to keep lead times on track.</li>
            <li><strong>3. Build + detailing</strong> — demo, framing, mechanical updates, cabinetry, and final punch completed with transparent updates.</li>
          </ol>
        </div>
        <div class="rounded-2xl bg-brand-neutral/60 border border-black/5 p-6">
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Pair your kitchen with adjacent spaces</h3>
          <p class="mb-4">
            Thinking about refreshing the mudroom, pantry, or outdoor entertaining area at the same time? Our integrated team keeps multi-room projects under one schedule so finishes feel cohesive and you only have to live through one construction window.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/services/deck-building" class="btn-outline">Deck Building</NuxtLink>
            <NuxtLink to="/services/basement-finishing" class="btn-outline">Basement Finishing</NuxtLink>
          </div>
        </div>
      </div>

      <aside class="space-y-6">
        <!-- Image placeholder: Kitchen detail shot -->
        <div class="image-placeholder aspect-[4/3] rounded-xl">
          <span>Kitchen Detail Photo</span>
        </div>

        <div class="rounded-2xl bg-white border border-black/5 shadow-card p-6">
          <h3 class="text-xl font-semibold text-brand-dark mb-3">Kitchen snapshot</h3>
          <dl class="space-y-3">
            <div>
              <dt class="font-semibold">Typical timelines</dt>
              <dd>8–12 weeks once materials are on site, with weekly schedule reviews.</dd>
            </div>
            <div>
              <dt class="font-semibold">Popular materials</dt>
              <dd>Inset white oak cabinetry, matte black hardware, quartz slabs, artisan tile.</dd>
            </div>
            <div>
              <dt class="font-semibold">Enhancements</dt>
              <dd>Hidden pantries, appliance garages, coffee stations, and statement hoods.</dd>
            </div>
          </dl>
        </div>
        <div class="rounded-2xl bg-brand-dark text-white p-6 space-y-4">
          <h3 class="text-2xl font-semibold">Ready to plan your kitchen?</h3>
          <p class="text-white/85">
            Share inspiration boards or photos of your current space and we&apos;ll prep design concepts before our in-home consultation.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-primary inline-flex">Start the Conversation</NuxtLink>
            <a :href="`mailto:${siteConfig.email}`" class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-white text-white hover:bg-white/10">Email Plans</a>
          </div>
        </div>
      </aside>
    </section>

    <section class="bg-brand-light py-16 px-6">
      <div class="max-w-5xl mx-auto space-y-6 text-center">
        <h2 class="text-3xl font-bold text-brand-dark">Kitchen Remodeling FAQs</h2>
        <div class="grid gap-6 md:grid-cols-2 text-left">
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Can we stay in the home?</h3>
            <p class="text-brand-dark/80 mt-2">Yes. We build temporary cooking stations, protect pathways, and maintain daily cleanup so your family can stay comfortable.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Do you help with appliances?</h3>
            <p class="text-brand-dark/80 mt-2">We coordinate appliance packages, electrical needs, and ventilation so cabinetry and panels fit perfectly.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">What about permits?</h3>
            <p class="text-brand-dark/80 mt-2">Our team handles permits and inspections for structural changes, plumbing, electrical, and mechanical upgrades.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Can you add natural light?</h3>
            <p class="text-brand-dark/80 mt-2">We regularly incorporate new windows, enlarged openings, or patio doors to blend the kitchen with outdoor entertaining areas.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto bg-brand-gradient rounded-2xl p-8 text-white text-center space-y-4">
        <h2 class="text-3xl font-bold">Map out your kitchen renovation</h2>
        <p class="text-white/85">Schedule a discovery visit and we&apos;ll review layout options, finish palettes, and a phased budget that fits your goals.</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <NuxtLink to="/contact" class="btn-primary">Book a Consultation</NuxtLink>
          <a :href="`tel:${siteConfig.phone}`" class="btn-accent">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

const pageTitle = 'Kitchen Remodeling | Integrity Design + Build'
const pageDescription = 'Integrity Design + Build plans chef-ready kitchen remodels in White Bear Lake and the Twin Cities with custom cabinetry, curated finishes, and a streamlined design-build process.'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'kitchen remodeling, custom kitchens, White Bear Lake kitchen contractor, Twin Cities design build' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `${siteConfig.siteUrl}/services/kitchen-remodeling` },
    { property: 'og:image', content: `${siteConfig.siteUrl}/images/kitchen-remodel.svg` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.siteUrl}/services/kitchen-remodeling` }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Kitchen Remodeling',
        serviceType: 'Kitchen Renovation',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          telephone: siteConfig.phone,
          areaServed: siteConfig.serviceAreas
        },
        areaServed: siteConfig.serviceAreas,
        description: pageDescription,
        url: `${siteConfig.siteUrl}/services/kitchen-remodeling`
      })
    }
  ]
})
</script>

