<template>
  <main id="main">
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p class="text-lg text-brand-dark/80">
          Explore the design-build packages we craft for kitchens, bathrooms, basements, and whole-home transformations. Each service includes collaborative planning, curated selections, and construction led by the same trusted team.
        </p>
      </div>
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`" class="block hover:no-underline">
          <ServiceCard :title="s.title" :items="s.bullets" />
        </NuxtLink>
      </div>
    </div>
  </section>
  </main>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
import { services } from '~/data/services'

usePageSeo({
    title: 'Remodeling Services | Integrity Design + Build',
    description: 'Explore kitchen, bathroom, and basement remodeling services from Integrity Design + Build in White Bear Lake and the Twin Cities east metro.',
    path: '/services'
})

useBreadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' }
])
</script>
