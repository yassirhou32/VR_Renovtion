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
              Nos valeurs fondamentales qui guident chaque projet, du premier diagnostic jusqu&apos;à la dernière finition.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl z-0">
            {/* Cercles décoratifs aux extrémités */}
            <div className="pointer-events-none absolute -z-10 -bottom-16 -left-20 h-32 w-32 rounded-full bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -top-16 -right-20 h-24 w-24 rounded-full bg-white/45 shadow-[0_12px_35px_rgba(15,23,42,0.08)]" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Qualité premium et finitions soignées',
                  description:
                    'Nous utilisons uniquement des matériaux de première qualité, certifiés et adaptés à votre bâti, pour garantir une tenue irréprochable dans le temps.',
                  badge: '01',
                },
                {
                  title: 'Savoir-faire traditionnel, solutions modernes',
                  description:
                    'Nos techniques, perfectionnées depuis des générations, associent gestes d’artisan et innovations pour des résultats durables et esthétiques.',
                  badge: '02',
                },
                {
                  title: 'Proximité, écoute et suivi',
                  description:
                    "Basés en Indre-et-Loire et Loir-et-Cher, nous restons votre interlocuteur unique avant, pendant et après le chantier, avec un suivi personnalisé.",
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

      {/* Key Figures & Engagements — Bloc 3 bis : version claire & ouverte */}
      <section className="w-full py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Bandeau intro clair */}
          <div className="relative mb-14 text-center">
            <div className="pointer-events-none absolute -top-20 right-1/4 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl" />
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-emerald-700 mb-3">
              VOTRE EXPÉRIENCE AVEC VR HARMONIE
            </p>
            <h2 className="section-title">
              Un accompagnement pensé comme un parcours, pas comme un simple chantier
            </h2>
            <p className="section-subtitle mt-3 max-w-2xl mx-auto">
              Nous avons conçu notre façon de travailler pour que chaque étape soit claire, rassurante et fluide, de votre premier
              appel jusqu&apos;au dernier conseil d&apos;entretien.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] gap-10 lg:gap-14 items-stretch">
            {/* Colonne gauche : parcours client en 4 étapes */}
            <div className="relative overflow-hidden rounded-3xl bg-white/90 border border-slate-200/80 shadow-[0_20px_70px_rgba(15,23,42,0.14)] px-8 py-10 md:px-10 md:py-12">
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-100/80 blur-2xl" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <p className="relative text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-2">
                Comment se déroule votre projet ?
              </p>
              <h3 className="relative text-[1.4rem] md:text-[1.6rem] font-semibold tracking-tight text-slate-900 mb-6">
                Un parcours clair en 4 temps, avec le même interlocuteur
              </h3>

              <div className="relative mt-2">
                <div className="pointer-events-none absolute left-[13px] top-0 bottom-0 hidden md:block border-l border-dashed border-emerald-200" />

                <div className="space-y-6">
                  {[
                    {
                      step: '01',
                      title: 'Diagnostic sur place & écoute',
                      text: 'Nous venons chez vous, prenons le temps de comprendre votre maison, vos contraintes et vos priorités avant de parler solutions.',
                    },
                    {
                      step: '02',
                      title: 'Proposition claire & choix des matériaux',
                      text: 'Vous recevez un devis détaillé, expliqué simplement, avec des matériaux sélectionnés pour la longévité et l’esthétique de votre bâti.',
                    },
                    {
                      step: '03',
                      title: 'Chantier maîtrisé & suivi quotidien',
                      text: 'Nous organisons le chantier pour limiter l’impact sur votre quotidien, en vous tenant informé des étapes clés et des avancées.',
                    },
                    {
                      step: '04',
                      title: 'Contrôle final & conseils d’entretien',
                      text: 'Une fois les travaux terminés, nous vérifions chaque détail avec vous et vous donnons des conseils concrets pour faire durer votre toiture et vos façades.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="relative flex gap-4 md:gap-5">
                      <div className="relative shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-semibold tracking-[0.16em] text-white">
                          {item.step}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                          {item.title}
                        </p>
                        <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite : chiffres + promesse claire (version claire, très aérée) */}
            <div className="relative overflow-hidden rounded-3xl bg-white/95 text-slate-900 px-9 py-11 md:px-10 md:py-12 border border-slate-200/80 shadow-[0_26px_80px_rgba(15,23,42,0.12)]">
              <div className="pointer-events-none absolute -top-16 right-0 h-44 w-44 rounded-full bg-emerald-100/80 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <p className="relative text-[11px] font-semibold tracking-[0.24em] uppercase text-emerald-700 mb-2">
                Chiffres & engagement
              </p>
              <h3 className="relative text-[1.4rem] md:text-[1.6rem] font-semibold tracking-tight mb-5">
                Ce que nos clients retiennent de VR Harmonie
              </h3>
              <p className="relative text-sm md:text-[15px] text-slate-600 mb-8 max-w-md">
                Au-delà du résultat visible, c&apos;est surtout la façon dont le projet est géré, expliqué et suivi qui fait la
                différence.
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10">
                {[
                  {
                    label: '+25',
                    unit: 'ans',
                    text: 'd’expérience artisanale transmise de père en fils.',
                  },
                  {
                    label: '100%',
                    unit: 'local',
                    text: 'interventions en Indre-et-Loire et Loir-et-Cher.',
                  },
                  {
                    label: '4,8/5',
                    unit: 'note',
                    text: 'de satisfaction moyenne sur les retours de nos clients.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/80 px-5 py-6 md:px-6 md:py-7 flex flex-col gap-2 min-w-[190px]"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl md:text-[1.7rem] font-semibold tracking-tight text-slate-900">
                        {item.label}
                      </span>
                      {item.unit && (
                        <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                          {item.unit}
                        </span>
                      )}
                    </div>
                    <span className="text-xs md:text-sm leading-relaxed text-slate-600">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl border border-emerald-400/70 bg-gradient-to-br from-emerald-50 via-emerald-100/60 to-transparent px-5 py-5 md:px-6 md:py-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-700 font-semibold mb-1.5">
                  Notre promesse
                </p>
                <p className="text-sm md:text-[15px] font-medium text-emerald-900 leading-relaxed">
                  Un seul interlocuteur engagé du premier diagnostic au contrôle final, et un chantier conduit avec la même exigence
                  que si nous travaillions sur notre propre maison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area — Bloc 4 : votre artisan régional */}
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
