// =============================================================
// PORTFOLIO PROJECTS
// Add, remove, or reorder projects here. Screenshots go in
// public/images/work/. Leave an image blank ('') to show a
// "screenshot coming soon" placeholder.
// =============================================================

export type Project = {
  slug: string
  name: string
  category: string
  description: string
  features: string[]
  desktopImage: string
  mobileImage: string
  liveUrl?: string
  // true = developed independently, not commissioned by a paying client
  portfolioProject: boolean
  featured?: boolean
  // false = hidden from the site (data kept for later)
  published: boolean
}

export const projects: Project[] = [
  {
    slug: 'grafvonzepp',
    name: 'GrafVonZepp',
    category: 'Boutique retail',
    description:
      'An elegant storefront website for an 18K gold plated jewelry line, moved from a template builder to fast, independent hosting with a refined, luxurious look.',
    features: ['Brand-led design', 'Product categories', 'Marketplace links', 'Custom domain'],
    desktopImage: 'images/work/grafvonzepp-desktop.jpg',
    mobileImage: 'images/work/grafvonzepp-mobile.jpg',
    liveUrl: 'https://grafvonzepp.com',
    portfolioProject: true,
    featured: true,
    published: true,
  },
  {
    slug: 'paw-protection-alliance',
    name: 'Paw Protection Alliance',
    category: 'Advocacy & education',
    description:
      'A research and advocacy website dedicated to animal protection, featuring a legislative tracker, educational research articles and integrated contact functionality.',
    features: ['Legislation tracker', 'Research library', 'Photo credits system', 'Contact form'],
    desktopImage: 'images/work/paw-protection-alliance-desktop.jpg',
    mobileImage: '',
    liveUrl: 'https://pawprotectionalliance.org',
    portfolioProject: true,
    featured: true,
    published: true,
  },
  {
    slug: 'bob-graf-music',
    name: 'Bob Graf Music',
    category: 'Music history & archive',
    description:
      'A website for a jazz saxophonist, presenting his music, history, and career through archival research, historical documents, and multimedia presentation.',
    features: ['Historical preservation', 'Archival research', 'Audio and video', 'Photo archive'],
    desktopImage: 'images/work/bob-graf-music-desktop.jpg',
    mobileImage: '',
    liveUrl: 'https://bobgrafmusic.com',
    portfolioProject: true,
    featured: true,
    published: true,
  },
  {
    slug: 'digital-tools',
    name: 'Custom Digital Tools',
    category: 'Interactive tools',
    description:
      'Single-page web tools, including an interactive tarot card picker and an event bar quantity calculator, built to engage visitors and capture email signups.',
    features: ['Interactive design', 'Calculators', 'Email list integration'],
    desktopImage: '',
    mobileImage: '',
    portfolioProject: true,
    featured: true,
    published: false, // hidden until completed tools have screenshots
  },
]

// Projects visible on the site
export const publishedProjects = projects.filter((p) => p.published)
