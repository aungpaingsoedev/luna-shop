import { useState } from 'react'
import {
  Minus,
  Plus,
  Trash2,
  Loader2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/cart-context'
import { formatPrice } from '@/lib/utils'
import {
  createPuzzleTransaction,
  buildOrderTransactionPayload,
} from '@/lib/puzzle-api'

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } =
    useCart()
  const [checkingOut, setCheckingOut] = useState(false)
  const [checkoutDone, setCheckoutDone] = useState(false)
  const [puzzleApiKey, setPuzzleApiKey] = useState('')
  const [syncToPuzzle, setSyncToPuzzle] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setError(null)
    setCheckingOut(true)
    if (syncToPuzzle && puzzleApiKey.trim()) {
      const orderId = `ORD-${Date.now()}`
      const totalCents = Math.round(totalPrice * 100)
      const payload = buildOrderTransactionPayload(
        orderId,
        totalCents,
        'revenue_account_id',
        'bank_account_id'
      )
      const result = await createPuzzleTransaction(puzzleApiKey.trim(), payload)
      if (result.error) {
        setError(result.error)
        setCheckingOut(false)
        return
      }
    }
    setCheckoutDone(true)
    setCheckingOut(false)
    clearCart()
    setTimeout(() => {
      onOpenChange(false)
      setCheckoutDone(false)
    }, 1800)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display">Your cart</SheetTitle>
          <SheetDescription>
            {totalItems === 0
              ? 'Your cart is empty. Add items from the shop.'
              : `${totalItems} item${totalItems !== 1 ? 's' : ''} in cart`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 && !checkoutDone ? (
            <p className="text-center text-sm text-muted-foreground">
              No items yet.
            </p>
          ) : checkoutDone ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <CheckCircle2 className="h-16 w-16 text-primary" />
              <p className="font-display text-lg font-semibold">
                Order placed successfully
              </p>
              {syncToPuzzle && (
                <p className="text-center text-sm text-muted-foreground">
                  Synced to Puzzle Accounting
                </p>
              )}
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-3 rounded-lg border border-border bg-card p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium leading-tight line-clamp-2">
                      {product.name}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {formatPrice(product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto h-7 w-7 text-destructive hover:text-destructive"
                        onClick={() => removeItem(product.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && !checkoutDone && (
          <>
            <Separator />
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="font-display text-primary">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="puzzle-sync"
                    checked={syncToPuzzle}
                    onChange={(e) => setSyncToPuzzle(e.target.checked)}
                    className="h-4 w-4 rounded border-input"
                  />
                  <Label htmlFor="puzzle-sync" className="text-sm font-medium">
                    Sync to Puzzle Accounting
                  </Label>
                </div>
                {syncToPuzzle && (
                  <div className="space-y-1">
                    <Label htmlFor="puzzle-key" className="text-xs text-muted-foreground">
                      API Key (optional)
                    </Label>
                    <Input
                      id="puzzle-key"
                      type="password"
                      placeholder="Puzzle API key"
                      value={puzzleApiKey}
                      onChange={(e) => setPuzzleApiKey(e.target.value)}
                      className="h-8 text-sm"
                    />
                    <a
                      href="https://puzzle-api.readme.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Puzzle API docs
                    </a>
                  </div>
                )}
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                className="w-full gap-2 font-display"
                size="lg"
                onClick={handleCheckout}
                disabled={checkingOut}
              >
                {checkingOut ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing…
                  </>
                ) : (
                  'Checkout'
                )}
              </Button>
            </div>
          </>
        )}

        <SheetFooter className="border-t pt-4 sm:flex-row sm:justify-start">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Continue shopping
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
