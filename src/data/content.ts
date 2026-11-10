// =============================================================
// MONETIRA WEBSITE COPY
// Edit the text below to change what appears on the site.
// =============================================================
import { TrendingUp, Workflow, Sparkles, Users, type LucideIcon } from 'lucide-react'

export const hero = {
  eyebrow: 'Independent Business Assessment & Advisory',
  supporting:
    'Your business may have opportunities hiding in plain sight. Monetira helps uncover lost revenue, inefficient processes, customer experience gaps, and practical ways AI can improve everyday operations.',
  primaryCta: 'Get Your Free Business Snapshot',
  secondaryCta: 'Explore Our Business Audit',
}

export type Service = { title: string; description: string; icon: LucideIcon }

export const missingSection = {
  eyebrow: 'Where we look',
  title: 'What Could Your Business Be Missing?',
  services: [
    {
      title: 'Revenue Opportunities',
      description:
        'Identify missed sales, lost leads, inconsistent follow-up, and opportunities to improve customer retention.',
      icon: TrendingUp,
    },
    {
      title: 'Operational Efficiency',
      description:
        'Examine repetitive tasks, workflow bottlenecks, administrative inefficiencies, and unnecessary expenses.',
      icon: Workflow,
    },
    {
      title: 'AI & Automation Opportunities',
      description:
        'Identify where practical AI tools and simple automation could save time, improve communication, and support better decisions.',
      icon: Sparkles,
    },
    {
      title: 'Customer Experience',
      description:
        'Evaluate customer communication, service consistency, retention, and opportunities to strengthen existing relationships.',
      icon: Users,
    },
  ] as Service[],
}

export const aiSection = {
  eyebrow: 'Why AI matters',
  title: 'AI Is Changing Business. But Where Does It Fit in Yours?',
  paragraphs: [
    "Many business owners recognize the potential of artificial intelligence but aren't sure which tools are useful, which processes could benefit, or where to begin.",
    'Monetira evaluates your existing business operations and identifies realistic opportunities to use AI where it makes business sense.',
  ],
  closing: "Our focus is not technology for technology's sake. It is practical improvement.",
  points: [
    'Identify repetitive work that may be automated',
    'Discover AI-assisted solutions for everyday business tasks',
    'Prioritize opportunities based on practicality, cost, and potential value',
  ],
}

export const processSection = {
  eyebrow: 'How it works',
  title: 'How Monetira Works',
  steps: [
    { title: 'Discover', description: 'Complete our free Business Opportunity Snapshot questionnaire.' },
    { title: 'Review', description: 'Receive a brief personalized overview of potential areas worth exploring.' },
    { title: 'Analyze', description: 'Choose a comprehensive Business Opportunity Audit for a deeper evaluation.' },
    { title: 'Improve', description: 'Receive a prioritized action plan with recommendations for improving your business.' },
  ],
}

export const auditSection = {
  eyebrow: 'The Business Opportunity Audit',
  title: 'A Fresh Perspective on Your Business.',
  intro:
    'The Business Opportunity Audit is a comprehensive, independent review of how your business operates today, with clear recommendations on what to improve next.',
  examinesTitle: 'What the audit may examine',
  deliverablesTitle: "What's Included in Your Audit",
  note: 'Recommendations depend on the information supplied. Results are not guaranteed.',
  cta: 'Request a Business Opportunity Audit',
}

export const aboutSection = {
  eyebrow: 'About Monetira',
  title: 'Experienced Perspective. Practical Solutions.',
  paragraphs: [
    'Monetira brings a practical, experience-based approach to business assessment. With a background spanning healthcare operations, national client engagement, customer relationship management, and organizational leadership, we understand how everyday operational challenges can affect customer satisfaction, efficiency, and business performance.',
    'Our goal is straightforward: help business owners recognize opportunities they may be overlooking and make more informed decisions about what to improve next.',
  ],
}

export const finalCta = {
  title: 'What Opportunities Could Your Business Be Missing?',
  supporting:
    'Start with a free Business Opportunity Snapshot and discover where a closer look could make a difference.',
  button: 'Get Your Free Business Snapshot',
}

export const snapshotBand = {
  eyebrow: 'Start here',
  title: 'Begin With a Free Business Snapshot.',
  body: 'Answer a short set of questions about how your business runs today. Your responses are personally reviewed, and you receive a brief overview of areas that may be worth a closer look.',
  button: 'Start Your Free Snapshot',
}

// ---------------- ABOUT PAGE ----------------
export const aboutPage = {
  backgroundEyebrow: 'Background',
  backgroundTitle: 'Experience That Shapes Our Approach.',
  background: [
    'Healthcare business operations',
    'National client engagement',
    'Customer relationship management',
    'Organizational leadership',
  ],
  independentEyebrow: 'Independent by design',
  independentTitle: 'An Independent Perspective.',
  independent: [
    'Monetira helps small and midsize businesses identify overlooked revenue opportunities, operational inefficiencies, customer retention problems, and practical opportunities to use artificial intelligence and automation.',
    'Monetira is not an AI software company, marketing agency, or general technology vendor. It is an independent business assessment and advisory service.',
    'We help business owners discover what may be holding their businesses back and provide clear, actionable recommendations.',
  ],
}

// ---------------- AUDIT PAGE ----------------
export const auditPage = {
  howTitle: 'How the Audit Works',
  how: [
    { title: 'Request', description: 'Send a request through our contact form. We will confirm fit, scope, and next steps with you before any payment.' },
    { title: 'Share information', description: 'Answer a structured set of questions about how your business operates today.' },
    { title: 'Assessment', description: 'Your information is reviewed and evaluated across revenue, operations, customer experience, and AI readiness.' },
    { title: 'Action plan', description: 'Receive your written assessment and a prioritized action plan.' },
  ],
  notAskTitle: 'What we will not ask for',
  notAsk: [
    'Passwords or login credentials',
    'Confidential financial records',
    'Customer lists or customer personal data',
    'Other sensitive business data',
  ],
  paymentNote: 'Online payment is not available yet. Submitting a request does not commit you to purchase.',
}

// ---------------- SNAPSHOT PAGE ----------------
export const snapshotPage = {
  intro:
    'Answer a short set of questions about how your business runs today. Your responses are personally reviewed, and you will receive a brief overview of areas that may be worth a closer look.',
  notes: [
    'Most questions are multiple choice. Optional questions can be skipped.',
    'Please do not share confidential financial records, customer lists, passwords, or other sensitive data.',
    'This is not an automated report. A person reviews every Snapshot before responding.',
  ],
}

// ---------------- CONTACT PAGE ----------------
export const contactPage = {
  title: 'Start a Conversation.',
  intro: 'Have a question, or ready to request a Business Opportunity Audit? Send a message and we will reply by email.',
}
