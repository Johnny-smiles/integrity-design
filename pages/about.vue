<template>
    <main>
        <section class="max-w-5xl mx-auto px-6 py-20 space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About {{ siteConfig.siteName }}</h1>

            <p>
                {{ siteConfig.siteName }} brings designers and builders together under one roof in {{ siteConfig.location.city }}. We guide kitchen, bath, and whole-home projects across the Twin Cities east metro with steady, collaborative leadership.
            </p>

            <p>
                Every remodel begins with how you live. We shape layouts, finish palettes, and weekly updates that keep families in Vadnais Heights and Shoreview informed, comfortable, and excited for the reveal.
            </p>

            <div class="grid gap-4 md:grid-cols-3 pt-4">
                <div class="rounded-2xl bg-brand-light border border-black/5 p-5">
                    <h2 class="text-lg font-semibold text-brand-dark mb-2">Our Promise</h2>
                    <p class="text-sm text-brand-dark/70">Clear budgets and timelines presented before we demo.</p>
                </div>
                <div class="rounded-2xl bg-white border border-black/5 p-5 shadow-card">
                    <h2 class="text-lg font-semibold text-brand-dark mb-2">Trusted Team</h2>
                    <p class="text-sm text-brand-dark/70">Seasoned designers and craftspeople working as one team.</p>
                </div>
                <div class="rounded-2xl bg-brand-dark text-white p-5">
                    <h2 class="text-lg font-semibold mb-2">Next Step</h2>
                    <p class="text-sm text-white/95 mb-3">Book a design walk-through to explore tailored options.</p>
                    <NuxtLink to="/contact" class="btn-accent text-brand-dark">Start the Conversation</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { siteConfig } from '~/site.config'
</script>
