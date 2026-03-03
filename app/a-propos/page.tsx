import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <Hero
        badge="À PROPOS DE NOUS"
        title="VR Harmonie : Passion et Expertise depuis 25 Ans"
        description="Découvrez l'histoire de VR Harmonie et nos valeurs qui font notre force auprès de nos clients."
        ctaLink="/contact"
      />

      {/* Company Story — Bloc 1 premium */}
      <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_26px_80px_rgba(15,23,42,0.1)] px-8 py-10 md:px-12 md:py-12">
            {/* Décorations */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-slate-100/90" />
            <div className="pointer-events-none absolute -bottom-12 -left-16 h-28 w-36 rounded-[32px] bg-slate-100/80" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <p className="relative text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-4">
              Notre histoire
            </p>
            <h2 className="relative text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
              Une entreprise artisanale ancrée dans l&apos;excellence
            </h2>

            <div className="relative space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                VR Harmonie est une entreprise artisanale fondée sur les valeurs de savoir-faire et de qualité. Depuis plus de 25 ans, nous intervenons auprès de particuliers et de professionnels pour tous leurs besoins en toiture, façades et patrimoine.
              </p>
              <p>
                Nos artisans, qualifiés et expérimentés, travaillent avec passion pour garantir la satisfaction de chaque client. Nous privilégions les techniques traditionnelles associées aux innovations modernes pour offrir des solutions durables et esthétiques.
              </p>
              <p>
                En tant qu&apos;artisans de père en fils, nous avons hérité d&apos;une culture d&apos;excellence et d&apos;exigence qui guide chaque intervention. Votre confiance est notre priorité, et nous nous engageons à chaque projet.
              </p>
            </div>

            <p className="relative mt-8 text-[11px] tracking-[0.18em] uppercase text-slate-500">
              25 ans d&apos;expertise • Savoir-faire familial • Engagement qualité
            </p>
          </div>
        </div>
      </section>

      {/* Values Section — Bloc 2 : exigence artisanat (3 parties) */}
      <section className="w-full py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">L&apos;exigence de l&apos;artisanat local</h2>
            <p className="section-subtitle">
              Nos valeurs fondamentales qui guident chaque projet.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl z-0">
            {/* Cercles décoratifs aux extrémités */}
            <div className="pointer-events-none absolute -z-10 -bottom-16 -left-20 h-32 w-32 rounded-full bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -top-16 -right-20 h-24 w-24 rounded-full bg-white/45 shadow-[0_12px_35px_rgba(15,23,42,0.08)]" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Qualité Premium',
                  description: 'Nous utilisons uniquement des matériaux de première qualité et respectons les standards les plus exigeants du secteur.',
                  badge: '01',
                },
                {
                  title: 'Savoir-Faire Traditionnel',
                  description: 'Nos techniques, perfectionnées depuis des générations, associent tradition et modernité pour des résultats exceptionnels.',
                  badge: '02',
                },
                {
                  title: 'Proximité et Écoute',
                  description: 'Basés en Indre-et-Loire et Loir-et-Cher, nous sommes proches et à l\'écoute de vos besoins spécifiques.',
                  badge: '03',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl bg-white/96 border border-slate-200/80 shadow-[0_22px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full bg-slate-100/90" />
                  <div className="relative p-6 md:p-8">
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">
                      Valeur {value.badge}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                      {value.description}
                    </p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area — Bloc 3 : votre artisan régional */}
      <section className="w-full py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_26px_80px_rgba(15,23,42,0.1)] px-8 py-10 md:px-12 md:py-12 text-center">
            {/* Décorations */}
            <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-100/60 blur-2xl" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <p className="relative text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-3">
              Zone d&apos;intervention
            </p>
            <h2 className="relative section-title text-left md:text-center mb-4">
              Votre artisan régional
            </h2>
            <p className="relative section-subtitle text-left md:text-center mb-8 max-w-2xl mx-auto">
              VR Harmonie intervient sur toute la région Indre-et-Loire et Loir-et-Cher pour tous vos projets de toiture, façades et restauration patrimoniale. Notre proximité vous garantit une disponibilité et une réactivité inégalées.
            </p>

            <Button
              asChild
              size="lg"
              className="relative rounded-full bg-slate-900 hover:bg-slate-950 text-white px-8 py-3 font-semibold tracking-wide shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
            >
              <Link href="/contact">Demander votre diagnostic gratuit</Link>
            </Button>

            <p className="relative mt-6 text-[11px] tracking-[0.18em] uppercase text-slate-500">
              Indre-et-Loire • Loir-et-Cher • Réponse rapide
            </p>
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
