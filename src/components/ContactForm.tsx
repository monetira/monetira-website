import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { submitForm } from '../lib/submitForm'
import { NotConnectedNotice, ErrorMessage, SuccessPanel } from './FormStatus'

const topics = [
  { value: 'audit', label: 'Request a Business Opportunity Audit' },
  { value: 'snapshot', label: 'A question about the Free Business Snapshot' },
  { value: 'general', label: 'General question' },
]

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20'
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

export default function ContactForm() {
  const [params] = useSearchParams()
  const initialTopic = topics.some((t) => t.value === params.get('topic')) ? params.get('topic')! : 'general'
  const connected = false // replaced by Tally when contactTallyUrl is set

  const [f, setF] = useState({ name: '', email: '', business: '', topic: initialTopic, message: '', consent: false, website_url: '' })
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!f.name.trim()) return setError('Please enter your name.')
    if (!emailOk(f.email)) return setError('Please enter a valid email address.')
    if (!f.message.trim()) return setError('Please enter a message.')
    if (!f.consent) return setError('Please confirm the consent statement to send your message.')
    if (!connected) return setError('This form is not yet connected, so nothing was sent.')
    setError('')
    setSending(true)
    const result = await submitForm('', {
      form: 'Contact',
      name: f.name,
      email: f.email,
      business: f.business,
      topic: topics.find((t) => t.value === f.topic)?.label,
      message: f.message,
      _gotcha: f.website_url,
    })
    setSending(false)
    if (result.ok) setSent(true)
    else setError(result.message)
  }

  if (sent) {
    return (
      <SuccessPanel title="Thank you. Your message has been sent.">
        <p>We will reply by email.</p>
      </SuccessPanel>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-line bg-white p-6 md:p-10">
      {!connected && (
        <div className="mb-8">
          <NotConnectedNotice />
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold">Your name</label>
          <input id="c-name" autoComplete="name" className={inputClass} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} required />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold">Email address</label>
          <input id="c-email" type="email" autoComplete="email" className={inputClass} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} required />
        </div>
        <div>
          <label htmlFor="c-business" className="mb-1.5 block text-sm font-semibold">
            Business name <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input id="c-business" autoComplete="organization" className={inputClass} value={f.business} onChange={(e) => setF({ ...f, business: e.target.value })} />
        </div>
        <div>
          <label htmlFor="c-topic" className="mb-1.5 block text-sm font-semibold">Topic</label>
          <select id="c-topic" className={inputClass} value={f.topic} onChange={(e) => setF({ ...f, topic: e.target.value })}>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold">Message</label>
          <textarea id="c-message" rows={6} maxLength={3000} className={inputClass} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} required />
          <p className="mt-2 text-sm text-ink-soft">
            Please do not include confidential financial records, customer lists, passwords, or other sensitive data.
          </p>
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="c-website">Leave this empty</label>
          <input id="c-website" tabIndex={-1} autoComplete="off" value={f.website_url} onChange={(e) => setF({ ...f, website_url: e.target.value })} />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer gap-3 rounded-xl bg-ivory p-4 text-sm leading-relaxed">
        <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-teal" checked={f.consent} onChange={(e) => setF({ ...f, consent: e.target.checked })} />
        <span>
          I agree that Monetira may use the information I provide to reply to my message. See the{' '}
          <Link to="/privacy" className="font-semibold text-teal underline">Privacy Policy</Link>.
        </span>
      </label>

      {error && (
        <div className="mt-6">
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-teal-dark disabled:opacity-60"
        >
          {sending && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />}
          {sending ? 'Sending...' : connected ? 'Send message' : 'Send (not yet connected)'}
        </button>
      </div>
    </form>
  )
}
