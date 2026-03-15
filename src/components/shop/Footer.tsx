import { Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const FOOTER_LINKS = {
  Brand: [
    { label: 'Our Story', href: '#about' },
    { label: 'Get in Touch', href: '#contact' },
    { label: 'Find a Store', href: '#stores' },
    { label: 'Join the Team', href: '#careers' },
  ],
  Support: [
    { label: 'Track Order', href: '#tracking' },
    { label: 'Help Centre', href: '#help' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms of Use', href: '#terms' },
  ],
  Shop: [
    { label: 'Dresses', href: '#dresses' },
    { label: 'New In', href: '#new' },
    { label: 'Bags & More', href: '#accessories' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Brand
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Brand.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Support
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Support.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Shop
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Shop.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                123 Fashion Street, Downtown, Yangon
              </li>
              <li>
                <a href="tel:+951234567" className="hover:text-foreground">+95 1 234 567</a>
              </li>
              <li>Mon–Sat 10:00 – 20:00 · Sun 11:00 – 18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h3 className="mb-2 text-center font-semibold text-foreground">Stay in the loop</h3>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Subscribe for exclusive drops, style tips and 10% off your first order.
          </p>
          <form
            className="mx-auto flex max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-foreground/20 bg-background"
            />
            <Button type="submit" variant="default" className="bg-foreground text-background hover:bg-foreground/90">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            ©2025 Luna. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Connect with us:</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
