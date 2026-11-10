import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { snapshotQuestions as questions, type Question } from '../data/snapshotQuestions'
import { submitForm } from '../lib/submitForm'
import { NotConnectedNotice, ErrorMessage, SuccessPanel } from './FormStatus'

type Answers = Record<string, string | string[]>
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-charcoal placeholder:text-ink-soft/60 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20'

export default function Questionnaire() {
  const connected = false // preview only; the live form is the Tally embed
  const total = questions.length + 1 // questions plus contact step
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [contact, setContact] = useState({ name: '', email: '', business: '', consent: false, website_url: '' })
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    headingRef.current?.focus()
  }, [step])

  const isContactStep = step === questions.length
  const q: Question | undefined = questions[step]

  const value = q ? answers[q.id] : undefined
  const isEmpty = !value || (Array.isArray(value) ? value.length === 0 : value.trim() === '')

  const setAnswer = (id: string, v: string | string[]) => {
    setError('')
    setAnswers((a) => ({ ...a, [id]: v }))
  }

  const toggleMulti = (qq: Question, option: string) => {
    const current = (answers[qq.id] as string[] | undefined) ?? []
    if (current.includes(option)) return setAnswer(qq.id, current.filter((o) => o !== option))
    if (qq.maxChoices && current.length >= qq.maxChoices) {
      setError(`Please choose up to ${qq.maxChoices}.`)
      return
    }
    setAnswer(qq.id, [...current, option])
  }

  const next = () => {
    if (q?.required && isEmpty) {
      setError('Please answer this question to continue.')
      return
    }
    setError('')
    setStep((s) => Math.min(s + 1, total - 1))
  }

  const back = () => {
    setError('')
    setStep((s) => Math.max(s - 1, 0))
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!contact.name.trim()) return setError('Please enter your name.')
    if (!emailOk(contact.email)) return setError('Please enter a valid email address.')
    if (!contact.consent) return setError('Please confirm the consent statement to submit.')
    if (!connected) return setError('This form is not yet connected, so nothing was sent.')
    setError('')
    setSending(true)
    const payload: Record<string, unknown> = {
      form: 'Free Business Snapshot',
      name: contact.name,
      email: contact.email,
      business: contact.business,
      _gotcha: contact.website_url, // spam trap; real visitors never fill this
    }
    questions.forEach((qq) => {
      const v = answers[qq.id]
      payload[qq.question] = Array.isArray(v) ? v.join(', ') : (v ?? '')
    })
    const result = await submitForm('', payload)
    setSending(false)
    if (result.ok) setSent(true)
    else setError(result.message)
  }

  if (sent) {
    return (
      <SuccessPanel title="Thank you. Your Snapshot has been received.">
        <p>
          Your answers will be personally reviewed, and you will receive a brief overview by email. There is no
          obligation to purchase anything.
        </p>
      </SuccessPanel>
    )
  }

  const progress = Math.round(((step + 1) / total) * 100)

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_48px_-32px_rgba(37,37,37,0.3)] md:p-10">
      {!connected && (
        <div className="mb-8">
          <NotConnectedNotice />
        </div>
      )}

      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="text-teal">{isContactStep ? 'Your details' : q?.category}</span>
          <span className="text-ink-soft">
            Step {step + 1} of {total}
          </span>
        </div>
        <div
          className="h-1.5 w-full rounded-full bg-ivory"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Questionnaire progress"
        >
          <div className="h-1.5 rounded-full bg-teal transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {!isContactStep && q && (
        <fieldset>
          <legend className="contents">
            <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-bold leading-snug focus:outline-none md:text-[1.7rem]">
              {q.question}
              {!q.required && <span className="ml-2 align-middle text-sm font-medium text-ink-soft">(optional)</span>}
            </h2>
          </legend>
          {q.help && <p className="mt-2 text-ink-soft">{q.help}</p>}

          <div className="mt-7">
            {q.type === 'text' ? (
              <>
                <label htmlFor={q.id} className="sr-only">
                  {q.question}
                </label>
                <textarea
                  id={q.id}
                  rows={4}
                  maxLength={1000}
                  className={inputClass}
                  placeholder={q.placeholder}
                  value={(answers[q.id] as string) ?? ''}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                />
              </>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {q.options!.map((opt) => {
                  const checked =
                    q.type === 'single' ? answers[q.id] === opt : ((answers[q.id] as string[]) ?? []).includes(opt)
                  return (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 transition-colors ${
                        checked ? 'border-teal bg-teal/5' : 'border-line hover:border-charcoal/30'
                      }`}
                    >
                      <input
                        type={q.type === 'single' ? 'radio' : 'checkbox'}
                        name={q.id}
                        className="h-4 w-4 accent-teal"
                        checked={checked}
                        onChange={() => (q.type === 'single' ? setAnswer(q.id, opt) : toggleMulti(q, opt))}
                      />
                      <span className="text-[15px]">{opt}</span>
                    </label>
                  )
                })}
              </div>
            )}
          </div>
        </fieldset>
      )}

      {isContactStep && (
        <form id="snapshot-form" onSubmit={submit} noValidate>
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-bold focus:outline-none md:text-[1.7rem]">
            Where should we send your Snapshot?
          </h2>
          <p className="mt-2 text-ink-soft">We only ask for what we need to reply to you.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="snap-name" className="mb-1.5 block text-sm font-semibold">
                Your name
              </label>
              <input
                id="snap-name"
                autoComplete="name"
                className={inputClass}
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="snap-email" className="mb-1.5 block text-sm font-semibold">
                Email address
              </label>
              <input
                id="snap-email"
                type="email"
                autoComplete="email"
                className={inputClass}
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="snap-business" className="mb-1.5 block text-sm font-semibold">
                Business name <span className="font-normal text-ink-soft">(optional)</span>
              </label>
              <input
                id="snap-business"
                autoComplete="organization"
                className={inputClass}
                value={contact.business}
                onChange={(e) => setContact({ ...contact, business: e.target.value })}
              />
            </div>
            {/* Spam trap, hidden from people */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="snap-website">Leave this empty</label>
              <input
                id="snap-website"
                tabIndex={-1}
                autoComplete="off"
                value={contact.website_url}
                onChange={(e) => setContact({ ...contact, website_url: e.target.value })}
              />
            </div>
          </div>

          <label className="mt-7 flex cursor-pointer gap-3 rounded-xl bg-ivory p-4 text-sm leading-relaxed">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 accent-teal"
              checked={contact.consent}
              onChange={(e) => setContact({ ...contact, consent: e.target.checked })}
            />
            <span>
              I agree that Monetira may use my answers and contact details to review my business and reply to me by
              email. I understand the Snapshot is free, there is no obligation to purchase, and I should not include
              confidential financial records, customer lists, passwords, or other sensitive data. See the{' '}
              <Link to="/privacy" target="_blank" className="font-semibold text-teal underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </form>
      )}

      {error && (
        <div className="mt-6">
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-charcoal disabled:invisible"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back
        </button>

        {!isContactStep ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-white hover:bg-teal-dark"
          >
            {!q?.required && isEmpty ? 'Skip' : 'Next'} <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            form="snapshot-form"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-white hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-charcoal/25"
          >
            {sending && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />}
            {sending ? 'Sending...' : connected ? 'Submit my Snapshot' : 'Submit (not yet connected)'}
          </button>
        )}
      </div>
    </div>
  )
}
