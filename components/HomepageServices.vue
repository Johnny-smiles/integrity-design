<template>
    <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
            <!-- three-wide grid on lg, two-wide on md, single on mobile -->
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="service in homepageServices" :key="service.slug" class="group">
                    <NuxtLink :to="`/services/${service.slug}`">
                        <ServiceCardSimple
                            :title="service.title"
                            :description="service.summary"
                        />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCardSimple from '~/components/ServiceCardSimple.vue'
import { services } from '~/data/services'

// Show first 3 services on homepage
const homepageServices = services.slice(0, 3)
</script>
