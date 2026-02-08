<template>
    <main id="main">
        <section class="max-w-3xl mx-auto px-6 py-20 space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p class="text-sm text-brand-dark/60">Effective date: February 7, 2026</p>

            <p>
                {{ siteConfig.siteName }} ("we," "us," or "our") respects your privacy. This policy explains what information we collect through our website at
                <a :href="siteConfig.siteUrl" class="underline">{{ siteConfig.siteUrl }}</a> and how we use it.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Information We Collect</h2>
            <p>
                When you submit our design consultation form, we collect the information you provide: your name, email address, phone number, project details, and any photos you upload. We use this information solely to respond to your inquiry and discuss your remodeling project.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Analytics</h2>
            <p>
                We use <strong>Plausible Analytics</strong>, a privacy-focused analytics tool that does not use cookies and does not collect personal data. Plausible tracks aggregate page views and referral sources without identifying individual visitors. Learn more at
                <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" class="underline">plausible.io/data-policy</a>.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Cookies</h2>
            <p>
                Our website does not set first-party tracking cookies. Third-party services embedded on our site (such as Google Tag Manager, if enabled) may set their own cookies. You can control cookie behavior through your browser settings.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Form Submissions</h2>
            <p>
                Our contact form is processed through <strong>Netlify Forms</strong>. Submitted data is stored securely on Netlify's infrastructure and is accessible only to our team. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Your Rights</h2>
            <p>
                You may request access to, correction of, or deletion of any personal information we hold about you. Contact us at
                <a :href="`mailto:${siteConfig.email}`" class="underline">{{ siteConfig.email }}</a> or call
                <a :href="`tel:${siteConfig.phone}`" class="underline">{{ siteConfig.phoneDisplay }}</a>.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Changes to This Policy</h2>
            <p>
                We may update this policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>

            <h2 class="text-2xl font-semibold pt-4">Contact</h2>
            <p>
                Questions about this policy? Reach us at
                <a :href="`mailto:${siteConfig.email}`" class="underline">{{ siteConfig.email }}</a> or
                <a :href="`tel:${siteConfig.phone}`" class="underline">{{ siteConfig.phoneDisplay }}</a>.
            </p>
        </section>
    </main>
</template>

<script setup>
import { siteConfig } from '~/site.config'

usePageSeo({
    title: 'Privacy Policy | Integrity Design + Build',
    description: 'Privacy policy for Integrity Design + Build. Learn how we handle your information when you use our website and contact form.',
    path: '/privacy'
})

useBreadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' }
])
</script>
