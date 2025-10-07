<template>
  <section class="service-page">
    <div class="hero bg-brand-light text-center py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Bathroom Remodeling in White Bear Lake</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        Create a spa-like bathroom retreat with timeless design and practical details.
      </p>
    </div>

    <div class="content max-w-4xl mx-auto py-12 px-6 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-brand-dark mb-3">Our Approach</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>Custom tile and fixture upgrades</li>
          <li>Glass showers and modern vanities</li>
          <li>Complete design-build project management</li>
        </ul>
      </div>

      <div class="bg-brand-accent/10 p-6 rounded-xl text-center">
        <h3 class="text-2xl font-bold mb-2 text-brand-dark">Refresh Your Space</h3>
        <p class="text-gray-700 mb-4">From concept to completion, we handle every detail beautifully.</p>
        <a href="/contact" class="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition">
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Bathroom Remodeling | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Integrity Design + Build provides elegant bathroom remodels in White Bear Lake, MN. Custom vanities, tile, and glass shower designs.' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Bathroom Remodeling",
      "provider": { "@type": "LocalBusiness", "name": "Integrity Design + Build" },
      "areaServed": "White Bear Lake, MN",
      "serviceType": "Bathroom Renovation"
    })
  }]
})
</script>
