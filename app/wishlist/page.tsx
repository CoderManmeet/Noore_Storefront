'use client'

import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'
import { products, formatPrice } from '@/lib/noore-data'

export default function WishlistPage() {
  return <main className="min-h-screen bg-[#f6f2eb] px-5 py-8 text-[#292522] md:px-10 md:py-12"><Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#756f67]"><ArrowLeft className="size-3" /> Back to shop</Link><div className="mx-auto max-w-[1440px] py-16"><div className="flex items-end justify-between border-b border-[#292522]/15 pb-7"><div><p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#a66d54]">Your saved scents</p><h1 className="font-serif text-5xl md:text-7xl">Wishlist</h1></div><Heart className="size-8 stroke-1" /></div><div className="noore-scroll-row mt-10 grid grid-cols-2 gap-4 overflow-x-auto pb-4 md:grid-cols-3">{products.map((product) => <article key={product.id} className="min-w-[42vw] md:min-w-0"><div className="aspect-[4/5] overflow-hidden bg-[#d7cec1]"><img src={product.image} alt={`${product.name} candle`} className="size-full object-cover" /></div><div className="flex items-start justify-between gap-3 pt-4"><div><h2 className="font-serif text-xl">{product.name}</h2><p className="mt-1 text-[10px] uppercase tracking-wider text-[#756f67]">{product.notes}</p></div><p className="text-sm">{formatPrice(product.price)}</p></div></article>)}</div></div></main>
}
