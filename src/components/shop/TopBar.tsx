import { Facebook, Instagram, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function TopBar() {
  const [langOpen, setLangOpen] = useState(false)
  const [currencyOpen, setCurrencyOpen] = useState(false)

  return (
    <div className="bg-[#2d2d2d] text-white">
      <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
            aria-label="Facebook"
          >
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
            aria-label="Instagram"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a href="#about" className="hidden hover:underline sm:inline">
            Our Story
          </a>
          <a href="#shipping" className="hidden hover:underline sm:inline">
            Shipping & Returns
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLangOpen(!langOpen)
                setCurrencyOpen(false)
              }}
              className="flex items-center gap-1 hover:opacity-90"
            >
              Eng <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-10 mt-1 min-w-[80px] rounded border border-border bg-background py-1 text-foreground shadow">
                <button
                  type="button"
                  className="w-full px-3 py-1 text-left text-sm hover:bg-muted"
                  onClick={() => setLangOpen(false)}
                >
                  Eng
                </button>
                <button
                  type="button"
                  className="w-full px-3 py-1 text-left text-sm hover:bg-muted"
                  onClick={() => setLangOpen(false)}
                >
                  Myanmar
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setCurrencyOpen(!currencyOpen)
                setLangOpen(false)
              }}
              className="flex items-center gap-1 hover:opacity-90"
            >
              USD <ChevronDown className="h-3 w-3" />
            </button>
            {currencyOpen && (
              <div className="absolute right-0 top-full z-10 mt-1 min-w-[80px] rounded border border-border bg-background py-1 text-foreground shadow">
                <button
                  type="button"
                  className="w-full px-3 py-1 text-left text-sm hover:bg-muted"
                  onClick={() => setCurrencyOpen(false)}
                >
                  USD
                </button>
                <button
                  type="button"
                  className="w-full px-3 py-1 text-left text-sm hover:bg-muted"
                  onClick={() => setCurrencyOpen(false)}
                >
                  MMK
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
