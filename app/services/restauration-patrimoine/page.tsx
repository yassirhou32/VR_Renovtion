import { Navbar } from '@/components/navbar'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import GalleryMosaic from '@/components/gallery-mosaic'

export default function RestaurationPatrimoinePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* En-tête spécifique restauration de patrimoine */}
      <section className="w-full pt-24 md:pt-28 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-100 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Restauration de patrimoine
            </div>
            <h1 className="section-title">Mettre en valeur la pierre et l&apos;histoire</h1>
            <p className="section-subtitle">
              Une approche artisanale pour dégager la pierre, reprendre les joints et préserver le caractère authentique de vos murs anciens
              en pierre de taille ou moellons.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie animée avec vos photos de patrimoine */}
      <section className="w-full bg-white">
        <GalleryMosaic
          images={[
            '/images/DSC08768.jpg',
            '/images/DSC08771.jpg',
            '/images/DSC08769.jpg',
            '/images/DSC08773.jpg',
            '/images/DSC08774.jpg',
            '/images/IMG_2263.jpeg',
            '/images/IMG_2274.jpeg',
            '/images/DSC08768.jpg',
            '/images/IMG_2263.jpeg',
          ]}
          backgroundColor="#FDFBF7"
          viewText="Voir"
        />
      </section>

      {/* Texte détaillé spécifique patrimoine */}
      <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-10 md:space-y-12">
          {/* En-tête du bloc texte */}
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/80 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-amber-700 shadow-sm shadow-amber-100/70">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.35)]" />
              Restauration de murs en pierre
            </p>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto">
              Redonner sa lecture d&apos;origine à la pierre, sans la dénaturer : c&apos;est l&apos;esprit de notre travail sur les bâtis anciens.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            {/* Colonne récit */}
            <div className="relative">
              <div className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-amber-100/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-12 h-32 w-32 rounded-full bg-orange-100/80 blur-3xl" />

              <div className="relative rounded-[28px] border border-slate-200 bg-white/95 px-6 py-6 md:px-8 md:py-8 shadow-[0_26px_90px_rgba(15,23,42,0.12)]">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-4">
                  Redonner du relief à la pierre, renforcer la maçonnerie
                </h2>
                <div className="space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  <p>
                    Avec le temps, les joints entre les pierres se dégradent, se creusent et laissent l&apos;eau s&apos;infiltrer. La façade perd du relief,
                    la pierre se marque et la maçonnerie se fragilise. Avant de penser à recouvrir, il est souvent préférable de rendre à la
                    pierre son aspect d&apos;origine.
                  </p>
                  <p>
                    La première étape consiste à piqueter les anciens joints pour mettre la pierre à nu. Ce travail minutieux permet d&apos;enlever les
                    mortiers dégradés sans abîmer les blocs. Nous nettoyons ensuite les parements pour retirer les restes de mortier, les traces
                    de pollution et les concrétions qui ternissent le dessin de la pierre.
                  </p>
                  <p>
                    Vient enfin le rejointoiement : un mortier adapté à la nature de la pierre est appliqué manuellement, joint par joint. Il
                    consolide l&apos;ensemble, protège les lits de pose et redonne du caractère au mur. Le but est de trouver l&apos;équilibre entre
                    solidité, respiration du bâti et mise en valeur architecturale.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne étapes sous forme de mini-timeline */}
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-amber-400/0 via-amber-400/60 to-amber-400/0" />

              <div className="space-y-3 text-sm text-slate-700">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                  Les grandes étapes de notre restauration
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Une méthode en plusieurs temps, pensée pour respecter la pierre et la structure d&apos;origine.
                </p>

                <ul className="space-y-3.5">
                  {[
                    {
                      step: '01',
                      title: 'Lecture du bâti',
                      desc: "Observation des pierres, des anciens joints, des reprises existantes et des zones fragilisées par l&apos;eau.",
                    },
                    {
                      step: '02',
                      title: 'Piquetage des anciens joints',
                      desc: 'Retrait soigné des mortiers dégradés pour mettre la pierre à nu, sans l&apos;éclater ni la blesser.',
                    },
                    {
                      step: '03',
                      title: 'Nettoyage et dépoussiérage',
                      desc: 'Nettoyage adapté pour éliminer poussières, restes de mortier, mousses et salissures entre les pierres.',
                    },
                    {
                      step: '04',
                      title: 'Choix du mortier de rejointoiement',
                      desc: 'Sélection d&apos;un mortier compatible avec la pierre et le bâti ancien, pour assurer à la fois tenue et respiration.',
                    },
                    {
                      step: '05',
                      title: 'Rejointoiement artisanal',
                      desc: 'Remplissage et finition des joints à la main, en respectant le dessin d&apos;origine et le style de la façade.',
                    },
                    {
                      step: '06',
                      title: 'Brossage final & mise en valeur',
                      desc: "Brossage léger des joints, nettoyage des parements et contrôle visuel pour un résultat harmonieux et durable.",
                    },
                  ].map((item, index) => (
                    <li
                      key={item.step}
                      className="relative pl-14 pr-3 py-3 rounded-2xl border border-slate-200/70 bg-white/90 hover:border-amber-300/80 hover:bg-amber-50/60 transition-colors duration-300"
                      style={{ marginLeft: index % 2 === 0 ? 0 : '0.4rem' }}
                    >
                      <div className="absolute left-0 top-2 flex items-center justify-center">
                        <div className="relative flex h-9 w-9 items-center justify-center">
                          <div className="absolute inset-0 rounded-full bg-amber-400/15 blur-[6px]" />
                          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border border-amber-400 text-[11px] font-semibold text-amber-700 shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_10px_26px_rgba(245,158,11,0.3)]">
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

