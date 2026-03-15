import { Search, User, Heart, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onOpenCart: () => void
}

const NAV_LINKS = [
  { label: 'New In', href: '#new' },
  { label: 'Dresses', href: '#dresses' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'Journal', href: '#journal' },
]

export function Header({ onOpenCart }: HeaderProps) {
  const { totalItems } = useCart()

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-[#fafafa]">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-foreground hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              Luna
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" className="text-foreground" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn('relative text-foreground', totalItems > 0 && 'text-foreground')}
              onClick={onOpenCart}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
