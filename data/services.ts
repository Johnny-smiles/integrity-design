export type Service = {
  slug: string
  title: string
  summary: string
  bullets: string[]
  schemaType?: 'Service' | 'HVACBusiness' | 'AutoRepair' // optional
  // SEO enhancements
  metaDescription?: string
  keywords?: string[]
  content?: string // Full page content for SEO
  image?: string // Service-specific image
}

export const services: Service[] = [
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    summary: 'Custom kitchen renovations that balance beauty, efficiency, and craftsmanship.',
    metaDescription: 'Kitchen remodeling in White Bear Lake and the Twin Cities east metro. Integrity Design + Build delivers tailored layouts, curated materials, and clear communication.',
    keywords: ['kitchen remodeling', 'White Bear Lake kitchen design', 'Twin Cities kitchen contractors'],
    bullets: [
      'Modern, functional layouts',
      'Cabinetry and countertops tailored to your home',
      'Lighting and flooring design upgrades'
    ],
    content: `
      <section>
        <h2>Chef-Ready Kitchen Remodeling</h2>
        <p>We begin with how you cook, gather, and move through the space, then plan cabinetry, storage, and lighting that support those habits. You receive clear allowances, a material palette that feels warm and timeless, and a schedule that respects your routines.</p>
        <ul>
          <li>Design workshop to map ideal zones, flows, and appliances.</li>
          <li>Custom cabinetry, countertops, and lighting plans curated with our designers.</li>
          <li>Weekly milestone updates so you always know what is happening next.</li>
        </ul>
        <p><strong>Ready to start?</strong> Book a design consult and we will translate your wish list into mood boards, elevations, and a build-ready plan.</p>
      </section>
      <section>
        <h3>Kitchen Remodeling FAQs</h3>
        <dl>
          <dt>Can we stay in the home during the remodel?</dt>
          <dd>Yes. We create temporary kitchen setups and protect walkways so you can stay comfortable throughout the project.</dd>
          <dt>Do you help with appliance selection?</dt>
          <dd>We coordinate appliance packages and ensure cabinetry, ventilation, and electrical plans match each choice.</dd>
          <dt>How long does a typical kitchen project take?</dt>
          <dd>Most kitchens run eight to ten weeks once materials are on site. We build a detailed calendar before we begin.</dd>
          <dt>Can you rework the floor plan?</dt>
          <dd>Absolutely. We assess structural needs, plan permits, and manage all trades required for a revised layout.</dd>
        </dl>
      </section>
    `,
    image: '/images/kitchen-remodel.svg'
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    summary: 'Elegant, spa-inspired bathrooms designed to refresh and rejuvenate your space.',
    metaDescription: 'Bathroom remodeling experts for White Bear Lake, Vadnais Heights, and surrounding communities. Integrity Design + Build crafts relaxing retreats with durable, high-performing materials.',
    keywords: ['bathroom remodeling', 'spa bathroom design', 'Twin Cities bath renovation'],
    bullets: [
      'Tile and fixture upgrades',
      'Custom vanities and glass showers',
      'Full design-build project management'
    ],
    content: `
      <section>
        <h2>Spa-Inspired Bathroom Remodeling</h2>
        <p>Each bath renovation blends beautiful finishes with moisture-smart construction. From heated floors to curbless showers, we design storage, lighting, and ventilation that make every morning feel calmer.</p>
        <ul>
          <li>Detailed layout options that consider plumbing, privacy, and natural light.</li>
          <li>Selections library featuring tile, stone, fixtures, and millwork that age gracefully.</li>
          <li>Coordinated trades who respect your home and keep the jobsite spotless.</li>
        </ul>
        <p><strong>Let’s plan your refresh.</strong> Schedule a consultation and we will produce renderings, finish pairings, and a realistic budget roadmap.</p>
      </section>
      <section>
        <h3>Bathroom Remodeling FAQs</h3>
        <dl>
          <dt>Can you convert a tub to a walk-in shower?</dt>
          <dd>Yes. We handle plumbing moves, waterproofing, and glass selections for safe, accessible showers.</dd>
          <dt>What waterproofing system do you use?</dt>
          <dd>We install industry-leading membranes and test every shower pan to ensure long-term durability.</dd>
          <dt>Do you offer heated flooring?</dt>
          <dd>We frequently add radiant heat mats with dedicated controls for warm, efficient comfort.</dd>
          <dt>How do you protect adjacent rooms?</dt>
          <dd>Containment, dust extraction, and daily cleanup keep the rest of your home comfortable.</dd>
        </dl>
      </section>
    `,
    image: '/images/bathroom-remodel.svg'
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    summary: 'Transform underused basements into cozy family rooms, offices, or guest suites.',
    metaDescription: 'Basement finishing and remodeling in the Twin Cities east metro. Integrity Design + Build creates multi-purpose lower levels with smart storage, lighting, and moisture protection.',
    keywords: ['basement finishing', 'lower level remodel', 'White Bear Lake basement contractor'],
    bullets: [
      'Drywall, flooring, and lighting',
      'Entertainment and bar areas',
      'Waterproofing and insulation'
    ],
    content: `
      <section>
        <h2>Basement Finishing & Lower-Level Remodeling</h2>
        <p>We turn unused square footage into media rooms, guest suites, or flexible offices with proper insulation, lighting layers, and code-compliant egress. Every plan balances comfort, storage, and resale value.</p>
        <ul>
          <li>Moisture assessment, insulation strategy, and HVAC planning from the outset.</li>
          <li>Custom zones for lounging, play, fitness, or work with tailored built-ins.</li>
          <li>Optional wet bars, bathrooms, and fireplace features to elevate the space.</li>
        </ul>
        <p><strong>Imagining your new lower level?</strong> We’ll walk the space, gather your priorities, and deliver a phased plan that fits your timeline.</p>
      </section>
      <section>
        <h3>Basement Remodeling FAQs</h3>
        <dl>
          <dt>Do you address moisture issues before finishing?</dt>
          <dd>Absolutely. We evaluate drainage, recommend mitigation, and document solutions before framing.</dd>
          <dt>Can you add bedrooms that meet code?</dt>
          <dd>Yes. We design egress-compliant bedrooms and coordinate inspections to ensure safety.</dd>
          <dt>What flooring works best in basements?</dt>
          <dd>We guide you toward luxury vinyl, engineered wood, or tile systems suited to below-grade environments.</dd>
          <dt>Is full-home integration possible?</dt>
          <dd>We can match upstairs finishes, integrate smart tech, and tie the design into the rest of your home.</dd>
        </dl>
      </section>
    `,
    image: '/images/basement-finishing.svg'
  }
]
