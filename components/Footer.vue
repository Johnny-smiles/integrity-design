<template>
    <footer class="bg-brand-light text-brand-dark pt-14 pb-8">
        <div class="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center text-center">
            <!-- Brand -->
            <div class="w-full text-center md:text-left justify-self-center">
                <img src="/logo.png" :alt="`${siteConfig.siteName} Logo`" class="w-20 h-20 object-contain mx-auto md:mx-0" />
                <p class="mt-4 font-semibold">{{ brandName }}</p>
                <p class="mt-1">
                    <a :href="`tel:${phoneE164}`" class="underline">{{ phoneDisplay }}</a>
                </p>
                <p>
                    <a :href="`mailto:${email}`" class="underline">{{ email }}</a>
                </p>
                <p v-if="addressLine" class="mt-2 text-sm text-neutral-600">
                    {{ addressLine }}
                </p>
            </div>

            <!-- Links -->
            <div class="w-full md:col-span-2 text-center">
                <h3 class="text-lg font-semibold mb-3">Company</h3>
                <ul class="list-none space-y-2">
                    <li><NuxtLink to="/about"        class="hover:text-brand-primary">About</NuxtLink></li>
                    <li><NuxtLink to="/services"     class="hover:text-brand-primary">Services</NuxtLink></li>
                    <li><NuxtLink to="/services/deck-building" class="hover:text-brand-primary">Deck Building</NuxtLink></li>
                    <li><NuxtLink to="/recent-work"  class="hover:text-brand-primary">Recent&nbsp;Work</NuxtLink></li>
                    <li><NuxtLink to="/faqs"         class="hover:text-brand-primary">FAQs</NuxtLink></li>
                    <li><NuxtLink to="/contact"      class="hover:text-brand-primary">Contact</NuxtLink></li>
                </ul>
                <ul class="list-none space-y-2 mt-4 text-sm text-brand-dark/60">
                    <li><NuxtLink to="/privacy" class="hover:text-brand-primary">Privacy Policy</NuxtLink></li>
                    <li><NuxtLink to="/terms"   class="hover:text-brand-primary">Terms of Service</NuxtLink></li>
                </ul>
            </div>

            <!-- CTA -->
            <div class="w-full text-center">
                <h3 class="text-lg font-semibold mb-3">Ready to plan?</h3>
                <a :href="`tel:${phoneE164}`" class="btn-primary inline-block mt-2">
                    Call {{ phoneDisplay }}
                </a>
            </div>
        </div>

        <p class="text-center text-sm mt-10 border-t border-brand-dark/10 pt-6">
            © {{ new Date().getFullYear() }} {{ brandName }}. All rights reserved.
        </p>
    </footer>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'

const brandName = siteConfig.siteName || 'Integrity Design + Build'
const email = siteConfig.email || 'info@integritydesignmn.com'
const phoneDisplay = siteConfig.phoneDisplay || siteConfig.phone
const phoneE164 = siteConfig.phone

const loc = siteConfig.location || {} as typeof siteConfig.location
const addressLine = loc.street
    ? `${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`
    : loc.city && loc.state
        ? `${loc.city}, ${loc.state} ${loc.zip || ''}`.trim()
        : ''
</script>
