import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ServiceCard } from '@/components/service-card'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Hammer, Home as HomeIcon, Shield } from 'lucide-react'

const services = [
  {
    title: 'Nettoyage et traitement de toiture',
    description:
      'Élimination des micro-organismes et application d\'un hydrofuge certifié. Vos tuiles ou ardoises retrouvent leur éclat d\'origine et deviennent totalement imperméables. Protection garantie 15 ans.',
    icon: HomeIcon,
  },
  {
    title: 'Rénovation de façades',
    description:
      'Traitement des champignons, des moisissures et des remontées capillaires. Nous assainissons vos murs pour stopper l\'usure prématurée du bâti et redonner une protection saine à votre maison.',
    icon: Shield,
  },
  {
    title: 'Piquetage et pierre apparente',
    description:
      'Spécialistes de la restauration de murs anciens. Nous réalisons le piquetage et le rejointoiement pour préserver le cachet de la pierre tout en renforçant la solidité de la structure.',
    icon: Hammer,
  },
]

export default function HomePage() {
  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="VR Harmonie : Artisans de père en fils depuis 25 ans."
        description="La protection durable de votre habitat en Indre-et-Loire et Loir-et-Cher. Nous appliquons un savoir-faire familial rigoureux pour assainir et pérenniser vos toitures et façades."
        ctaText="Demandez un devis"
      />

      {/* Services Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos services</h2>
            <p className="section-subtitle">
              Des interventions spécialisées pour protéger durablement vos toitures, façades et murs en pierre, avec un savoir-faire
              d&apos;artisan transmis de père en fils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href="/services"
                ctaText="En savoir plus"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Réalisations Preview Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos réalisations</h2>
            <p className="section-subtitle">
              Nos interventions attestent de la rigueur de notre savoir-faire. De la demeure de caractère au pavillon récent, nous adaptons
              nos traitements à chaque matériau : tuile, ardoise, pierre de taille ou crépis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Carte Toiture */}
            <div className="relative group h-full">
              {/* contour dégradé autour de la carte (comme page réalisations) */}
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              {/* lueur sous la carte */}
              <div className="pointer-events-none absolute -bottom-6 inset-x-6 h-8 rounded-full bg-slate-300/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="relative h-full min-h-[420px] rounded-[28px] overflow-hidden bg-white border border-slate-200 shadow-[0_26px_80px_rgba(15,23,42,0.12)] hover:shadow-[0_36px_120px_rgba(15,23,42,0.22)] transition-all duration-300 group-hover:-translate-y-3 group-hover:-rotate-[0.25deg] flex flex-col">
                {/* halo doux en haut de la carte */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                {/* cadre interne très léger */}
                <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-slate-100/90" />
                {/* motif diagonales */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.22)_0,transparent_38%,transparent_62%,rgba(148,163,184,0.18)_100%)] mix-blend-soft-light opacity-80" />

                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG"
                    alt="Réalisation de toiture VR Harmonie"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority
                  />
                  {/* halo circulaire en coin */}
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/40 mix-blend-soft-light" />
                  {/* badge */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm shadow-slate-900/25">
                    Toiture
                  </div>
                </div>

                <div className="relative p-6 md:p-7 flex flex-col flex-1 gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                    Projet 01
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight">
                    Toiture : assainissement complet et barrière protectrice
                  </h3>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed flex-1">
                    Nettoyage en profondeur, traitement des micro-organismes et application d&apos;un hydrofuge durable pour une toiture saine
                    et protégée sur le long terme.
                  </p>
                  {/* tags */}
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Finition artisanale
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Diagnostic sur mesure
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Protection durable
                    </span>
                  </div>
                  {/* ligne + bouton */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full px-4 text-xs md:text-sm font-semibold tracking-wide border-slate-700 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      <a href="/realisations">Voir les réalisations</a>
                    </Button>
                  </div>
                  {/* motif de points bas droit */}
                  <div className="pointer-events-none absolute right-5 bottom-5 grid grid-cols-3 gap-1.5 opacity-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Façade */}
            <div className="relative group h-full">
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="pointer-events-none absolute -bottom-6 inset-x-6 h-8 rounded-full bg-slate-300/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="relative h-full min-h-[420px] rounded-[28px] overflow-hidden bg-white border border-slate-200 shadow-[0_26px_80px_rgba(15,23,42,0.12)] hover:shadow-[0_36px_120px_rgba(15,23,42,0.22)] transition-all duration-300 group-hover:-translate-y-3 group-hover:-rotate-[0.25deg] flex flex-col">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-slate-100/90" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.22)_0,transparent_38%,transparent_62%,rgba(148,163,184,0.18)_100%)] mix-blend-soft-light opacity-80" />

                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="/images/IMG_6185.jpeg"
                    alt="Rénovation de façade VR Harmonie"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/40 mix-blend-soft-light" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm shadow-slate-900/25">
                    Façade
                  </div>
                </div>

                <div className="relative p-6 md:p-7 flex flex-col flex-1 gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                    Projet 02
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight">
                    Façade : nettoyage profond et traitement des traces d&apos;humidité
                  </h3>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed flex-1">
                    Suppression des traces d&apos;humidité, des salissures et des micro-organismes pour redonner à vos murs une protection saine
                    et esthétique.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Traitement anti-humidité
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Nettoyage en profondeur
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Fini durable
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full px-4 text-xs md:text-sm font-semibold tracking-wide border-slate-700 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      <a href="/realisations">Voir les réalisations</a>
                    </Button>
                  </div>
                  <div className="pointer-events-none absolute right-5 bottom-5 grid grid-cols-3 gap-1.5 opacity-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Pierre */}
            <div className="relative group h-full">
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="pointer-events-none absolute -bottom-6 inset-x-6 h-8 rounded-full bg-slate-300/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="relative h-full min-h-[420px] rounded-[28px] overflow-hidden bg-white border border-slate-200 shadow-[0_26px_80px_rgba(15,23,42,0.12)] hover:shadow-[0_36px_120px_rgba(15,23,42,0.22)] transition-all duration-300 group-hover:-translate-y-3 group-hover:-rotate-[0.25deg] flex flex-col">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-slate-100/90" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.22)_0,transparent_38%,transparent_62%,rgba(148,163,184,0.18)_100%)] mix-blend-soft-light opacity-80" />

                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src="/images/IMG_6137.jpeg"
                    alt="Restauration de pierre apparente VR Harmonie"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/40 mix-blend-soft-light" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm shadow-slate-900/25">
                    Pierre
                  </div>
                </div>

                <div className="relative p-6 md:p-7 flex flex-col flex-1 gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                    Projet 03
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight">
                    Pierre : restauration des joints et mise en valeur architecturale
                  </h3>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed flex-1">
                    Reprise des joints, piquetage et finitions soignées pour préserver le cachet de la pierre apparente et mettre en valeur
                    l&apos;architecture d&apos;origine.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Respect du patrimoine
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Rejointoiement précis
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50/70">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      Mise en valeur architecturale
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full px-4 text-xs md:text-sm font-semibold tracking-wide border-slate-700 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      <a href="/realisations">Voir les réalisations</a>
                    </Button>
                  </div>
                  <div className="pointer-events-none absolute right-5 bottom-5 grid grid-cols-3 gap-1.5 opacity-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Témoignages */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-600 mb-4">
                Témoignages
              </div>
              <h2 className="section-title mb-3">Ils nous font confiance</h2>
              <p className="section-subtitle">
                La satisfaction de nos clients est notre priorité. Découvrez quelques retours d&apos;expérience après nos interventions
                sur des toitures, façades et maisons en pierre en Indre-et-Loire et Loir-et-Cher.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <article className="relative overflow-hidden rounded-3xl bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.16)] border border-slate-100 transition-shadow px-7 py-8 md:px-8 md:py-9 flex flex-col">
                {/* Coins décoratifs */}
                <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-slate-200" />
                <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-slate-200" />

                <div className="relative flex flex-col gap-3">
                  <header>
                    <p className="text-sm font-semibold text-slate-900">Marie D.</p>
                    <p className="text-xs text-slate-500">Tours</p>
                  </header>
                  <div className="mb-2 text-slate-300 text-3xl md:text-4xl leading-none">“</div>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed italic">
                    Intervention rapide et très soignée sur notre toiture en ardoise. Les mousses ont disparu et le rendu est comme neuf.
                    Nous nous sentons beaucoup plus sereins pour les prochaines années.
                  </p>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.16)] border border-slate-100 transition-shadow px-7 py-8 md:px-8 md:py-9 flex flex-col">
                <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-slate-200" />
                <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-slate-200" />

                <div className="relative flex flex-col gap-3">
                  <header>
                    <p className="text-sm font-semibold text-slate-900">Thomas L.</p>
                    <p className="text-xs text-slate-500">Amboise</p>
                  </header>
                  <div className="mb-2 text-slate-300 text-3xl md:text-4xl leading-none">“</div>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed italic">
                    Façade entièrement traitée et assainie. Les traces d&apos;humidité ont disparu et la maison a retrouvé une
                    vraie luminosité. Explications claires, délais respectés et chantier parfaitement nettoyé.
                  </p>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.16)] border border-slate-100 transition-shadow px-7 py-8 md:px-8 md:py-9 flex flex-col">
                <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-slate-200" />
                <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-slate-200" />

                <div className="relative flex flex-col gap-3">
                  <header>
                    <p className="text-sm font-semibold text-slate-900">Sophie M.</p>
                    <p className="text-xs text-slate-500">Loir-et-Cher</p>
                  </header>
                  <div className="mb-2 text-slate-300 text-3xl md:text-4xl leading-none">“</div>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed italic">
                    Reprise des joints de pierre sur une longère familiale. Le cachet d&apos;origine est préservé et la maçonnerie est
                    bien renforcée. Équipe professionnelle, disponible et à l&apos;écoute.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <div className="text-center mt-12">
            <a
              href="/realisations"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
            >
              Voir toutes nos réalisations
            </a>
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
