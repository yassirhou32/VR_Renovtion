import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ServiceCard } from '@/components/service-card'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { Home, Shield, Hammer } from 'lucide-react'

const detailedServices = [
  {
    title: 'Entretien et protection de toiture',
    description:
      'L’accumulation de mousses et de lichens rend vos matériaux poreux et fragiles. Nous procédons à un assainissement complet suivi de l’application d’un hydrofuge certifié. Ce traitement permet à l\'eau de ruisseler sans s\'imprégner, protégeant vos tuiles ou ardoises contre le gel et l\'érosion. Matériaux : tuiles et ardoises. Engagement : protection active garantie pendant 15 ans minimum.',
    icon: Home,
  },
  {
    title: 'Rénovation de façades',
    description:
      'Les traces rouges, noires ou la présence de champignons signalent une dégradation avancée de vos murs. Nous éliminons ces micro-organismes en profondeur et traitons les supports (crépis, enduits) pour bloquer l\'humidité tout en laissant respirer le bâti. Actions : nettoyage profond, élimination des moisissures et barrière hydrofuge. Nous traitons également les remontées capillaires pour stopper définitivement les traces d\'eau à la base de vos façades.',
    icon: Shield,
  },
  {
    title: 'Restauration de patrimoine',
    description:
      'Le piquetage permet de retirer les anciens joints dégradés pour mettre à nu la pierre d\'origine. Nous réalisons un rejointoiement artisanal qui renforce la solidité de la maçonnerie tout en valorisant le cachet architectural et la valeur de votre demeure. Usage : murs anciens en pierre de taille ou moellons.',
    icon: Hammer,
  },
]

export default function ServicesPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <Hero
        badge="NOS SERVICES"
        title="Protéger durablement l’enveloppe de votre maison"
        description="Depuis 25 ans, nous intervenons sur l’enveloppe extérieure de votre maison pour en assurer la pérennité. Chaque intervention est réalisée sans sous-traitance, avec la rigueur d'un savoir-faire familial transmis de père en fils."
        ctaLink="/contact"
      />

      {/* Services Details Section */}
      <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos services détaillés</h2>
            <p className="section-subtitle">
              Une gamme complète de prestations pour l’entretien, la protection et la restauration de vos toitures, façades et murs en
              pierre, avec des engagements clairs sur la durabilité et la qualité des interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {detailedServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                ctaText="En savoir plus"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">Pourquoi nous choisir ?</h2>
            <p className="section-subtitle">
              Quatre engagements concrets qui font la différence sur chaque chantier, de la première visite à la livraison.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl z-0">
            {/* décor de fond innovant (en arrière-plan et plus transparent) */}
            <div className="pointer-events-none absolute -z-10 -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-200/40 blur-3xl" />
            {/* cercle blanc principal à l'extrémité gauche */}
            <div className="pointer-events-none absolute -z-10 -bottom-16 -left-20 h-32 w-32 rounded-full bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.08)]" />
            {/* autres cercles blancs décoratifs aux extrémités */}
            <div className="pointer-events-none absolute -z-10 -bottom-10 left-0 h-16 w-16 rounded-full bg-white/45 shadow-[0_12px_35px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -bottom-24 -right-20 h-20 w-20 rounded-full bg-white/55 shadow-[0_18px_45px_rgba(15,23,42,0.1)]" />
            <div className="pointer-events-none absolute -z-10 -top-8 -left-20 h-16 w-16 rounded-full bg-white/45 shadow-[0_12px_35px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -top-16 -right-20 h-14 w-14 rounded-full bg-white/40 shadow-[0_10px_28px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 top-1/2 -right-10 h-16 w-16 -translate-y-1/2 rounded-full bg-white/50 shadow-[0_14px_40px_rgba(15,23,42,0.1)]" />
            {/* élément en pointillés */}
            <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-40 rounded-[32px] border border-dashed border-slate-200/80" />

            {/* grille 2x2 très élégante */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {[
                { title: 'Expérience', desc: "25 ans d'expertise reconnus" },
                { title: 'Qualité', desc: 'Matériaux premium et techniques' },
                { title: 'Équipe', desc: 'Artisans qualifiés et certifiés' },
                { title: 'Service', desc: 'Intervention rapide et devis' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-full bg-white/96 border border-slate-200/80 shadow-[0_18px_55px_rgba(15,23,42,0.08)] hover:shadow-[0_26px_85px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/90"
                >
                  {/* halos visibles dans les coins */}
                  <div className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full bg-slate-100/90" />
                  <div className="pointer-events-none absolute -bottom-10 -left-16 h-20 w-28 rounded-full bg-slate-100/75" />

                  <div className="relative px-6 py-4 md:px-7 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* pastille numéro ronde + texte */}
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        <div className="pointer-events-none absolute -inset-1 rounded-full bg-slate-900/6 blur-md" />
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                          {index + 1}
                        </div>
                      </div>

                      <div className="text-left">
                        <h3 className="text-sm md:text-[15px] font-semibold text-slate-900 tracking-tight mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    {/* motif de points à droite pour un côté très design */}
                    <div className="hidden md:block pr-4">
                      <div className="grid grid-cols-3 gap-1.5 opacity-60">
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
              ))}
            </div>

            <p className="mt-8 text-[11px] md:text-xs tracking-[0.18em] uppercase text-slate-500 text-center">
              Engagement qualité • Transparence • Proximité
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
