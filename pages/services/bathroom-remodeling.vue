<template>
  <main class="service-page bg-white">
    <section class="hero bg-brand-light text-center py-16 px-6">
      <p class="uppercase tracking-[0.3em] text-sm text-brand-primary mb-3">Bathroom Remodeling</p>
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Spa-Level Bathrooms Built for Real Life</h1>
      <p class="max-w-3xl mx-auto text-lg text-brand-dark/80">
        Integrity Design + Build turns dated bathrooms into restorative retreats with moisture-smart construction, layered lighting, and fixtures selected for daily durability. One design-build team guides layouts, finish selections, permitting, and on-site craftsmanship so the process stays organized and calm.
      </p>
      <div class="flex flex-wrap gap-3 justify-center mt-8">
        <NuxtLink to="/contact" class="btn-primary">Book a Bathroom Consult</NuxtLink>
        <a :href="`tel:${siteConfig.phone}`" class="btn-accent">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
      </div>
    </section>

    <section class="content max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
      <div class="space-y-8 text-brand-dark/85">
        <div>
          <h2 class="text-3xl font-semibold text-brand-dark mb-4">Layouts that feel airy, organized, and safe</h2>
          <p>
            Every bathroom starts with a discovery walk-through where we document routines, storage needs, and any accessibility concerns. That insight informs shower placement, vanity sizing, and doorway widths so the finished space feels open without sacrificing privacy. Behind the aesthetics, we engineer ventilation, waterproofing membranes, and heated floors designed for Minnesota winters, ensuring the room performs flawlessly for decades.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">What&apos;s included</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Custom vanities, linen towers, and recessed storage tailored to your checklist.</li>
            <li>Curbless or low-threshold showers with frameless glass, steam systems, and integrated benches.</li>
            <li>Premium tile, natural stone, or waterproof wall panels paired with designer lighting scenes.</li>
            <li>Plumbing, electrical, and ventilation upgrades coordinated with city inspections.</li>
            <li>Daily site protection, dust control, and punch walks managed by our in-house crew.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Bathroom renovation roadmap</h3>
          <ol class="space-y-3">
            <li><strong>1. Concept + selections</strong> — mood boards, tile layouts, fixture pairings, and 3D renderings to align on the look.</li>
            <li><strong>2. Technical planning</strong> — detailed elevations, plumbing diagrams, and procurement that protect lead times.</li>
            <li><strong>3. Build + detailing</strong> — demo, framing, waterproofing, tile work, and final styling with transparent updates.</li>
          </ol>
        </div>
        <div class="rounded-2xl bg-brand-neutral/60 border border-black/5 p-6">
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Coordinate the entire suite</h3>
          <p class="mb-4">
            Many homeowners pair bathroom remodels with closet reconfigurations or primary suite refreshes. Because we manage every scope, finishes stay cohesive and you only live through one construction schedule.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/services/kitchen-remodeling" class="btn-outline">Kitchen Remodeling</NuxtLink>
            <NuxtLink to="/services/basement-finishing" class="btn-outline">Basement Finishing</NuxtLink>
          </div>
        </div>
      </div>

      <aside class="space-y-6">
        <div class="rounded-2xl bg-white border border-black/5 shadow-card p-6">
          <h3 class="text-xl font-semibold text-brand-dark mb-3">Bathroom snapshot</h3>
          <dl class="space-y-3">
            <div>
              <dt class="font-semibold">Typical timelines</dt>
              <dd>6–10 weeks depending on structural changes and tile scope.</dd>
            </div>
            <div>
              <dt class="font-semibold">Popular materials</dt>
              <dd>Large-format porcelain, zellige tile, quartz slabs, unlacquered brass or matte black fixtures.</dd>
            </div>
            <div>
              <dt class="font-semibold">Enhancements</dt>
              <dd>Heated floors, towel warmers, integrated sound, smart lighting, and steam showers.</dd>
            </div>
          </dl>
        </div>
        <div class="rounded-2xl bg-brand-dark text-white p-6 space-y-4">
          <h3 class="text-2xl font-semibold">Ready for a calmer morning routine?</h3>
          <p class="text-white/85">
            Send inspiration boards or snapshots of your current bath and we&apos;ll prepare design ideas before our in-home consultation.
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
        <h2 class="text-3xl font-bold text-brand-dark">Bathroom Remodeling FAQs</h2>
        <div class="grid gap-6 md:grid-cols-2 text-left">
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Do you help with permits?</h3>
            <p class="text-brand-dark/80 mt-2">Yes. Structural changes, plumbing, and electrical upgrades are permitted and inspected by our team.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Can you add accessibility features?</h3>
            <p class="text-brand-dark/80 mt-2">We regularly integrate grab bars, wider doors, bench seating, and zero-threshold entries for safer daily use.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">What waterproofing system do you use?</h3>
            <p class="text-brand-dark/80 mt-2">We install industry-leading membranes, flood-test pans, and flash every penetration to protect against leaks.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Will the rest of our home stay clean?</h3>
            <p class="text-brand-dark/80 mt-2">Dust containment, air scrubbers, floor protection, and end-of-day cleanup are baked into every project.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto bg-brand-gradient rounded-2xl p-8 text-white text-center space-y-4">
        <h2 class="text-3xl font-bold">Design a spa retreat at home</h2>
        <p class="text-white/85">Schedule a discovery visit and we&apos;ll deliver layout options, finish palettes, and a phased investment plan that fits your lifestyle.</p>
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

const pageTitle = 'Bathroom Remodeling | Integrity Design + Build'
const pageDescription = 'Integrity Design + Build delivers spa-inspired bathroom remodels in White Bear Lake and the Twin Cities east metro with custom tile, premium fixtures, and moisture-smart construction.'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'bathroom remodeling, spa bathroom design, Twin Cities bath contractor, White Bear Lake bathrooms' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `${siteConfig.siteUrl}/services/bathroom-remodeling` },
    { property: 'og:image', content: `${siteConfig.siteUrl}/images/bathroom-remodel.svg` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.siteUrl}/services/bathroom-remodeling` }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Bathroom Remodeling',
        serviceType: 'Bathroom Renovation',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          telephone: siteConfig.phone,
          areaServed: siteConfig.serviceAreas
        },
        areaServed: siteConfig.serviceAreas,
        description: pageDescription,
        url: `${siteConfig.siteUrl}/services/bathroom-remodeling`
      })
    }
  ]
})
</script>
