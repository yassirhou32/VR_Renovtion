'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    })
    alert('Merci de votre message! Nous vous répondrons bientôt.')
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
                  Quelques champs suffisent pour que nous puissions vous rappeler avec une première estimation.
                </p>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Prénom
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Nom
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                    >
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                  >
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="toiture">Nettoyage et traitement de toiture</option>
                    <option value="facade">Rénovation de façades</option>
                    <option value="pierre">Piquetage et pierre apparente</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.16em]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="Décrivez votre projet (type de support, surface, ville...)"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-slate-900 hover:bg-slate-950 text-white py-3 text-sm font-semibold tracking-wide"
                >
                  Envoyer la demande
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
