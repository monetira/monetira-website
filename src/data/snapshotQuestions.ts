// =============================================================
// FREE BUSINESS SNAPSHOT QUESTIONS
// Edit, add, or remove questions here.
// type: 'single' (choose one), 'multi' (choose several), 'text' (typed answer)
// required: false lets visitors skip the question
// =============================================================

export type Question = {
  id: string
  category: string
  question: string
  help?: string
  type: 'single' | 'multi' | 'text'
  options?: string[]
  maxChoices?: number
  required: boolean
  placeholder?: string
}

export const snapshotQuestions: Question[] = [
  {
    id: 'industry',
    category: 'Your business',
    question: 'Which industry best describes your business?',
    type: 'single',
    required: true,
    options: [
      'Professional services',
      'Healthcare or wellness',
      'Retail or e-commerce',
      'Restaurant or hospitality',
      'Home services or trades',
      'Real estate',
      'Manufacturing or distribution',
      'Nonprofit',
      'Other',
    ],
  },
  {
    id: 'size',
    category: 'Your business',
    question: 'How many people work in your business, including you?',
    type: 'single',
    required: true,
    options: ['Just me', '2 to 5', '6 to 20', '21 to 50', '51 to 200', 'More than 200'],
  },
  {
    id: 'challenges',
    category: 'Operations',
    question: 'What are your biggest operational challenges right now?',
    help: 'Choose up to 3.',
    type: 'multi',
    maxChoices: 3,
    required: true,
    options: [
      'Not enough time',
      'Staffing or training',
      'Inconsistent processes',
      'Too much manual paperwork or data entry',
      'Scheduling or coordination',
      'Tracking leads and sales',
      'Rising costs',
      'Keeping customers coming back',
    ],
  },
  {
    id: 'followup',
    category: 'Customers',
    question: 'How do you usually follow up with leads and customers?',
    type: 'single',
    required: true,
    options: [
      'We have a consistent, organized process',
      'We follow up, but it is inconsistent',
      'Mostly when we remember or have time',
      'We rarely follow up',
      'Not sure',
    ],
  },
  {
    id: 'adminTime',
    category: 'Operations',
    question: 'About how much time does your team spend each week on repetitive administrative work?',
    help: 'For example: data entry, scheduling, invoicing, answering the same questions, or copying information between systems.',
    type: 'single',
    required: true,
    options: ['Less than 2 hours', '2 to 5 hours', '6 to 10 hours', '11 to 20 hours', 'More than 20 hours', 'Not sure'],
  },
  {
    id: 'tools',
    category: 'Technology',
    question: 'Which tools does your business currently use?',
    help: 'Choose all that apply. Optional.',
    type: 'multi',
    required: false,
    options: [
      'Spreadsheets',
      'Accounting software',
      'CRM or customer database',
      'Email marketing',
      'Scheduling or booking software',
      'Point of sale system',
      'Project or task management',
      'Mostly paper or manual records',
    ],
  },
  {
    id: 'aiUsage',
    category: 'AI & automation',
    question: 'How is your business using AI tools today?',
    type: 'single',
    required: true,
    options: [
      'Not at all',
      'A few people experiment with tools like ChatGPT',
      'We use AI for some regular tasks',
      'AI is part of several everyday processes',
      'Not sure',
    ],
  },
  {
    id: 'retention',
    category: 'Customers',
    question: 'Which customer retention challenges sound familiar?',
    help: 'Choose all that apply. Optional.',
    type: 'multi',
    required: false,
    options: [
      'Customers buy once and do not return',
      'We do not know why customers leave',
      'Inconsistent customer service',
      'Slow response times',
      'Few reviews or referrals',
      'None of these',
    ],
  },
  {
    id: 'inefficiencies',
    category: 'Operations',
    question: 'Where do you suspect your business is losing time or money?',
    help: 'Optional. A sentence or two is plenty. Please do not include confidential financial details.',
    type: 'text',
    required: false,
    placeholder: 'For example: quotes take too long to send, or we lose track of follow-ups.',
  },
  {
    id: 'goals',
    category: 'Goals',
    question: 'What are your primary goals for improving your business?',
    help: 'Choose up to 3.',
    type: 'multi',
    maxChoices: 3,
    required: true,
    options: [
      'Increase revenue',
      'Keep more customers',
      'Save time',
      'Reduce costs',
      'Improve the customer experience',
      'Use AI more effectively',
      'Get more organized',
      'Prepare to grow',
    ],
  },
  {
    id: 'anythingElse',
    category: 'Goals',
    question: 'Is there anything else you would like us to know?',
    help: 'Optional.',
    type: 'text',
    required: false,
    placeholder: 'Anything that would help us understand your business.',
  },
]
