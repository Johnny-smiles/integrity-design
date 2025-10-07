<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center">Our Services</h1>
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`" class="block hover:no-underline">
          <ServiceCard :title="s.title" :items="s.bullets" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
import { services } from '~/data/services'
</script>