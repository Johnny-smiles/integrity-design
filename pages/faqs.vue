<template>
    <main>
        <section class="max-w-5xl mx-auto px-6 py-20">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <p class="text-lg text-brand-dark/80 max-w-2xl mx-auto">
                    Answers to common questions about our design-build process, timelines, and services across the Twin Cities east metro.
                </p>
            </div>

            <div class="divide-y divide-black/10">
                <div
                    v-for="(q, i) in faqs"
                    :key="i"
                    class="py-8"
                >
                    <button
                        class="w-full text-left flex items-center justify-between gap-6"
                        @click="toggle(i)"
                        :aria-expanded="openIndex === i"
                        :aria-controls="`faq-panel-${i}`"
                    >
                        <h3 class="text-xl md:text-2xl font-semibold">
                            {{ q.q }}
                        </h3>
                        <span
                            class="text-brand-primary transition-transform select-none text-3xl leading-none"
                            :class="openIndex === i ? 'rotate-45' : ''"
                        >+</span>
                    </button>

                    <p
                        v-if="openIndex === i"
                        :id="`faq-panel-${i}`"
                        class="mt-6 text-lg md:text-xl text-brand-dark/80"
                    >
                        {{ q.a }}
                    </p>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="mt-16 rounded-3xl bg-brand-dark text-white px-8 py-10 text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
                <p class="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                    We're here to help. Reach out for a no-obligation consultation about your remodeling project.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary">
                        Call {{ siteConfig.phoneDisplay || siteConfig.phone }}
                    </a>
                    <NuxtLink to="/contact" class="btn-accent">
                        Send Us a Message
                    </NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

interface FAQ { q: string; a: string }

const faqs: FAQ[] = [
    {
        q: 'What does your design-build process look like?',
        a: 'We begin with an in-home walkthrough, develop layouts and selections together, then lock scope, budget, and schedule before construction starts.'
    },
    {
        q: 'Can we live at home during the remodel?',
        a: 'For most kitchen, bath, and basement projects you can stay home. We protect pathways, create temporary setups, and keep dust to a minimum.'
    },
    {
        q: 'Do you help with permits and inspections?',
        a: 'Yes. We handle permitting, coordinate inspections, and share updates so you always know what milestone is next.'
    },
    {
        q: 'How do you keep projects on budget?',
        a: 'Detailed allowances, transparent change approvals, and weekly progress reviews help us hold to the agreed budget and timeline.'
    },
    {
        q: 'Which areas do you serve?',
        a: 'We remodel homes across White Bear Lake, Vadnais Heights, Maplewood, Shoreview, St Paul, and neighboring east-metro communities.'
    }
]

const openIndex = ref<number | null>(0)
function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
}

useHead({
    title: 'FAQs - Frequently Asked Questions',
    meta: [
        {
            name: 'description',
            content: 'Common questions about our remodeling services, design-build process, timelines, and service areas in the Twin Cities east metro.'
        }
    ]
})
</script>
