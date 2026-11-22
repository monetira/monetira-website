// =============================================================
// MONETIRA SITE SETTINGS
// Edit this file to change price, audit details, contact details,
// and form setup. Text changes here update every page automatically.
// =============================================================

export const site = {
  name: 'Monetira',
  domain: 'monetira.com',
  headline: 'Great business. Wrong first impression?',
  // Previous headline (audit site): 'Find What Your Business Is Missing.'
  tagline: 'Every customer matters. Every dollar counts.',

  // Contact details. Leave blank ('') to hide them on the site.
  contactEmail: 'monetira7@gmail.com',
  contactPhone: '',
  location: '',

  // FORM CONNECTIONS (Tally)
  // When the Tally Snapshot form is published, paste its link here, for example
  // 'https://tally.so/r/abc123'. The Snapshot page will then show the Tally form
  // embedded in the site. While blank, the preview questionnaire is shown and
  // cannot be submitted.
  snapshotTallyUrl: 'https://tally.so/r/RWdO2j',
  // Optional: a Tally link for the contact form. While blank, the contact form
  // is labeled "not yet connected" and visitors are shown the email address.
  // Public project inquiry form, embedded on the Contact page.
  contactTallyUrl: 'https://tally.so/r/9N7vyp',
  // Private Website Vision questionnaire for clients (page /website-vision, not in the menu).
  visionTallyUrl: 'https://tally.so/r/e5a2Vo',
  formProviderName: 'Tally', // shown in the Privacy Policy

  // Privacy Policy "last updated" date
  privacyLastUpdated: 'November 2026',
}

// -------------------------------------------------------------
// FREE BUSINESS SNAPSHOT
// -------------------------------------------------------------
export const snapshot = {
  name: 'Free Business Snapshot',
  timeEstimate: 'About 5 to 10 minutes',
  responseTime: '', // e.g. 'within 5 business days'. Leave blank to hide.
  highlights: ['Free', 'About 5 to 10 minutes', 'No obligation to purchase'],
}

// -------------------------------------------------------------
// BUSINESS OPPORTUNITY AUDIT
// Scope, deliverables, and turnaround are finalized before launch.
// -------------------------------------------------------------
export const audit = {
  price: 295,
  priceLabel: 'Introductory price',

  // Leave blank ('') to hide. Example: '10 business days after we receive your information'
  turnaround: '',

  scope: [
    'Revenue and customer retention opportunities',
    'Operational inefficiencies',
    'Customer communication and follow-up',
    'AI and automation readiness',
    'Existing business processes',
    'Practical opportunities for improvement',
  ],

  deliverables: [
    'Written business assessment',
    'Identification of priority improvement opportunities',
    'AI and automation recommendations where appropriate',
    'Suggested next steps',
    'Prioritized action plan',
  ],
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)

// Builds the path to a file in the public folder (works in preview and live builds)
export const asset = (path: string) =>
  path.startsWith('data:') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
