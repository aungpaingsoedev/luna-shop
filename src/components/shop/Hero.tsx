import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SLIDES = [
  {
    id: 1,
    badge: '50% off',
    title: 'New Cocktail Dresses',
    cta: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800',
  },
  {
    id: 2,
    badge: 'New Season',
    title: 'Women Collection',
    cta: 'Explore',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
  },
  {
    id: 3,
    badge: 'Best Sellers',
    title: 'Men Collection',
    cta: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800',
  },
]

const TOTAL = SLIDES.length

export function Hero() {
  const [index, setIndex] = useState(0)

  const goTo = useCallback((i: number) => {
    setIndex(() => {
      if (i < 0) return TOTAL - 1
      if (i >= TOTAL) return 0
      return i
    })
  }, [])

  useEffect(() => {
    const t = setInterval(() => goTo(index + 1), 5000)
    return () => clearInterval(t)
  }, [index, goTo])

  const slide = SLIDES[index]

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5]">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #a8d4e8 0%, #c9b8e8 100%)' }}
        />
        <div
          className="absolute bottom-0 right-0 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: 'linear-gradient(180deg, #f5d0c5 0%, #e8d4a8 100%)' }}
        />
        <div className="absolute bottom-8 right-24 flex gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-amber-300/80"
              style={{
                transform: `translate(${i % 3 - 1}px, ${Math.floor(i / 3) * 4}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto min-h-[420px] px-4 py-10 sm:px-6 sm:py-12">
        <div className="relative flex min-h-[360px] flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left content */}
          <div className="flex flex-1 flex-col items-start gap-6 sm:max-w-md">
            <div
              key={slide.id}
              className="animate-[fadeIn_0.4s_ease-out]"
            >
              <div className="rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background">
                {slide.badge}
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                {slide.title}
              </h1>
              <a
                href="#products"
                className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                {slide.cta}
              </a>
            </div>
          </div>

          {/* Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border-border bg-background/90 shadow hover:bg-muted sm:left-4"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border-border bg-background/90 shadow hover:bg-muted sm:right-4"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Right image */}
          <div className="relative w-full flex-1 sm:max-w-md">
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              className="ml-auto aspect-[3/4] w-full max-w-sm object-cover object-top animate-[fadeIn_0.4s_ease-out]"
            />
          </div>
        </div>

        {/* Slider indicator: 1/3, 2/3, 3/3 */}
        <div className="mt-6 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === index ? 'w-6 bg-foreground' : 'w-1.5 bg-foreground/30 hover:bg-foreground/50'
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          <span className="ml-4 text-sm text-muted-foreground tabular-nums">
            {index + 1}/{TOTAL}
          </span>
        </div>
      </div>
    </section>
  )
}
