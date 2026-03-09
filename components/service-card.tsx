import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: LucideIcon
  href?: string
  ctaText?: string
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href = '#',
  ctaText = 'En savoir plus',
}: ServiceCardProps) {
  return (
    <Card className="relative group h-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.16)] hover:shadow-[0_42px_140px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-3 hover:-rotate-[0.35deg] hover:border-slate-300">
      {/* Fond et décorations avancées très visibles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.1),transparent_55%)] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
      {/* quart de cercle plein en haut à droite */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-slate-200/90" />
      {/* bande arrondie pleine en bas à gauche */}
      <div className="pointer-events-none absolute -bottom-18 -left-24 h-32 w-44 rounded-[32px] bg-slate-200/90" />
      {/* lueur de base sous la carte */}
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-16 bg-gradient-to-t from-slate-200 via-transparent to-transparent" />
      {/* contour interne et barres décoratives */}
      <div className="pointer-events-none absolute inset-[3px] rounded-[24px] border border-slate-200/80 group-hover:border-slate-300/95 transition-colors" />
      <div className="pointer-events-none absolute top-5 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-900/5 group-hover:bg-slate-900/10" />
      <div className="pointer-events-none absolute bottom-6 right-7 h-px w-16 bg-gradient-to-l from-slate-400/70 via-slate-300/40 to-transparent" />
      {/* motif diagonales très léger */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.2)_0,transparent_35%,transparent_65%,rgba(148,163,184,0.2)_100%)] mix-blend-soft-light opacity-60" />

      <div className="relative px-7 py-8 md:px-8 md:py-9 flex flex-col items-center text-center gap-5 h-full min-h-[320px] md:min-h-[360px]">
        {/* Icône seule en en-tête avec halo */}
        {Icon && (
          <div className="relative mb-1">
            <div className="pointer-events-none absolute -inset-3 rounded-full bg-slate-900/8 blur-md group-hover:bg-slate-900/14 transition-colors" />
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-md shadow-slate-900/45">
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-base md:text-[20px] lg:text-[22px] font-semibold text-slate-900 tracking-tight group-hover:text-slate-950 whitespace-normal md:whitespace-nowrap">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed flex-grow max-w-xs md:max-w-sm">
          {description}
        </p>

        {/* CTA Button */}
        <div className="pt-3">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full px-5 md:px-6 text-xs md:text-sm font-semibold tracking-wide border-slate-700 text-slate-900 hover:bg-slate-900 hover:text-white shadow-sm shadow-slate-900/20"
          >
            <Link href={href}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
