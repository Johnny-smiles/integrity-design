// nuxt.config.ts
export default defineNuxtConfig({
    // SSR + static output
    ssr: true,
    nitro: {
        preset: 'static',
        prerender: {
            crawlLinks: true,
            failOnError: false, // keep going even if some links/images 404 during crawl
            ignore: [
                '/_ipx/**',   // ignore IPX-transformed URLs
                '/privacy',   // add these pages later
                '/terms'
            ]
            // If you want to lock down to explicit pages only, set crawlLinks:false and add routes:[...]
        }
    },

    // <head> config for {{SITE_NAME}}
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Integrity Design + Build — Renovations Designed Around Your Life',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Integrity Design + Build is a Twin Cities remodeling company specializing in kitchens, bathrooms, basements, and full-home renovations that elevate comfort and style.'
                },
                { name: 'robots', content: 'index, follow' },

                /* Open Graph */
                { property: 'og:title',       content: 'Integrity Design + Build — Renovations Designed Around Your Life' },
                { property: 'og:description', content: 'Integrity Design + Build is a Twin Cities remodeling company specializing in kitchens, bathrooms, basements, and full-home renovations that elevate comfort and style.' },
                { property: 'og:image',       content: 'https://integritydesignmn.com/logo.png' },
                { property: 'og:image:width', content: '400' },
                { property: 'og:image:height', content: '400' },
                { property: 'og:image:alt',    content: 'Integrity Design + Build Logo' },
                { property: 'og:url',         content: 'https://integritydesignmn.com' },
                { property: 'og:type',        content: 'website' },
                { property: 'og:site_name',   content: 'Integrity Design + Build' },

                /* Twitter */
                { name: 'twitter:card',        content: 'summary_large_image' },
                { name: 'twitter:title',       content: 'Integrity Design + Build — Renovations Designed Around Your Life' },
                { name: 'twitter:description', content: 'Integrity Design + Build is a Twin Cities remodeling company specializing in kitchens, bathrooms, basements, and full-home renovations that elevate comfort and style.' },
                { name: 'twitter:image',       content: 'https://integritydesignmn.com/logo.png' },
                { name: 'twitter:image:alt',   content: 'Integrity Design + Build Logo' }
            ],
            link: [
                { rel: 'canonical', href: 'https://integritydesignmn.com' },

                // Fonts (no @nuxtjs/google-fonts needed)
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap'
                },

                // Favicon and Icons
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
            ],
            script: [
                /* Plausible Analytics (new domain) */
                {
                    src: 'https://plausible.io/js/script.js',
                    defer: true,
                    'data-domain': 'integritydesignmn.com'
                },
                /* Google Tag Manager - handled in components for better compatibility */
            ]
        }
    },

    // Nuxt Image (IPX)
    image: {
        provider: 'ipx',
        quality: 75,
        screens: { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
        formats: 'webp'
    },

    // Global CSS (your brand + utility classes live here)
    css: ['~/assets/main.css'],

    modules: [
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxtjs/tailwindcss'
    ],

    tailwindcss: {
        cssPath: '~/assets/main.css',
        configPath: 'tailwind.config.js'
    },

    // Sitemap (module uses this for absolute URLs)
    site: {
        url: 'https://integritydesignmn.com',
        name: 'Integrity Design + Build'
        // You can customize routes/exclude later if needed
    },

    // Compatibility date
    compatibilityDate: '2025-04-10',
    
    // Dev server configuration
    devServer: {
        port: 3000
    },
    
    // Runtime config to avoid serialization issues
    runtimeConfig: {
        public: {
            siteName: 'Integrity Design + Build',
            siteUrl: 'https://integritydesignmn.com'
        }
    }
})
