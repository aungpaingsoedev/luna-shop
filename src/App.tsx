import { useState } from 'react'
import { CartProvider } from '@/context/cart-context'
import { WishlistProvider } from '@/context/wishlist-context'
import { TopBar } from '@/components/shop/TopBar'
import { Header } from '@/components/shop/Header'
import { Hero } from '@/components/shop/Hero'
import { CategorySection } from '@/components/shop/CategorySection'
import { ProductCard } from '@/components/shop/ProductCard'
import { CartSheet } from '@/components/shop/CartSheet'
import { Footer } from '@/components/shop/Footer'
import { products } from '@/data/products'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <TopBar />
          <Header onOpenCart={() => setCartOpen(true)} />

          <main className="flex-1">
            <Hero />
            <CategorySection />

            <section id="products" className="border-b border-border bg-background py-12">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="mb-2 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Best Selling
                </h2>
                <p className="mx-auto mb-10 max-w-lg text-center text-sm text-muted-foreground">
                  Here are some of our best selling products. Explore yourself in the latest trends.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-background py-12">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="mb-2 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Featured Products
                </h2>
                <p className="mx-auto mb-10 max-w-lg text-center text-sm text-muted-foreground">
                  Discover our curated selection of featured items.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {products.slice(0, 5).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>

        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
