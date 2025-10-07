<template>
    <section class="max-w-4xl mx-auto px-6 py-16">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
        </h2>

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
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const openIndex = ref<number | null>(0) // open first by default; set to null if you want all collapsed
function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>
