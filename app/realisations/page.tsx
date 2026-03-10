import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Home as HomeIcon, ShieldCheck, Landmark, Sparkles, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Nettoyage et protection de toiture',
    description:
      'Assainissement profond et application d\'un hydrofuge certifié sur tuiles. Une toiture qui retrouve son aspect d\'origine et une étanchéité garantie 15 ans.',
    image: '/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG',
    badge: 'Toiture',
  },
  {
    title: 'Rénovation de façade technique',
    description:
      'Élimination des champignons et traitement des remontées capillaires. Nous stabilisons la structure pour stopper l\'usure prématurée du bâti.',
    image: '/images/IMG_6185.jpeg',
    badge: 'Façade',
  },
  {
    title: 'Restauration de pierre apparente',
    description:
      'Piquetage et rejointoiement artisanal. Valorisation du cachet architectural et renforcement des maçonneries anciennes.',
    image: '/images/IMG_6137.jpeg',
    badge: 'Pierre',
  },
]

const processSteps = [
  {
    number: 1,
    title: 'Diagnostic technique',
    description:
      'Étude sur site pour identifier les pathologies du bâti : porosité des matériaux, présence de micro-organismes ou remontées capillaires. Nous posons les bases d’un traitement technique adapté à la spécificité de votre habitat.',
  },
  {
    number: 2,
    title: 'Engagement chiffré',
    description:
      'Transmission d’un devis transparent et définitif sous 48 heures. Chaque intervention est calibrée au cas par cas pour respecter vos besoins réels sans coûts imprévus.',
  },
  {
    number: 3,
    title: 'Exécution artisanale',
    description:
      'Réalisation du chantier par notre équipe familiale, de père en fils, sans aucune sous-traitance. Nous mobilisons 25 ans de savoir-faire pour garantir un résultat soigné et durable.',
  },
  {
    number: 4,
    title: 'Protection et suivi',
    description:
      'Validation finale des traitements et mise en œuvre d\'une barrière hydrofuge certifiée. Votre maison bénéficie d\'une étanchéité renforcée et d\'une protection garantie pour les 15 prochaines années.',
  },
]

