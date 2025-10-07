<template>
  <main class="max-w-5xl mx-auto px-6 py-16" v-if="service">
    <!-- Hero Section -->
    <div class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ service.title }}</h1>
      <p class="text-lg text-brand-dark/80 mb-8">{{ service.summary }}</p>
      
      <!-- Service Image (if available) -->
      <div v-if="service.image" class="mb-8">
        <NuxtImg 
          :src="service.image" 
          :alt="`${service.title} service`"
          class="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>

    <!-- Key Benefits -->
    <section class="mb-12">
      <h2 class="text-2xl md:text-3xl font-bold mb-6">Why Choose Our {{ service.title }}?</h2>
      <ul class="space-y-3 mb-8">
        <li v-for="(b, i) in service.bullets" :key="i" class="flex gap-2">
          <span class="w-2 h-2 mt-2 rounded-full bg-brand-primary"></span>
          <span>{{ b }}</span>
        </li>
      </ul>
    </section>

    <!-- Detailed Content (if available) -->
    <section v-if="service.content" class="mb-12">
      <div class="prose prose-lg max-w-none">
        <div v-html="service.content"></div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-brand-gradient rounded-2xl p-8 text-white text-center">
      <h3 class="text-2xl font-bold mb-4">Ready to Get Started?</h3>
      <p class="mb-6">Contact us today for a free estimate on our {{ service.title }} services.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/contact" class="btn-primary">Request an Estimate</NuxtLink>
        <a :href="`tel:${siteConfig.phone}`" class="btn-accent text-black">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
      </div>
    </section>
  </main>
  
  <main v-else class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="text-3xl font-bold">Service Not Found</h1>
    <p class="mt-4">Please return to the <NuxtLink to="/services" class="text-brand-primary underline">services page</NuxtLink>.</p>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { services } from '~/data/services'
import { siteConfig } from '~/site.config'
import { useSchema } from '~/composables/useSchema'
import { useHead } from 'nuxt/app'

const route = useRoute()
const service = services.find(s => s.slug === route.params.slug)

// SEO Meta Tags
const pageTitle = service ? `${service.title} | ${siteConfig.siteName}` : 'Service Not Found'
const pageDescription = service ? (service.metaDescription || service.summary) : 'Service page not found'
const pageUrl = service ? `${siteConfig.siteUrl}/services/${service.slug}` : `${siteConfig.siteUrl}/services`

// Set up SEO
useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    ...(service?.keywords ? [{ name: 'keywords', content: service.keywords.join(', ') }] : []),
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: 'website' },
    ...(service?.image ? [{ property: 'og:image', content: `${siteConfig.siteUrl}${service.image}` }] : []),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription }
  ],
  link: [
    { rel: 'canonical', href: pageUrl }
  ]
})

// JSON-LD Schema for SEO
if (service) {
  const { getServiceSchema } = useSchema()
  const serviceSchema = getServiceSchema(service)
  
  useHead({
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(serviceSchema) }
    ]
  })
}
</script>
