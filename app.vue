<template>
    <div>
        <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-brand-primary">
            Skip to content
        </a>

        <!-- Google Tag Manager -->
        <ClientOnly>
            <GoogleTagManager />
        </ClientOnly>

        <NavBar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import GoogleTagManager from '~/components/GoogleTagManager.vue'
</script>