export default function RealisationsPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <Hero
        badge="NOS RÉALISATIONS"
        title="Nos réalisations en toiture, façades et pierre"
        description="L'expertise VR Harmonie s'exprime sur chaque support. Nous intervenons sur des architectures variées en Indre-et-Loire, avec une exigence constante : pérenniser votre patrimoine."
        ctaLink="/contact"
      />

      {/* Bloc introductif premium : chiffres + projet vedette */}
      <section className="w-full border-y border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
        <div className="relative max-w-6xl lg:max-w-7xl mx-auto px-4 lg:px-6 py-12 md:py-16">
          {/* halos de fond */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Texte + chiffres clés */}
            <div className="relative max-w-md space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-700">
                <Sparkles className="h-3 w-3" />
                Nos chantiers en vrai
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950 leading-snug">
                Chaque maison traitée comme un patrimoine, pas comme un simple chantier.
              </h2>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Toitures, façades et murs en pierre : nous combinons diagnostic technique, traitements certifiés et finitions artisanales
                pour livrer des rénovations qui tiennent dans le temps.
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-3 md:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Expérience
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-slate-950">+25 ans</p>
                  <p className="text-[11px] text-slate-500">De père en fils</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Garantie
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-slate-950">Jusqu&apos;à 15 ans</p>
                  <p className="text-[11px] text-slate-500">Hydrofuge certifié</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Domaines
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-slate-950">3 métiers</p>
                  <p className="text-[11px] text-slate-500">Toiture, façade, pierre</p>
                </div>
              </div>

              <div className="pt-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide shadow-sm hover:bg-slate-100 transition-colors">
                  Voir nos chantiers en détail
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Projet vedette avant / après */}
            <div className="relative w-full md:w-[52%] mt-4 md:mt-0">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white shadow-[0_28px_90px_rgba(148,163,184,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(52,211,153,0.22),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.2),transparent_55%)] opacity-70" />

                <div className="relative grid grid-cols-2 gap-px bg-slate-200">
                  {/* Avant */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src="/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG"
                      alt="Toiture avant intervention"
                      fill
                      className="object-cover grayscale contrast-75"
                      sizes="(min-width: 768px) 26vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />
                    <div className="absolute top-3 left-3 rounded-full bg-white/95 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm">
                      Avant
                    </div>
                  </div>

                  {/* Après */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src="/images/IMG_6185.jpeg"
                      alt="Toiture après rénovation"
                      fill
                      className="object-cover saturate-125"
                      sizes="(min-width: 768px) 26vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
                    <div className="absolute top-3 right-3 rounded-full bg-emerald-500/95 px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-emerald-500/70">
                      Après
                    </div>
                  </div>

                  {/* Séparateur */}
                  <div className="pointer-events-none absolute inset-y-6 left-1/2 -translate-x-1/2 w-px bg-slate-300/90" />
                </div>

                <div className="relative px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 border-t border-slate-200 bg-white/80">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-emerald-500">
                      Toiture rénovée
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-700">
                      Démoussage, traitement complet et barrière hydrofuge pour une toiture protégée sur le long terme.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-600">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span>Chantier sans sous-traitance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="w-full py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 px-4 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 border border-emerald-200">
              Galerie de chantiers
            </div>
            <h2 className="section-title mb-3">Nos réalisations en image</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Nettoyage et protection de toiture, rénovation de façades techniques et restauration de pierre apparente : nos chantiers illustrent
              la qualité de nos traitements et la durabilité de nos interventions.
            </p>
          </div>

          {/* Petits filtres visuels par type de chantier (non interactifs pour l'instant) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs md:text-sm">
            <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">
              Toitures
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
              Façades
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
              Pierre apparente
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {projects.map((project, index) => (
              <div key={index} className="relative group h-full">
                <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.16)] hover:shadow-[0_30px_100px_rgba(15,23,42,0.28)] transition-all duration-300 group-hover:-translate-y-3 flex flex-col">

                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    {/* badge de type de réalisation */}
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/95 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm shadow-slate-300/60">
                      {project.badge}
                    </div>
                  </div>

                  <div className="relative p-6 md:p-7 flex flex-col flex-1 gap-3">
                    {/* Bloc texte pour aligner Projet + titre + description */}
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-emerald-600">
                        Projet 0{index + 1}
                      </p>
                      <h3 className="text-base md:text-[20px] lg:text-[22px] font-semibold text-slate-950 tracking-tight min-h-[3.2rem] whitespace-normal md:whitespace-nowrap">
                        {project.title}
                      </h3>
                      <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed min-h-[5.6rem]">
                        {project.description}
                      </p>
                    </div>
                    {/* ligne de “tags” premium */}
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600">
                      <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Finition artisanale
                      </span>
                      <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Diagnostic sur mesure
                      </span>
                      <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 bg-slate-50">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Protection durable
                      </span>
                    </div>
                    {/* fine ligne dégradée sous le contenu */}
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                    {/* motif de points bas droit */}
                    <div className="pointer-events-none absolute right-5 bottom-5 grid grid-cols-3 gap-1.5 opacity-60">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section premium */}
      <section className="w-full py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 px-4 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 border border-emerald-200">
              Méthode VR Harmonie
            </div>
            <h2 className="section-title mb-3">Un processus clair, en 4 étapes</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Une approche structurée pour sécuriser votre projet, du premier diagnostic jusqu&apos;au suivi après chantier.
            </p>
          </div>

          <div className="relative">
            {/* ligne verticale */}
            <div className="pointer-events-none absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/0 via-emerald-400/60 to-emerald-400/0" />

            <div className="space-y-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative pl-16"
                >
                  <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/70 bg-white text-emerald-700 text-xs font-semibold shadow-[0_0_0_1px_rgba(148,163,184,0.6)]">
                    {step.number}
                    <div className="pointer-events-none absolute -inset-1 rounded-full bg-emerald-500/20 blur-md" />
                  </div>

                  <div className="mt-3 rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-[0_18px_60px_rgba(148,163,184,0.45)]">
                    <h3 className="text-sm md:text-[15px] font-semibold text-slate-950 tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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
