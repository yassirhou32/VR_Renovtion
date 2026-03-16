import { Navbar } from '@/components/navbar'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import GalleryMosaic from '@/components/gallery-mosaic'

export default function EntretienProtectionToiturePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* En-tête simple pour ce service uniquement */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-100 px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Entretien & protection de toiture
            </div>
            <h1 className="section-title">Protéger durablement votre toiture</h1>
            <p className="section-subtitle">
              Une intervention complète pour nettoyer, assainir et protéger votre couverture contre l&apos;humidité, les mousses et le gel,
              tout en respectant les matériaux d&apos;origine.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie animée avec vos photos */}
      <section className="w-full bg-white">
        <GalleryMosaic
          images={[
            '/images/IMG_7472.jpeg',
            '/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG',
            '/images/DSC08774.jpg',
            '/images/IMG_6185.jpeg',
            '/images/IMG_7468.jpeg',
            '/images/DSC08773.jpg',
            '/images/DSC08772.jpg',
            '/images/IMG_7472.jpeg',
            '/images/IMG_6185.jpeg',
          ]}
          backgroundColor="#FDFBF7"
          viewText="Voir"
        />
      </section>

      {/* Texte détaillé spécifique à ce service */}
      <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-10 md:space-y-12">
          {/* En-tête du bloc texte */}
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-700 shadow-sm shadow-emerald-100/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
              Rituel d&apos;entretien complet VR Harmonie
            </p>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto">
              Une méthode pensée comme un protocole précis, pour traiter votre toiture avec la même attention qu&apos;un ouvrage de
              patrimoine.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            {/* Colonne récit */}
            <div className="relative">
              <div className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-emerald-100/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-12 h-32 w-32 rounded-full bg-sky-100/80 blur-3xl" />

              <div className="relative rounded-[28px] border border-slate-200 bg-white/95 px-6 py-6 md:px-8 md:py-8 shadow-[0_26px_90px_rgba(15,23,42,0.12)]">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 md:gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-600 border border-emerald-400/40">
                    360°
                  </span>
                  Un rituel complet pour une toiture saine et durable
                </h2>
                <div className="space-y-4 text-sm md:text-[15px] text-slate-700 leading-relaxed md:leading-relaxed">
                  <p>
                    Une toiture n&apos;est pas seulement un assemblage de tuiles ou d&apos;ardoises : c&apos;est le premier bouclier de votre maison. Avec
                    le temps, mousses, lichens et poussières s&apos;incrustent, retiennent l&apos;eau et finissent par fragiliser le matériau. Nous
                    intervenons comme on le ferait pour une peau sensible : en douceur, mais en profondeur.
                  </p>
                  <p>
                    Notre passage commence par un diagnostic précis : accès, pente, type de tuiles, zones d&apos;ombre, traces d&apos;infiltration… Nous
                    adaptons ensuite la méthode de nettoyage (basse ou haute pression maîtrisée) pour décoller les salissures sans agresser le
                    support. Une fois la toiture parfaitement propre, nous appliquons un démoussant qui agit au cœur du matériau et stoppe la
                    repousse des micro-organismes.
                  </p>
                  <p>
                    Vient enfin la phase la plus importante : la mise en place d&apos;un hydrofuge certifié. Ce traitement crée une barrière invisible
                    qui fait perler l&apos;eau au lieu de la laisser pénétrer. Votre couverture reste respirante, mais beaucoup moins sensible au gel,
                    aux pluies battantes et aux salissures. À la clé : une toiture qui retrouve sa couleur d&apos;origine, gagne en valeur esthétique
                    et surtout en longévité.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne étapes sous forme de mini-timeline innovante */}
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/0 via-emerald-400/60 to-emerald-400/0" />

              <div className="space-y-3 text-sm text-slate-700">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                  Les grandes étapes de notre intervention
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Six temps forts, toujours réalisés dans cet ordre, pour garantir un résultat durable et maîtrisé.
                </p>

                <ul className="space-y-3.5">
                  {[
                    {
                      step: '01',
                      title: 'Diagnostic de la toiture',
                      desc: "Inspection visuelle, repérage des zones fragilisées, de la porosité et des éventuelles infiltrations.",
                    },
                    {
                      step: '02',
                      title: 'Préparation du chantier',
                      desc: "Protection des abords, bâchage des façades sensibles, sécurisation des accès et des points de chute.",
                    },
                    {
                      step: '03',
                      title: 'Nettoyage contrôlé',
                      desc: "Décapage des salissures et des mousses en respectant la nature des matériaux (basse ou haute pression maîtrisée).",
                    },
                    {
                      step: '04',
                      title: 'Traitement démoussant ciblé',
                      desc: "Application d&apos;un produit fongicide qui détruit durablement mousses, algues et lichens jusque dans les pores du matériau.",
                    },
                    {
                      step: '05',
                      title: 'Hydrofuge de protection',
                      desc: "Mise en œuvre d&apos;un hydrofuge certifié qui fait perler l&apos;eau, limite les taches et protège la toiture des cycles gel / dégel.",
                    },
                    {
                      step: '06',
                      title: 'Contrôle final & photos',
                      desc: "Tour complet de la toiture avec vous, remise des photos avant / après et conseils pour garder une couverture saine le plus longtemps possible.",
                    },
                  ].map((item, index) => (
                    <li
                      key={item.step}
                      className="relative pl-14 pr-3 py-3 rounded-2xl border border-slate-200/70 bg-white/90 hover:border-emerald-300/80 hover:bg-emerald-50/60 transition-colors duration-300"
                      style={{ marginLeft: index % 2 === 0 ? 0 : '0.4rem' }}
                    >
                      <div className="absolute left-0 top-2 flex items-center justify-center">
                        <div className="relative flex h-9 w-9 items-center justify-center">
                          <div className="absolute inset-0 rounded-full bg-emerald-400/15 blur-[6px]" />
                          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border border-emerald-400 text-[11px] font-semibold text-emerald-600 shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_10px_26px_rgba(16,185,129,0.25)]">
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

      {/* Contact CTA + Footer comme sur les autres pages */}
      <ContactCTA />
      <Footer />
    </main>
  )
}

