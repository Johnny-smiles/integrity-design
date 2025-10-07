<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-8">Request a Design Consultation</h1>

            <!-- Confirmation message -->
            <div
                v-if="showConfirmation"
                class="mb-8 p-4 rounded-md bg-green-100 text-green-800 border border-green-300 text-lg font-medium"
            >
                Thank you! Your request has been received. We'll be in touch soon.
            </div>

            <form
                name="design-consultation"
                method="POST"
                action="/contact?success=1"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                enctype="multipart/form-data"
                class="space-y-6"
            >
                <!-- Netlify required hidden input -->
                <input type="hidden" name="form-name" value="design-consultation" />
                <p class="hidden">
                    <label>Don’t fill this out <input name="bot-field" /></label>
                </p>

                <!-- Contact info -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Preferred Contact</label>
                        <select
                            name="contactPreference"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>Call</option>
                            <option>Email</option>
                            <option>Text</option>
                        </select>
                    </div>
                </div>

                <!-- Project details -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Project Type</label>
                        <input
                            type="text"
                            name="projectType"
                            placeholder="Kitchen, bathroom, basement, whole-home..."
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Ideal Timeline</label>
                        <select
                            name="timeline"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>1–3 months</option>
                            <option>3–6 months</option>
                            <option>6–12 months</option>
                            <option>Exploring options</option>
                        </select>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Approximate Budget</label>
                        <select
                            name="budget"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>$50k or less</option>
                            <option>$50k–$100k</option>
                            <option>$100k–$200k</option>
                            <option>$200k+</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Address or City</label>
                        <input
                            type="text"
                            name="projectLocation"
                            placeholder="City or neighborhood"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                </div>

                <!-- Photos -->
                <div>
                    <label class="block font-medium mb-1">Inspiration or current space photos (up to 5)</label>
                    <input
                        type="file"
                        name="photos"
                        accept="image/*"
                        multiple
                        class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <p class="text-sm text-neutral-600 mt-2">
                        Tip: Snap a wide shot of the room plus any features you want to highlight. Floor plans or sketches are also helpful.
                    </p>
                </div>

                <!-- Details -->
                <div>
                    <label class="block font-medium mb-1">Details</label>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Share goals for the space, must-have features, and any questions you have about our process."
                        class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    ></textarea>
                </div>

                <div class="flex flex-wrap gap-3">
                    <button type="submit" class="btn-primary">Submit Request</button>
                    <NuxtLink to="/" class="btn-outline">Back to Home</NuxtLink>
                    <a :href="`tel:${phoneE164}`" class="btn-accent text-brand-dark">Or Call {{ phoneDisplay }}</a>
                </div>
            </form>

            <!-- Alt CTA -->
            <div class="mt-10 bg-brand-gradient rounded-2xl p-6 md:p-8 text-white">
                <h2 class="text-2xl font-bold">Share plans or inspiration images</h2>
                <p class="mt-2 text-white/90">
                    Email or text photos of your current space, mood boards, or architects’ drawings and we’ll coordinate your consultation time.
                </p>
                <div class="mt-4">
                    <a :href="smsHref" class="btn-primary">
                        Text {{ phoneDisplay }}
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { siteConfig } from '~/site.config'

const showConfirmation = ref(false)

onMounted(() => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        if (params.has('success') || window.location.hash === '#success') {
            showConfirmation.value = true
        }
        if (window.location.pathname.endsWith('/thanks/')) {
            showConfirmation.value = true
        }
    }
})

// Phone helpers for CTAs
const phoneRaw = computed(() => siteConfig.phone || '')
const phoneDisplay = computed(() => {
    if ((siteConfig).phoneDisplay) return (siteConfig).phoneDisplay
    const digits = (phoneRaw.value || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return phoneRaw.value
})

const phoneE164 = computed(() => {
    const digits = (phoneRaw.value || '').replace(/[^0-9]/g, '')
    if (!digits) return ''
    if (digits.startsWith('1') && digits.length === 11) return `+${digits}`
    if (digits.length === 10) return `+1${digits}`
    return phoneRaw.value
})

const smsHref = computed(() => {
    const encodedName = encodeURIComponent(siteConfig.siteName || 'Integrity Design + Build')
    return `sms:${phoneE164.value}?body=Hi%20${encodedName}%2C%20let%27s%20plan%20a%20remodel.`
})
</script>
