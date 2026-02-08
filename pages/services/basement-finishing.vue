<template>
  <main class="service-page bg-white">
    <section class="hero bg-brand-light text-center py-16 px-6">
      <p class="uppercase tracking-[0.3em] text-sm text-brand-primary mb-3">Basement Finishing</p>
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Lower-Level Living Tailored to Your Twin Cities Home</h1>
      <p class="max-w-3xl mx-auto text-lg text-brand-dark/80">
        From blank-slate lower levels to outdated rec rooms, Integrity Design + Build creates multi-purpose basements with moisture protection, smart storage, and purposeful lighting. Our integrated team plans layouts, coordinates inspections, and delivers craftsmanship that feels as polished as the main floor.
      </p>
      
      <div class="image-placeholder aspect-[21/9] rounded-2xl max-w-5xl mx-auto my-8">
        <span>Featured Basement Finishing Photo</span>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mt-8">
        <NuxtLink to="/contact" class="btn-primary">Book a Basement Consult</NuxtLink>
        <a :href="`tel:${siteConfig.phone}`" class="btn-accent">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
      </div>
    </section>

    <section class="content max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
      <div class="space-y-8 text-brand-dark/85">
        <div>
          <h2 class="text-3xl font-semibold text-brand-dark mb-4">Flexible layouts that work year-round</h2>
          <p>
            We begin with a moisture and mechanical assessment, then map how you plan to live in the space—media lounge, guest suite, home office, gym, play zone, or all of the above. Framing, insulation, HVAC zoning, and egress solutions are engineered first so finishes stay comfortable, quiet, and code-compliant regardless of Minnesota weather.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">What&apos;s included</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Moisture mitigation, subfloor prep, and insulation strategies appropriate for below-grade spaces.</li>
            <li>Dedicated zones for media walls, wet bars, guest suites, offices, or playrooms with custom built-ins.</li>
            <li>Layered lighting, audio wiring, and smart controls designed around how you gather.</li>
            <li>Bathroom additions, fireplaces, and storage solutions coordinated with plumbing and electrical upgrades.</li>
            <li>Permitting, inspections, and daily jobsite protection handled by our respectful in-house crew.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Basement finishing roadmap</h3>
          <ol class="space-y-3">
            <li><strong>1. Discovery + concepts</strong> — precise measurements, flood-mitigation plan, and zoning layouts that reflect your wish list.</li>
            <li><strong>2. Pre-construction</strong> — engineering, selections, and procurement so framing and mechanical trades stay on schedule.</li>
            <li><strong>3. Build + detailing</strong> — framing, drywall, custom millwork, flooring, and punch walks delivered with transparent updates.</li>
          </ol>
        </div>
        <div class="rounded-2xl bg-brand-neutral/60 border border-black/5 p-6">
          <h3 class="text-2xl font-semibold text-brand-dark mb-3">Connect indoor + outdoor living</h3>
          <p class="mb-4">
            Many projects pair a lower-level remodel with new deck access, patio doors, or covered entertaining areas. Our team coordinates both scopes so materials align and you only experience one construction timeline.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/services/deck-building" class="btn-outline">Deck Building</NuxtLink>
            <NuxtLink to="/services/kitchen-remodeling" class="btn-outline">Kitchen Remodeling</NuxtLink>
          </div>
        </div>
      </div>

      <aside class="space-y-6">
        <div class="image-placeholder aspect-[4/3] rounded-xl">
          <span>Basement Detail Photo</span>
        </div>

        <div class="rounded-2xl bg-white border border-black/5 shadow-card p-6">
          <h3 class="text-xl font-semibold text-brand-dark mb-3">Basement snapshot</h3>
          <dl class="space-y-3">
            <div>
              <dt class="font-semibold">Typical timelines</dt>
              <dd>8–14 weeks depending on structural changes, bathrooms, and built-ins.</dd>
            </div>
            <div>
              <dt class="font-semibold">Popular finishes</dt>
              <dd>Luxury vinyl plank, engineered oak, acoustic ceilings, custom media walls, and quartz-topped wet bars.</dd>
            </div>
            <div>
              <dt class="font-semibold">Enhancements</dt>
              <dd>Fireplaces, golf simulators, kids&apos; craft zones, gym rubber flooring, and guest suites with egress windows.</dd>
            </div>
          </dl>
        </div>
        <div class="rounded-2xl bg-brand-dark text-white p-6 space-y-4">
          <h3 class="text-2xl font-semibold">Ready to unlock more living space?</h3>
          <p class="text-white/85">
            Send photos or a quick video walk-through and we&apos;ll bring layout ideas and finish palettes to your consultation.
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
        <h2 class="text-3xl font-bold text-brand-dark">Basement Finishing FAQs</h2>
        <div class="grid gap-6 md:grid-cols-2 text-left">
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">How do you handle moisture?</h3>
            <p class="text-brand-dark/80 mt-2">We evaluate drainage, seal cracks, specify subfloors, and recommend mitigation before framing begins.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Can you add bedrooms?</h3>
            <p class="text-brand-dark/80 mt-2">Yes. We design egress-compliant bedrooms and manage inspections so new suites meet code.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Will the space feel bright?</h3>
            <p class="text-brand-dark/80 mt-2">Layered lighting, window wells, glass doors, and strategically placed mirrors keep lower levels feeling open.</p>
          </div>
          <div class="bg-white border border-black/5 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-brand-dark">Do you coordinate technology?</h3>
            <p class="text-brand-dark/80 mt-2">We pre-wire surround sound, networking, and smart controls so entertainment zones stay clean and future-ready.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto bg-brand-gradient rounded-2xl p-8 text-white text-center space-y-4">
        <h2 class="text-3xl font-bold">Let&apos;s finish your lower level right</h2>
        <p class="text-white/85">Schedule a discovery visit and we&apos;ll outline concept layouts, moisture strategies, and a phased investment range tailored to your priorities.</p>
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

const pageTitle = 'Basement Finishing | Integrity Design + Build'
const pageDescription = 'Integrity Design + Build finishes lower levels in White Bear Lake and the Twin Cities with moisture-ready construction, flexible layouts, and cohesive design-build coordination.'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'basement finishing, lower level remodel, White Bear Lake basement contractor, Twin Cities design build' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `${siteConfig.siteUrl}/services/basement-finishing` },
    { property: 'og:image', content: `${siteConfig.siteUrl}/images/basement-finishing.svg` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.siteUrl}/services/basement-finishing` }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Basement Finishing',
        serviceType: 'Basement Renovation',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          telephone: siteConfig.phone,
          areaServed: siteConfig.serviceAreas
        },
        areaServed: siteConfig.serviceAreas,
        description: pageDescription,
        url: `${siteConfig.siteUrl}/services/basement-finishing`
      })
    }
  ]
})
</script>
