<template>
    <main id="main">
        <section class="max-w-3xl mx-auto px-6 py-20 space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p class="text-sm text-brand-dark/60">Effective date: February 7, 2026</p>

            <p>
                These terms govern your use of the {{ siteConfig.siteName }} website at
                <a :href="siteConfig.siteUrl" class="underline">{{ siteConfig.siteUrl }}</a>.
                By using our site, you agree to these terms.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Services Overview</h2>
            <p>
                {{ siteConfig.siteName }} provides home remodeling design and construction services in the Twin Cities east metro area, including kitchen remodeling, bathroom remodeling, and basement finishing. Information on our website is for general informational purposes and does not constitute a binding offer or contract.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Estimates and Contracts</h2>
            <p>
                Project pricing discussed on this website or during consultations is provided as a general estimate. All remodeling work is governed by a separate written contract signed by both parties before work begins. That contract supersedes any information on this website.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Warranties</h2>
            <p>
                Warranty terms for materials and workmanship are specified in your individual project contract. Manufacturer warranties on products and fixtures are subject to the manufacturer's terms and conditions.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Limitation of Liability</h2>
            <p>
                {{ siteConfig.siteName }} provides this website "as is" without warranties of any kind. We are not liable for any damages arising from the use of this website or reliance on its content. Our liability for any remodeling project is governed solely by the terms of the signed project contract.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Intellectual Property</h2>
            <p>
                All content on this website, including text, images, logos, and design, is the property of {{ siteConfig.siteName }} or its licensors. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Governing Law</h2>
            <p>
                These terms are governed by the laws of the State of Minnesota. Any disputes will be resolved in the courts of Ramsey County or Washington County, Minnesota.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Changes to These Terms</h2>
            <p>
                We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Contact</h2>
            <p>
                Questions? Reach us at
                <a :href="`mailto:${siteConfig.email}`" class="underline">{{ siteConfig.email }}</a> or
                <a :href="`tel:${siteConfig.phone}`" class="underline">{{ siteConfig.phoneDisplay }}</a>.
            </p>
        </section>
    </main>
</template>

<script setup>
import { siteConfig } from '~/site.config'

usePageSeo({
    title: 'Terms of Service | Integrity Design + Build',
    description: 'Terms of service for the Integrity Design + Build website. Read our terms for website use, estimates, and project agreements.',
    path: '/terms'
})

useBreadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'Terms of Service', path: '/terms' }
])
</script>
