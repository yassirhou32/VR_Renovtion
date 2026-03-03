import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroProps {
  badge?: string
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
}

export function Hero({
  badge = 'Contactez-nous',
  title,
  description,
  ctaText = 'Demandez un devis',
  ctaLink = '/contact',
}: HeroProps) {
  return (
    <div className="relative w-full bg-[#071b3b] overflow-hidden pt-24">
      {/* Background texture with strong diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 2px, transparent 2px, transparent 10px)',
          opacity: 0.65,
        }}
      />
      {/* Bottom fade like on the reference site */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-xs font-semibold text-slate-100 uppercase tracking-wide">
          {badge}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-100/90 max-w-2xl leading-relaxed text-balance">
          {description}
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="bg-white text-[#071b3b] hover:bg-slate-100 rounded-full px-8 mt-6 font-semibold transition-colors shadow-sm"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  )
}
