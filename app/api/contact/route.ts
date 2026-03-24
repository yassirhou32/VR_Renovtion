import { NextResponse } from 'next/server'

type ContactPayload = {
  projectType: string
  propertyType: string
  cityPostalCode: string
  estimatedBudget?: string
  projectDetails: string
  fullName: string
  email: string
  phone: string
}

const requiredFields: Array<keyof ContactPayload> = [
  'projectType',
  'propertyType',
  'cityPostalCode',
  'projectDetails',
  'fullName',
  'email',
  'phone',
]

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@vr-harmonie.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'VR Harmonie <onboarding@resend.dev>'

    if (!apiKey) {
      return NextResponse.json({ error: 'Configuration manquante' }, { status: 500 })
    }

    const payload = (await request.json()) as ContactPayload
    const hasMissingField = requiredFields.some((field) => !payload[field]?.trim())

    if (hasMissingField) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    const budgetLine = payload.estimatedBudget?.trim() ? payload.estimatedBudget : 'Non renseigne'

    const emailHtml = `
      <h2>Nouvelle demande VR Harmonie</h2>
      <p><strong>Type de projet:</strong> ${payload.projectType}</p>
      <p><strong>Type de bien:</strong> ${payload.propertyType}</p>
      <p><strong>Ville / Code postal:</strong> ${payload.cityPostalCode}</p>
      <p><strong>Budget estimatif:</strong> ${budgetLine}</p>
      <p><strong>Details du projet:</strong><br/>${payload.projectDetails.replace(/\n/g, '<br/>')}</p>
      <hr />
      <p><strong>Nom:</strong> ${payload.fullName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Telephone:</strong> ${payload.phone}</p>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Nouvelle demande client - ${payload.projectType}`,
        reply_to: payload.email,
        html: emailHtml,
      }),
    })

    if (!resendResponse.ok) {
      const resendErrorText = await resendResponse.text()
      return NextResponse.json({ error: resendErrorText || 'Erreur Resend' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
