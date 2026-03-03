import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import Image from 'next/image'

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

      {/* Projects Gallery */}
      <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title mb-3">Nos réalisations</h2>
          <p className="section-subtitle mb-16">
            Nettoyage et protection de toiture, rénovation de façades techniques et restauration de pierre apparente : nos chantiers illustrent
            la qualité de nos traitements et la durabilité de nos interventions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* contour dégradé autour de la carte (plus visible) */}
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                {/* lueur sous la carte */}
                <div className="pointer-events-none absolute -bottom-6 inset-x-6 h-8 rounded-full bg-slate-300/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="relative h-full min-h-[420px] rounded-[28px] overflow-hidden bg-white border border-slate-200 shadow-[0_26px_80px_rgba(15,23,42,0.12)] hover:shadow-[0_36px_120px_rgba(15,23,42,0.22)] transition-all duration-300 group-hover:-translate-y-3 group-hover:-rotate-[0.25deg] flex flex-col">
                  {/* halo doux en haut de la carte */}
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  {/* cadre interne très léger */}
                  <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-slate-100/90" />
                  {/* léger motif diagonales renforcé */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.22)_0,transparent_38%,transparent_62%,rgba(148,163,184,0.18)_100%)] mix-blend-soft-light opacity-80" />

                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    {/* halo circulaire en coin pour un effet très premium */}
                    <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/40 mix-blend-soft-light" />
                    {/* badge de type de réalisation */}
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm shadow-slate-900/25">
                      {project.badge}
                    </div>
                  </div>

                  <div className="relative p-6 md:p-7 flex flex-col flex-1 gap-3">
                    {/* petite étiquette projet */}
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                      Projet 0{index + 1}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed flex-1">
                      {project.description}
                    </p>
                    {/* ligne de “tags” premium */}
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
                    {/* fine ligne dégradée sous le contenu */}
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title">Notre processus de travail</h2>
            <p className="section-subtitle">
              Une approche structurée en 4 étapes pour garantir votre satisfaction.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl z-0">
            {/* décor de fond inspiré de la page services */}
            <div className="pointer-events-none absolute -z-10 -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-200/40 blur-3xl" />
            {/* cercles blancs aux extrémités */}
            <div className="pointer-events-none absolute -z-10 -bottom-16 -left-20 h-32 w-32 rounded-full bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -bottom-10 left-0 h-16 w-16 rounded-full bg-white/45 shadow-[0_12px_35px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -bottom-24 -right-20 h-20 w-20 rounded-full bg-white/55 shadow-[0_18px_45px_rgba(15,23,42,0.1)]" />
            <div className="pointer-events-none absolute -z-10 -top-8 -left-20 h-16 w-16 rounded-full bg-white/45 shadow-[0_12px_35px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 -top-16 -right-20 h-14 w-14 rounded-full bg-white/40 shadow-[0_10px_28px_rgba(15,23,42,0.08)]" />
            <div className="pointer-events-none absolute -z-10 top-1/2 -right-10 h-16 w-16 -translate-y-1/2 rounded-full bg-white/50 shadow-[0_14px_40px_rgba(15,23,42,0.1)]" />

            {/* 4 étapes sous forme de capsules */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
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
                          {step.number}
                        </div>
                      </div>

                      <div className="text-left">
                        <h3 className="text-sm md:text-[15px] font-semibold text-slate-900 tracking-tight mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          {step.description}
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
