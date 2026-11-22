// =============================================================
// MONETIRA STUDIO COPY (websites & digital solutions)
// Edit the text below to change what appears on the new site.
// =============================================================

export const studio = {
  descriptor: 'Websites & Digital Solutions for Small Businesses',
}

export const workSection = {
  eyebrow: 'Selected work',
  title: 'Different businesses.',
  titleAccent: 'Thoughtfully designed.',
  link: 'View all work',
}

export type PriceItem = { name: string; description: string; price: string; note?: string }

export const pricingSection = {
  eyebrow: 'Services & pricing',
  title: 'Clear prices.',
  titleAccent: 'No agency markup.',
  intro:
    'Professional informational websites for small businesses, built to look polished on every screen. Introductory prices are listed below, and every project starts with a short conversation about what you need.',
  includesTitle: 'Every website includes',
  includes: [
    'Mobile-friendly design and search engine basics',
    'One standard informational inquiry form',
    'Two consolidated revision rounds within the agreed scope',
    'Client ownership of the website upon final payment',
  ],
  items: [
    { name: 'Essential', description: 'A polished one-page website.', price: '$300' },
    { name: 'Business', description: 'Up to five standard pages.', price: '$500' },
    { name: 'Advanced', description: 'Larger sites, galleries, and custom features.', price: 'From $750' },
    { name: 'Additional forms', description: 'Extra inquiry, quote, or intake forms. Information only, no payments.', price: 'From $100' },
    { name: 'Minor updates', description: 'Text, photo, and hours changes after launch.', price: 'From $50' },
    {
      name: 'Website Care Plan',
      description: 'Up to 60 minutes of minor edits plus routine monthly checks.',
      price: '$99/mo',
      note: 'Optional. Capped at 60 minutes per month. Unused time does not roll over.',
    },
    {
      name: 'Additional work',
      description: 'Anything beyond the agreed scope or care plan.',
      price: '$75/hr',
      note: 'Always quoted and approved by you before work begins.',
    },
  ] as PriceItem[],
  timeline: 'Project timelines are established individually based on scope, complexity and availability.',
  footnote:
    'Introductory prices. Third-party costs such as your domain, hosting, and any subscriptions are separate and disclosed up front. We do not build online stores or process payments.',
}

export const processSection2 = {
  eyebrow: 'How it works',
  title: 'Simple process.',
  steps: [
    { title: 'Tell us about your business', description: 'A short inquiry, then a quick conversation about your goals, customers, and the pages you need.' },
    { title: 'We design and build', description: 'You share your content and photos. We design and build your site, then send you a private preview.' },
    { title: 'Review, approve, and launch', description: 'Two consolidated revision rounds, then we connect your domain. Ownership transfers to you upon final payment.' },
  ],
}

export const experienceSection = {
  eyebrow: 'Why Monetira',
  title: 'Designed differently.',
  titleAccent: 'Built with business in mind.',
  paragraphs: [
    'Monetira was built on years of experience in healthcare operations, national client engagement, customer relationship management, and organizational leadership. We know how customers decide who to trust, and how much a first impression matters.',
    'That is what we design for: websites that are clear, credible, and easy to use. No unnecessary complexity, and no agency price tag.',
  ],
}

export const studioCta = {
  title: 'Ready for a better',
  titleAccent: 'first impression?',
  supporting: 'Tell us a little about your business. We will reply by email with next steps, with no obligation.',
  button: 'Start Your Project',
}

export const workPage = {
  eyebrow: 'Our work',
  title: 'Selected projects.',
  intro:
    'A selection of independently developed websites showcasing our approach to design, functionality and digital experiences across different industries.',
}

// Order of projects on the Our Work page (by slug)
export const workPageOrder = ['bob-graf-music', 'paw-protection-alliance', 'grafvonzepp']

export const workCta = {
  title: 'Your business could be next.',
  supporting: "Let's create a website that reflects your business, your vision and your goals.",
  button: 'Start Your Project',
}

// ---------------- SERVICES PAGE ----------------
export const servicesPage = {
  eyebrow: 'Services',
  title: 'Websites, thoughtfully made.',
  intro:
    'Monetira is a boutique design studio. Every website is designed around your business, your customers and your goals, with clear introductory pricing and personal service from first conversation to launch.',
  faqTitle: 'Common questions',
  faqs: [
    {
      q: 'How long does a project take?',
      a: 'Project timelines are established individually based on scope, complexity and availability. We will agree on a timeline with you before work begins.',
    },
    {
      q: 'What do I need to provide?',
      a: 'Your text, photos, logo and any branding you already have. After we agree on scope, you will receive our Website Vision questionnaire to gather everything in one place.',
    },
    {
      q: 'Who owns the website?',
      a: 'You do. Ownership of the website transfers to you upon final payment, and your domain is registered in your name.',
    },
    {
      q: 'Are there other costs?',
      a: 'Third-party costs such as your domain, hosting and any subscriptions are separate. We disclose them up front so there are no surprises.',
    },
    {
      q: 'Do you build online stores?',
      a: 'No. We focus on professional informational websites. We do not build online stores, process payments or collect sensitive data through forms.',
    },
    {
      q: 'What happens after launch?',
      a: 'You can request individual updates as needed, or choose the optional Website Care Plan for ongoing minor edits and routine monthly checks.',
    },
  ],
}

// ---------------- ABOUT PAGE ----------------
export const aboutStudio = {
  eyebrow: 'About',
  title: 'A boutique studio,',
  titleAccent: 'built on business experience.',
  intro:
    'Monetira designs professional websites for small businesses that deserve to look as good online as they are in person.',
  storyTitle: 'Why Monetira exists',
  story: [
    'Many small businesses do excellent work but are held back by an outdated website, a poor mobile experience, or no website at all. Customers notice, and they often move on before ever making contact.',
    'Monetira was built on years of experience in healthcare operations, national client engagement, customer relationship management and organizational leadership. That background shapes how we design: around how customers decide who to trust, and what makes it easy for them to reach out.',
  ],
  valuesTitle: 'How we work',
  values: [
    { title: 'Personal service', description: 'You work directly with the person designing your website, from first conversation to launch.' },
    { title: 'Designed for you', description: 'No interchangeable templates. Each site reflects your business, your customers and your goals.' },
    { title: 'Clear and honest', description: 'Introductory pricing, defined scope and third-party costs disclosed up front.' },
    { title: 'Yours to keep', description: 'Ownership of your website transfers to you upon final payment.' },
  ],
}

// ---------------- CONTACT PAGE ----------------
export const contactStudio = {
  eyebrow: 'Contact',
  title: 'Start your project.',
  intro: 'Tell us a little about your business and what you need. We will reply by email with next steps, with no obligation.',
  pending: 'Our project inquiry form is coming soon. In the meantime, email us and we will reply with next steps.',
  nextTitle: 'What happens next',
  next: [
    'We review your inquiry and reply by email.',
    'We schedule a short conversation about your goals and the pages you need.',
    'You receive a proposal with scope, pricing and an individual project timeline.',
  ],
}

export const visionPage = {
  eyebrow: 'For clients',
  title: 'Your Website Vision.',
  intro:
    'Thank you for choosing Monetira. This questionnaire covers your goals, customers, style preferences, content, pages, and domain, so we can design a site that fits your business. It takes about 15 to 20 minutes.',
  pending: 'The questionnaire will appear here once it is connected.',
}
