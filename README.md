# Luna — Add to Cart

လှပပြီး feature စုံတဲ့ shop + add to cart UI ပရိုဂျက်။ **Shadcn UI** နဲ့ **Puzzle Accounting API** ချိတ်ဆက်ထားပါတယ်။

## Features

- **Product grid** — ပစ္စည်းများ card ဖြင့် ပြသခြင်း
- **Add to cart** — ခြင်းတန်းထဲ ထည့်ခြင်း၊ အရေအတွက် ပြင်ဆင်ခြင်း၊ ဖျက်ခြင်း
- **Cart sheet** — ညာဘက် slide-out cart with checkout
- **Puzzle API** — Checkout မှာ “Sync to Puzzle Accounting” ရွေးပြီး API key ထည့်ရင် order ကို [Puzzle API](https://puzzle-api.readme.io/) သို့ transaction အဖြစ် ပို့ခြင်း

## Run

```bash
npm install
npm run dev
```

Browser မှာ `http://localhost:5173` ဖွင့်ပါ။

## Puzzle API

- Docs: [puzzle-api.readme.io](https://puzzle-api.readme.io/)
- Checkout မှာ “Sync to Puzzle Accounting” ကို ရွေးပြီး Puzzle API key ထည့်ပါ။
- API key မထည့်ပဲ checkout လုပ်ရင် local cart ပဲ ရှင်းပြီး order sync မလုပ်ပါ။

## Tech

- React 19 + Vite 8 + TypeScript
- Tailwind CSS 3
- Shadcn UI (Radix primitives, CVA, Tailwind)
- Lucide React icons
