// site.config.ts
export const siteConfig = {
    siteName: "Integrity Design + Build",
    siteUrl: "https://integritydesignmn.com",

    // Contact
    phone: "+1-651-333-4043",            // E.164 for tel: links
    phoneDisplay: "(651) 333-4043",      // Pretty display
    email: "info@integritydesignmn.com",

    // Location
    location: {
        street: "4125 White Bear Pkwy Ste 140",
        city: "White Bear Lake",
        state: "MN",
        zip: "55110",
        country: "US",
        latitude: "45.0631",
        longitude: "-93.0101"
    },

    // Business meta
    description: "Integrity Design + Build is a Twin Cities remodeling company specializing in kitchens, bathrooms, basements, and full-home renovations that elevate comfort and style.",
    hours: "Mo–Fr 08:00-17:00",
    businessType: "HomeAndConstructionBusiness",

    // Assets
    socialImage: "/images/kitchen-remodel.svg",
    favicon: "/favicon.png",

    // Theme
    theme: {
        primaryColor: '#b11212',
        secondaryColor: '#ffffff',
        fontFamily: ['Playfair Display', 'Inter'],
        borderRadius: '0.5rem'
    },

    // Hero copy (used in Index sections below if you want to bind it)
    hero: {
        eyebrow: "Twin Cities Remodeling Experts",
        headline: "Renovations Designed Around Your Life",
        subheadline: "Integrity Design + Build crafts kitchens, baths, and basements near you with thoughtful design, clear budgets, and meticulous construction.",
        ctaPrimaryLabel: "Call (651) 333-4043",
        ctaSecondaryLabel: "Book a Design Consult"
    },

    // Services summary (HomepageServices already handles grid; this supports extra sections on index)
    services: [
        {
            title: "Kitchen Remodeling",
            blurb: "Custom cabinetry, smart storage, and lighting that make cooking and gathering effortless.",
            bullets: ["Tailored layouts", "Material guidance", "Project updates"]
        },
        {
            title: "Bathroom Remodeling",
            blurb: "Spa-inspired finishes paired with practical layouts that simplify your morning routine.",
            bullets: ["Tile & fixtures", "Moisture planning", "Coordinated trades"]
        },
        {
            title: "Basement Finishing",
            blurb: "From cozy family rooms to home offices, we build spaces that fit how you live.",
            bullets: ["Moisture control", "Zoned lighting", "Built-in storage"]
        }
    ],

    // Why choose us
    valueProps: [
        { title: "Design + Build Team", text: "From initial sketches to the final walk-through, one aligned team guides every decision." },
        { title: "Respectful In-Home Crew", text: "We protect your home, communicate daily, and keep the jobsite clean throughout the project." },
        { title: "Budgets That Hold", text: "Transparent allowances and proactive updates prevent surprises so you can plan with confidence." }
    ],

    // Reviews (simple placeholders; replace with real quotes when ready)
    reviews: [
        { name: "Heather L.", text: "Our kitchen feels brighter, smarter, and truly ours. The team kept us in the loop every day." },
        { name: "David P.", text: "Integrity handled our basement from permits to finishes. The project wrapped on schedule and on budget." },
        { name: "Rachel W.", text: "Thoughtful design ideas and quality craftsmanship. We recommend them to friends constantly." }
    ],

    // FAQs
    faqs: [
        {
            q: "How long does a typical remodel take?",
            a: "Kitchen and bathroom projects often run 6–10 weeks. Larger renovations vary, and we share a detailed timeline before work begins."
        },
        {
            q: "Do you offer design services?",
            a: "Yes. Our in-house designers help you select layouts, finishes, and fixtures aligned with your style and budget."
        },
        {
            q: "Will someone help manage permits and inspections?",
            a: "We handle permitting, coordinate inspections, and keep you updated on every milestone."
        },
        {
            q: "Can you work around our family’s schedule?",
            a: "We plan workdays around your routines and maintain safe, livable spaces whenever possible."
        },
        {
            q: "What areas do you serve?",
            a: "We remodel homes in White Bear Lake, Vadnais Heights, Maplewood, Shoreview, St Paul, and nearby communities."
        }
    ],

    // Service areas
    serviceAreas: [
        "White Bear Lake",
        "Vadnais Heights",
        "Maplewood",
        "Shoreview",
        "St Paul"
    ],

    // Social links (optional)
    social: {
        website: "https://integritydesignmn.com",
        facebook: "https://www.facebook.com/IntegrityDesignBuildMN",
        instagram: "https://www.instagram.com/integritydesignbuild/"
    }
}
