<template>
  <section class="service-page">
    <div class="hero bg-brand-light text-center py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Basement Finishing in White Bear Lake</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        Turn unused basement space into a warm, welcoming part of your home.
      </p>
    </div>

    <div class="content max-w-4xl mx-auto py-12 px-6 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-brand-dark mb-3">What We Offer</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>Drywall, flooring, and lighting installation</li>
          <li>Entertainment areas, offices, or guest suites</li>
          <li>Waterproofing and insulation solutions</li>
        </ul>
      </div>

      <div class="bg-brand-accent/10 p-6 rounded-xl text-center">
        <h3 class="text-2xl font-bold mb-2 text-brand-dark">Let’s Finish Your Basement Right</h3>
        <p class="text-gray-700 mb-4">We’ll design and build a basement that fits your needs perfectly.</p>
        <a href="/contact" class="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition">
          Start My Project
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Basement Finishing | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Integrity Design + Build specializes in basement finishing in White Bear Lake, MN. Add comfort, style, and usable space to your home.' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Basement Finishing",
      "provider": { "@type": "LocalBusiness", "name": "Integrity Design + Build" },
      "areaServed": "White Bear Lake, MN",
      "serviceType": "Basement Renovation"
    })
  }]
})
</script>
