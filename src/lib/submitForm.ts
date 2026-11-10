// Sends form data to an external form service (for example Formspree).
// A static GitHub Pages site cannot store submissions or send email itself.
export type SubmitResult = { ok: true } | { ok: false; message: string }

export async function submitForm(endpoint: string, data: Record<string, unknown>): Promise<SubmitResult> {
  if (!endpoint) {
    return { ok: false, message: 'This form is not yet connected, so nothing was sent.' }
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      return { ok: false, message: 'Something went wrong while sending. Please try again in a moment.' }
    }
    return { ok: true }
  } catch {
    return { ok: false, message: 'We could not reach the server. Please check your connection and try again.' }
  }
}
