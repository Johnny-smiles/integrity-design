<template>
  <section class="service-page">
    <div class="hero bg-brand-light text-center py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Kitchen Remodeling in White Bear Lake</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        Transform your kitchen into the heart of your home — crafted for function, beauty, and everyday living.
      </p>
    </div>

    <div class="content max-w-4xl mx-auto py-12 px-6 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-brand-dark mb-3">Why Choose Us</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>Modern, functional layouts that fit your lifestyle</li>
          <li>Cabinetry and countertops tailored to your space</li>
          <li>Lighting, flooring, and appliance integration</li>
        </ul>
      </div>

      <div class="bg-brand-accent/10 p-6 rounded-xl text-center">
        <h3 class="text-2xl font-bold mb-2 text-brand-dark">Bring Your Dream Kitchen to Life</h3>
        <p class="text-gray-700 mb-4">Let’s talk design ideas and get your remodel started today.</p>
        <a href="/contact" class="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition">
          Schedule a Consultation
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Kitchen Remodeling | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Integrity Design + Build offers custom kitchen remodeling in White Bear Lake, MN. Modern layouts, cabinetry, and lighting for every style.' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Kitchen Remodeling",
      "provider": { "@type": "LocalBusiness", "name": "Integrity Design + Build" },
      "areaServed": "White Bear Lake, MN",
      "serviceType": "Kitchen Renovation"
    })
  }]
})
</script>
