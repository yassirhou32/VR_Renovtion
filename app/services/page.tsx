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
      "Au fil des années, les mousses, lichens et dépôts polluants rendent vos tuiles ou ardoises poreuses. L'eau ne ruisselle plus correctement, s'infiltre dans les matériaux et fragilise toute la couverture. Nous commençons par un nettoyage minutieux (basse ou haute pression maîtrisée selon le support), puis par un démoussage en profondeur pour éliminer les micro-organismes. Ensuite, nous appliquons un hydrofuge certifié qui laisse respirer la toiture tout en bloquant l'eau en surface. Résultat : une couverture assainie, plus esthétique, et surtout protégée durablement contre le gel, l'humidité et l'usure.",
    icon: Home,
    href: '/services/entretien-protection-toiture',
  },
  {
    title: 'Rénovation de façades',
    description:
      'Les traces rouges, noires ou la présence de champignons signalent une dégradation avancée de vos murs. Nous éliminons ces micro-organismes en profondeur et traitons les supports (crépis, enduits) pour bloquer l\'humidité tout en laissant respirer le bâti. Actions : nettoyage profond, élimination des moisissures et barrière hydrofuge. Nous traitons également les remontées capillaires pour stopper définitivement les traces d\'eau à la base de vos façades.',
    icon: Shield,
    href: '/services/renovation-facades',
  },
  {
    title: 'Restauration de patrimoine',
    description:
      'Le piquetage permet de retirer les anciens joints dégradés pour mettre à nu la pierre d\'origine. Nous réalisons un rejointoiement artisanal qui renforce la solidité de la maçonnerie tout en valorisant le cachet architectural et la valeur de votre demeure. Usage : murs anciens en pierre de taille ou moellons.',
    icon: Hammer,
    href: '/services/restauration-patrimoine',
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
                href={service.href}
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

      {/* Parcours de service très lisible (étapes) */}
      <section className="w-full py-20 bg-white text-slate-900 relative overflow-hidden">
        {/* léger décor de la section, en nuances de bleu très doux */}
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-60 bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.8),transparent_65%)]" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-64 w-64 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(59,130,246,0.35)]" />
              Parcours client VR Harmonie
            </div>
            <h2 className="section-title">Comment se déroule votre projet ?</h2>
            <p className="section-subtitle">
              Un parcours simple, transparent et accompagné du premier appel jusqu&apos;au suivi après travaux.
            </p>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.6fr_minmax(0,1fr)] items-start">
            {/* Trait lumineux vertical à gauche */}
            <div className="pointer-events-none absolute -left-6 top-12 bottom-8 hidden lg:block">
              <div className="h-full w-px bg-gradient-to-b from-sky-400/50 via-slate-700/50 to-cyan-400/40" />
            </div>

            {/* Timeline principale */}
            <div className="relative px-6 py-7 md:px-8 md:py-9">
              {/* halo discret */}
              <div className="pointer-events-none absolute -top-16 -left-4 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-44 w-44 rounded-full bg-cyan-100/70 blur-3xl" />

              <p className="relative text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-600 mb-5 flex items-center gap-2">
                <span className="inline-flex h-1 w-6 rounded-full bg-gradient-to-r from-sky-500 via-sky-300 to-cyan-400" />
                Parcours d&apos;accompagnement
              </p>

              <ol className="relative space-y-6 md:space-y-7">
                {[
                  {
                    step: '01',
                    label: 'Découverte',
                    title: 'Prise de contact & échange téléphonique',
                    desc: "Vous nous expliquez la situation de votre toiture, façade ou murs en pierre. Nous posons les bonnes questions pour préparer la visite sur place.",
                  },
                  {
                    step: '02',
                    label: 'Analyse',
                    title: 'Diagnostic technique sur place',
                    desc: "Inspection détaillée des supports, photos, contrôle de la porosité et de l&apos;état des matériaux. Nous identifions les causes réelles des désordres (mousses, humidité, champignons…).",
                  },
                  {
                    step: '03',
                    label: 'Clarté',
                    title: 'Proposition claire et devis détaillé',
                    desc: "Vous recevez un devis précis, avec la description pas à pas des interventions, les produits utilisés et la durée de protection estimée.",
                  },
                  {
                    step: '04',
                    label: 'Réalisation',
                    title: 'Réalisation des travaux par l’artisan',
                    desc: "Les chantiers sont réalisés par notre équipe, sans sous-traitance. Nous protégeons les abords, respectons vos extérieurs et tenons les délais annoncés.",
                  },
                  {
                    step: '05',
                    label: 'Suivi',
                    title: 'Contrôle final, photos & garantie',
                    desc: "Nous effectuons une visite de contrôle avec vous, livrons les photos avant / après ainsi que la garantie écrite pouvant aller jusqu&apos;à 15 ans.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="relative pl-14 pr-3 py-3 rounded-2xl border border-transparent hover:border-sky-200/80 hover:bg-sky-50/70 transition-colors duration-300"
                  >
                    {/* ligne verticale animée */}
                    <div className="pointer-events-none absolute left-6 top-3 bottom-3 w-px">
                      <div className="h-full w-px bg-gradient-to-b from-sky-400/80 via-slate-700/80 to-cyan-400/80" />
                    </div>

                    {/* pastille double cercle seule (numéro) */}
                    <div className="absolute left-0 top-2 flex items-center justify-center">
                      <div className="relative flex h-9 w-9 items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-sky-400/15 blur-[6px]" />
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border border-sky-400 shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_10px_30px_rgba(15,23,42,0.18)]">
                          <span className="text-[11px] font-semibold text-sky-600">{item.step}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm md:text-[15px] font-semibold text-slate-900 tracking-tight">{item.title}</h3>
                        <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-700">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Bloc récapitulatif / garanties */}
            <div className="space-y-5">
              <div className="relative rounded-[28px] bg-white/85 backdrop-blur-md border border-sky-200/80 px-6 py-6 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(15,23,42,0.18)] overflow-hidden">
                {/* halo et motif de points */}
                <div className="pointer-events-none absolute -top-16 right-[-20px] h-40 w-40 rounded-full bg-sky-500/22 blur-3xl" />
                <div className="pointer-events-none absolute right-4 bottom-5 grid grid-cols-3 gap-1.5 opacity-70">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300/90" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300/90" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  Vos garanties avec VR Harmonie
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-400/15 text-[12px] text-sky-300 border border-sky-300/70">
                      ✓
                    </span>
                    <p>
                      Travaux réalisés par l&apos;artisan lui-même, <span className="font-semibold">sans sous-traitance</span>, pour garder la
                      maîtrise complète de la qualité.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-400/15 text-[12px] text-sky-300 border border-sky-300/70">
                      ✓
                    </span>
                    <p>
                      <span className="font-semibold">Produits hydrofuges certifiés</span> adaptés aux matériaux de votre maison, testés et
                      éprouvés dans la durée.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-400/15 text-[12px] text-sky-300 border border-sky-300/70">
                      ✓
                    </span>
                    <p>
                      <span className="font-semibold">Garantie écrite jusqu&apos;à 15 ans</span> sur la protection de vos supports, accompagnée d&apos;un
                      compte-rendu complet.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-[26px] bg-white/85 backdrop-blur-md border border-sky-200/80 px-6 py-5 md:px-7 md:py-6 flex flex-col gap-3 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-700">
                  Prêt à sécuriser votre maison ?
                </p>
                <p className="text-sm md:text-[15px] text-slate-700">
                  Expliquez-nous votre projet en quelques phrases : nous vous rappelons rapidement pour planifier un diagnostic sur place et
                  vous proposer la meilleure solution.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-sky-400/60 text-white px-6 py-2.5 text-sm font-semibold hover:bg-sky-400/80 transition-colors shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
                  >
                    Demander un rappel
                  </a>
                  <span className="text-[11px] text-slate-400">
                    Réponse rapide • Diagnostic sur place • Devis détaillé
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ simple pour lever les freins */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">
              Quelques réponses claires pour vous aider à avancer sereinement dans votre projet de rénovation extérieure.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  Combien de temps sont protégées mes toitures ou façades après intervention ?
                </h3>
                <span className="text-slate-400 text-xl group-open:rotate-45 transition-transform select-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Selon la nature du support et le traitement réalisé, la protection peut aller jusqu&apos;à 15 ans. Cette durée est précisée
                sur votre devis puis sur votre garantie écrite, remise en fin de chantier.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  Vos produits sont-ils compatibles avec les anciennes maisons en pierre ?
                </h3>
                <span className="text-slate-400 text-xl group-open:rotate-45 transition-transform select-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Oui, nous sélectionnons des produits adaptés aux bâtis anciens, permettant à la pierre de continuer à respirer tout en la
                protégeant durablement de l&apos;humidité et des micro-organismes.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <h3 className="text-sm md:text-[15px] font-semibold text-slate-900">
                  Puis-je voir des exemples de chantiers avant de me décider ?
                </h3>
                <span className="text-slate-400 text-xl group-open:rotate-45 transition-transform select-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Bien sûr. Nous vous présentons des chantiers similaires au vôtre, avec photos avant / après et explication des traitements
                réalisés. Vous pouvez également consulter nos réalisations directement sur le site.
              </p>
            </details>
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
