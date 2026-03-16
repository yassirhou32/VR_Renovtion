import { Navbar } from '@/components/navbar'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import GalleryMosaic from '@/components/gallery-mosaic'

export default function RenovationFacadesPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* En-tête spécifique façades */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-100 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Rénovation de façades
            </div>
            <h1 className="section-title">Redonner de l&apos;éclat à vos façades</h1>
            <p className="section-subtitle">
              Un traitement complet pour nettoyer, assainir et protéger vos murs des traces d&apos;humidité, des champignons et des remontées
              capillaires, tout en respectant l&apos;aspect d&apos;origine de votre maison.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie animée avec vos photos de façades */}
      <section className="w-full bg-white">
        <GalleryMosaic
          images={[
            '/images/DJI_0080.jpg',
            '/images/DSC08764.jpg',
            '/images/DSC08775.jpg',
            '/images/M7_03497.jpg',
            '/images/M7_03498.jpg',
            '/images/M7_03501.jpg',
            '/images/M7_03504.jpg',
            '/images/M7_03544.jpg',
            '/images/M7_03550.jpg',
          ]}
          backgroundColor="#FDFBF7"
          viewText="Voir"
        />
      </section>

      {/* Texte détaillé spécifique façades */}
      <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-10 md:space-y-12">
          {/* En-tête du bloc texte */}
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50/80 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-700 shadow-sm shadow-sky-100/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(59,130,246,0.35)]" />
              Traitement technique des façades
            </p>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto">
              Une façade saine, c&apos;est une maison protégée de l&apos;humidité, des champignons et des traces qui ternissent son aspect au fil des
              années.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            {/* Colonne récit */}
            <div className="relative">
              <div className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-sky-100/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-12 h-32 w-32 rounded-full bg-cyan-100/80 blur-3xl" />

              <div className="relative rounded-[28px] border border-slate-200 bg-white/95 px-6 py-6 md:px-8 md:py-8 shadow-[0_26px_90px_rgba(15,23,42,0.12)]">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-4">
                  Assainir vos façades, protéger le bâti
                </h2>
                <div className="space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  <p>
                    Les traces rouges, noires ou verdâtres et la présence de champignons sont les premiers signes d&apos;un mur qui souffre. Elles
                    traduisent souvent des remontées d&apos;humidité, des micro-organismes installés en profondeur et un enduit qui ne joue plus
                    pleinement son rôle de protection.
                  </p>
                  <p>
                    Notre intervention commence par une lecture précise de vos façades : type de revêtement (crépi, enduit, peinture…), zones
                    les plus exposées, fissures, pieds de murs marqués par les remontées capillaires. À partir de ce diagnostic, nous définissons
                    un traitement sur mesure, adapté à la fois au support et à l&apos;histoire de votre maison.
                  </p>
                  <p>
                    L&apos;objectif n&apos;est pas seulement de retrouver une façade propre, mais de la remettre dans un état sain : support nettoyé,
                    champignons éliminés en profondeur, humidité maîtrisée et barrière hydrofuge qui laisse respirer le bâti. Vos murs retrouvent
                    leur couleur, mais surtout leur capacité à se défendre contre les agressions climatiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne étapes sous forme de mini-timeline */}
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-sky-400/0 via-sky-400/60 to-sky-400/0" />

              <div className="space-y-3 text-sm text-slate-700">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                  Les grandes étapes de notre rénovation de façades
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Un déroulé clair, pensé pour traiter à la fois l&apos;esthétique et la santé de vos murs.
                </p>

                <ul className="space-y-3.5">
                  {[
                    {
                      step: '01',
                      title: 'Diagnostic des façades',
                      desc: "Analyse des traces, de l&apos;exposition, des fissures et des zones sujettes aux remontées d&apos;eau.",
                    },
                    {
                      step: '02',
                      title: 'Préparation & protections',
                      desc: 'Mise en place des bâches, protection des menuiseries et des abords, sécurisation du chantier.',
                    },
                    {
                      step: '03',
                      title: 'Nettoyage en profondeur',
                      desc: 'Nettoyage adapté au revêtement (basse ou haute pression maîtrisée) pour retirer salissures et croûtes noires.',
                    },
                    {
                      step: '04',
                      title: 'Traitement anti-fongique',
                      desc: 'Application d&apos;un traitement qui détruit champignons, algues et moisissures en profondeur.',
                    },
                    {
                      step: '05',
                      title: 'Gestion de l&apos;humidité',
                      desc: "Traitement des pieds de murs et des remontées capillaires lorsque cela est nécessaire, pour stopper l&apos;humidité à la source.",
                    },
                    {
                      step: '06',
                      title: 'Barrière hydrofuge respirante',
                      desc: "Application d&apos;un hydrofuge certifié qui protège les façades des pluies battantes tout en laissant le mur respirer.",
                    },
                  ].map((item, index) => (
                    <li
                      key={item.step}
                      className="relative pl-14 pr-3 py-3 rounded-2xl border border-slate-200/70 bg-white/90 hover:border-sky-300/80 hover:bg-sky-50/60 transition-colors duration-300"
                      style={{ marginLeft: index % 2 === 0 ? 0 : '0.4rem' }}
                    >
                      <div className="absolute left-0 top-2 flex items-center justify-center">
                        <div className="relative flex h-9 w-9 items-center justify-center">
                          <div className="absolute inset-0 rounded-full bg-sky-400/15 blur-[6px]" />
                          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border border-sky-400 text-[11px] font-semibold text-sky-600 shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_10px_26px_rgba(59,130,246,0.25)]">
                            {item.step}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA + Footer */}
      <ContactCTA />
      <Footer />
    </main>
  )
}

