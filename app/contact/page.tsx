'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    projectType: '',
    propertyType: '',
    cityPostalCode: '',
    estimatedBudget: '',
    projectDetails: '',
    fullName: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erreur pendant l envoi')
      }

      setFormData({
        projectType: '',
        propertyType: '',
        cityPostalCode: '',
        estimatedBudget: '',
        projectDetails: '',
        fullName: '',
        email: '',
        phone: '',
      })
      setSubmitMessage({
        type: 'success',
        text: 'Votre demande a bien ete envoyee. Nous vous recontactons rapidement.',
      })
    } catch {
      setSubmitMessage({
        type: 'error',
        text: "L envoi a echoue. Merci de reessayer dans un instant.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <Hero
        badge="CONTACT"
        title="Contactez VR Harmonie"
        description="Nous sommes à votre écoute pour tous vos projets. Remplissez le formulaire ci-dessous ou appelez-nous directement."
      />

      {/* Contact Section */}
      <section className="w-full py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.45fr)] gap-10 md:gap-16 items-start">
            {/* Infos contact à gauche */}
            <div className="relative space-y-8 rounded-3xl bg-white/98 border border-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.16)] px-6 py-7 md:px-8 md:py-8 overflow-hidden">
              {/* Décorations très avancées de la carte coordonnées */}
              {/* halo doux derrière le titre */}
              <div className="pointer-events-none absolute -top-8 left-4 h-20 w-20 rounded-full bg-slate-100/80 blur-xl" />
              {/* anneaux orbitaux à droite */}
              <div className="pointer-events-none absolute -top-28 -right-40 h-80 w-80 rounded-full border border-slate-200/70" />
              <div className="pointer-events-none absolute -top-8 -right-16 h-44 w-44 rounded-full bg-gradient-to-br from-slate-100 via-white to-slate-50 shadow-[0_18px_45px_rgba(148,163,184,0.55)]" />
              <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-[40px] border border-dashed border-slate-200/70 rotate-3" />
              {/* lueur de base */}
              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-28 bg-gradient-to-t from-slate-50/95 via-transparent to-transparent" />
              {/* motif diagonal high-tech */}
              <div className="pointer-events-none absolute inset-[-1px] bg-[linear-gradient(120deg,rgba(148,163,184,0.2)_0,transparent_40%,transparent_60%,rgba(148,163,184,0.2)_100%)] mix-blend-soft-light opacity-60" />

              <div className="relative space-y-3">
                <h2 className="text-xs md:text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-500">
                  Coordonnées
                </h2>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Parlons de votre projet.
                </p>
                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  Un artisan VR Harmonie vous rappelle rapidement pour comprendre votre besoin, vous conseiller
                  et planifier un diagnostic sur place.
                </p>
              </div>

              <div className="mt-4 space-y-4">
                <div className="relative">
                  <div className="space-y-3 pl-3 md:pl-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm shadow-slate-900/40">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Téléphone</p>
                        <a
                          href="tel:+33788557295"
                          className="text-sm text-slate-800 hover:text-slate-900 hover:underline underline-offset-2 font-medium transition-colors"
                        >
                          07&nbsp;88&nbsp;55&nbsp;72&nbsp;95
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm shadow-slate-900/40">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Email</p>
                        <a
                          href="mailto:contact@vr-harmonie.fr"
                          className="text-sm text-slate-800 hover:text-slate-900 hover:underline underline-offset-2 font-medium transition-colors"
                        >
                          contact@vr-harmonie.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm shadow-slate-900/40">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Zone d&apos;intervention</p>
                        <p className="text-sm text-slate-600">Indre-et-Loire et Loir-et-Cher</p>
                        <p className="text-xs text-slate-500 mt-1">
                          Interventions rapides et diagnostics sur rendez-vous.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm shadow-slate-900/40">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Horaires</p>
                        <p className="text-sm text-slate-600">Lundi – Vendredi : 8h – 18h</p>
                      </div>
                    </div>
                  </div>
                </div>

              
              </div>
            </div>

            {/* Formulaire à droite */}
            <div className="relative rounded-3xl bg-white shadow-[0_28px_80px_rgba(15,23,42,0.16)] border border-slate-100 px-6 py-8 md:px-9 md:py-10 overflow-hidden">
              {/* halo décoratif */}
              <div className="pointer-events-none absolute -top-28 right-[-5%] h-44 w-44 rounded-full bg-slate-100" />
              <div className="pointer-events-none absolute -bottom-32 left-[-20%] h-56 w-56 rounded-full bg-slate-100/80" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-2 text-center">
                  Formulaire de contact
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 text-center">
                  Contactez-nous
                </h2>
                <p className="text-xs md:text-[13px] text-slate-500 mb-6 text-center">
                  Indiquez votre besoin et vos coordonnees, nous vous rappelons rapidement.
                </p>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    >
                      <option value="">Selectionnez un type</option>
                      <option value="renovation">Renovation</option>
                      <option value="extension">Extension</option>
                      <option value="architecture-conception">Architecture & Conception</option>
                      <option value="locaux-professionnels">Locaux Professionnels</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Type de bien *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    >
                      <option value="">Selectionnez un type</option>
                      <option value="maison">Maison</option>
                      <option value="appartement">Appartement</option>
                      <option value="commerce">Commerce</option>
                      <option value="bureaux">Bureaux</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cityPostalCode"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Ville / Code postal *
                    </label>
                    <Input
                      type="text"
                      id="cityPostalCode"
                      name="cityPostalCode"
                      value={formData.cityPostalCode}
                      onChange={handleChange}
                      required
                      placeholder="Ex. Tours 37000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="estimatedBudget"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Budget estimatif
                    </label>
                    <Input
                      type="text"
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      placeholder="Optionnel"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                  >
                    Details du projet *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="Decrivez votre projet, vos contraintes, vos attentes..."
                  ></textarea>
                </div>

                <div className="pt-1">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3">Vos coordonnees</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                      >
                        Nom *
                      </label>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                      >
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                      >
                        Telephone *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {submitMessage && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      submitMessage.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50/80 text-emerald-800'
                        : 'border-red-200 bg-red-50/80 text-red-800'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {submitMessage.type === 'success' ? (
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                      )}
                      <p className="leading-relaxed font-medium">{submitMessage.text}</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full rounded-full bg-slate-900 hover:bg-slate-950 text-white py-3 text-sm font-semibold tracking-wide"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
