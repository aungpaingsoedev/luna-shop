import { ShoppingCart, Heart } from 'lucide-react'
import type { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { useWishlist } from '@/context/wishlist-context'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { has, toggle } = useWishlist()
  const inWishlist = has(product.id)

  return (
    <div className="group relative overflow-hidden rounded-sm border border-border bg-card">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              Out of stock
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            toggle(product.id)
          }}
          className={cn(
            'absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors hover:bg-muted',
            inWishlist && 'fill-foreground text-foreground'
          )}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={cn('h-4 w-4', inWishlist && 'fill-current')} />
        </button>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center bg-background/90 p-3 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            size="sm"
            className="w-full max-w-[160px] gap-1.5 border border-border bg-background font-medium text-foreground shadow hover:bg-muted"
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm font-medium leading-tight text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  )
}
