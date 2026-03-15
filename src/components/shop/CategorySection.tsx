import { Button } from '@/components/ui/button'

const CATEGORIES = [
  {
    id: 'new',
    title: 'Just In',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
    href: '#products',
  },
  {
    id: 'dresses',
    title: 'Dresses',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600',
    href: '#dresses',
  },
  {
    id: 'accessories',
    title: 'Bags & More',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600',
    href: '#accessories',
  },
]

export function CategorySection() {
  return (
    <section className="border-b border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative block overflow-hidden rounded-sm border border-border bg-muted/30"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {cat.id === 'dresses' && (
                  <div className="absolute inset-0 bg-black/20" />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="border border-border bg-background font-medium text-foreground shadow-sm hover:bg-muted"
                >
                  {cat.title}
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
