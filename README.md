# Luna — Fashion & Add to Cart

လှပပြီး feature စုံတဲ့ e-commerce UI ပရိုဂျက်။ **Shadcn UI** နဲ့ **Puzzle Accounting API** ချိတ်ဆက်ထားပါတယ်။

![Luna Shop Preview]('https://github.com/aungpaingsoedev/luna-shop/blob/main/public/luna-shop.png?raw=true')

---

## Features

- **Top bar** — Social links, Our Story, Shipping & Returns, Language (Eng/Myanmar), Currency (USD/MMK)
- **Header** — Nav (New In, Dresses, Accessories, Journal), Luna logo, Search / Account / Wishlist / Cart
- **Banner slider** — 3 slides with 50% off, New Cocktail Dresses, Women/Men collection; prev/next arrows, 1/3 dots
- **Category panels** — Just In, Dresses, Bags & More with images and links
- **Product grid** — Best Selling & Featured products; wishlist heart, Add to Cart on hover
- **Cart sheet** — Slide-out cart, quantity +/- , remove, total, optional Puzzle API sync, checkout
- **Footer** — Brand, Support, Shop, Contact columns; newsletter signup; copyright & social links
- **Share preview** — `luna-shop.png` used as Open Graph & Twitter card image

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + Vite 8 + TypeScript |
| **Styling** | Tailwind CSS 3, PostCSS |
| **UI** | Shadcn-style components (Radix UI, CVA, tailwind-merge, clsx) |
| **Icons** | Lucide React |
| **Accounting** | [Puzzle API](https://puzzle-api.readme.io/) (optional sync on checkout) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
luna-shop/
├── public/
│   ├── favicon.svg
│   └── luna-shop.png      # Share/preview image
├── src/
│   ├── components/
│   │   ├── shop/          # Header, TopBar, Hero, CategorySection, ProductCard, CartSheet, Footer
│   │   └── ui/            # Shadcn: Button, Card, Badge, Sheet, Input, Label, Separator
│   ├── context/           # cart-context, wishlist-context
│   ├── data/              # products.ts
│   ├── lib/               # utils, puzzle-api
│   ├── types/             # product.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Puzzle API (Optional)

- **Docs:** [puzzle-api.readme.io](https://puzzle-api.readme.io/)
- Checkout မှာ **“Sync to Puzzle Accounting”** ကို ရွေးပြီး Puzzle API key ထည့်ပါ။
- API key မထည့်ပဲ checkout လုပ်ရင် cart ပဲ ရှင်းပြီး order က Puzzle သို့ မပို့ပါ။

## License

Private project. All rights reserved.
