<template>
    <!-- Layout variant: catalog/sections.json -> HeroSection with-cta-band -->
    <section class="relative overflow-hidden bg-brand-light">

        <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div class="space-y-6">
                <p class="uppercase tracking-[0.2em] text-sm font-semibold text-brand-primary">{{ siteConfig.hero.eyebrow }}</p>
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
                    {{ siteConfig.hero.headline }}
                </h1>
                <p class="text-lg text-brand-dark/90 max-w-xl">
                    Custom kitchens, baths, and basements with clear budgets and quality craft.
                </p>
                <div class="flex flex-col gap-4 w-fit">
                    <div class="flex flex-wrap gap-4">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">
                            {{ siteConfig.hero.ctaPrimaryLabel }}
                        </a>
                        <NuxtLink to="/contact" class="btn-accent">
                            {{ siteConfig.hero.ctaSecondaryLabel }}
                        </NuxtLink>
                    </div>
                    <NuxtLink to="/services/deck-building" class="btn-outline w-full">
                        Deck Building Services
                    </NuxtLink>
                </div>
            </div>

            <div class="relative bg-white/90 backdrop-blur border border-black/5 rounded-3xl p-8 shadow-card">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 flex items-center justify-center bg-white rounded-full ring-2 ring-brand-primary/10 p-2">
                        <img src="/logo.png" :alt="`${siteConfig.siteName} logo`" class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <p class="text-sm uppercase tracking-[0.2em] text-brand-dark/70">Serving</p>
                        <p class="text-lg font-semibold text-brand-dark">Twin Cities East Metro</p>
                    </div>
                </div>
                <ul class="space-y-3 text-brand-dark/80">
                    <li v-for="(area, idx) in displayAreas" :key="idx" class="flex items-start gap-3">
                        <span class="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                        <span>{{ area }}</span>
                    </li>
                </ul>
                <div class="mt-8 rounded-2xl bg-brand-dark text-white px-5 py-4 flex items-center justify-between gap-3">
                    <div>
                        <p class="text-xs uppercase tracking-[0.3em] text-white/60">Talk with a designer</p>
                        <p class="text-lg font-semibold">{{ siteConfig.phoneDisplay || prettyPhone }}</p>
                    </div>
                    <a :href="`mailto:${siteConfig.email}`" class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-brand-primary text-white hover:bg-brand-primary/10">
                        Email Us
                    </a>
                </div>
            </div>
        </div>

        <div class="relative max-w-5xl mx-auto -mt-6 px-6 pb-10">
            <div class="rounded-3xl bg-brand-dark text-white px-6 sm:px-12 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-xl">
                <div>
                    <p class="text-sm uppercase tracking-[0.3em] font-semibold text-white/90">Next step</p>
                    <p class="text-2xl font-semibold">Schedule a design walk-through</p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <NuxtLink to="/services/kitchen-remodeling" class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-brand-primary text-white hover:bg-brand-primary/10">
                        View Kitchen Services
                    </NuxtLink>
                    <NuxtLink
                        to="/contact"
                        class="inline-flex items-center justify-center font-semibold rounded-md px-6 py-3 transition border border-white/60 text-white hover:bg-white/10"
                    >
                        Start Your Project
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'

const prettyPhone = computed(() => {
    const digits = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return siteConfig.phone
})

const displayAreas = computed(() => {
    const areas = Array.isArray(siteConfig.serviceAreas) ? siteConfig.serviceAreas : []
    return areas.slice(0, 4)
})
</script>
