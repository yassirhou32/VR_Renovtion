import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ContactCTAProps {
  title?: string
  description?: string
  ctaText?: string
}

export function ContactCTA({
  title = 'Contactez-nous',
  description = 'Faites appel au savoir-faire familial de VR Harmonie pour un diagnostic technique ou un devis personnalisé. Forts de 25 ans d\'expérience, nous sommes à votre disposition pour assurer la protection durable de vos toitures et façades dans toute la région.',
  ctaText = 'Contactez-nous',
}: ContactCTAProps) {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 py-20 md:py-24">
      {/* Cercles de fond */}
      <div className="pointer-events-none absolute inset-0">
        {/* grand halo centré derrière le titre */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200/55 via-slate-800/0 to-transparent blur-3xl" />
        {/* anneau fin autour du bloc principal */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 h-72 w-72 rounded-full border border-slate-300/30" />
        {/* petit anneau en bas */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 h-44 w-44 rounded-full border border-slate-300/18" />
        <div className="absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-100 mb-6">
          {title}
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
          Votre artisan rénovateur de confiance en Indre-et-Loire.
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 text-sm font-semibold tracking-wide bg-white text-slate-900 hover:bg-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.55)]"
          >
            <Link href="/contact">{ctaText}</Link>
          </Button>
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/80">
            Réponse sous 24h • Devis gratuit
          </p>
        </div>
      </div>
    </div>
  )
}
