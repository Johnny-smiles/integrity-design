<template>
    <div class="card-box text-center border-t-2 border-brand-dark pt-2 animate-fade-in cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-brand-primary active:scale-100">
        <h3 class="text-2xl md:text-3xl font-semibold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
            {{ title }}
        </h3>
        <p class="text-base md:text-lg text-brand-dark/80">
            {{ description }}
        </p>
        <div class="mt-4 flex items-center justify-center gap-2 text-brand-primary font-semibold text-sm">
            <span>Learn More</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>
