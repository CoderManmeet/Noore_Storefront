'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, Menu, Minus, Plus, Search, ShoppingBag, X } from 'lucide-react'
import { cartItems, formatPrice, products } from '@/lib/noore-data'
export { cartItems, formatPrice, products }

export function Logo() {
  return <Link href="/" aria-label="Noore home" className="font-serif text-[1.65rem] font-semibold uppercase leading-none tracking-[0.24em] text-[#292522]">NOORE</Link>
}

export function Header({ cartCount = 2 }: { cartCount?: number }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <div className="bg-[#292522] px-4 py-2.5 text-center text-[9px] uppercase leading-4 tracking-[0.16em] text-[#f6f2eb] sm:text-[10px] sm:tracking-[0.22em]">Complimentary shipping on orders above ₹2,500</div>
    <header className="relative border-b border-[#292522]/15 bg-[#f6f2eb]">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-5 md:h-[72px] md:px-10">
        <div className="flex items-center gap-1 md:gap-7">
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)} className="flex size-10 items-center justify-start md:hidden"><span className="sr-only">Menu</span>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
          <Link href="/" className="hidden text-[10px] uppercase tracking-[0.2em] text-[#746d65] md:inline">Shop</Link>
        </div>
        <Logo />
        <div className="flex items-center justify-end gap-1 sm:gap-2 md:gap-4">
          <button type="button" aria-label="Search" className="flex size-10 items-center justify-center md:hidden"><Search aria-hidden="true" /></button>
          <Link href="/login" aria-label="Account" className="hidden text-[10px] uppercase tracking-[0.2em] text-[#746d65] md:inline">Account</Link>
          <Link href="/cart" aria-label="Open shopping bag" className="relative flex size-10 items-center justify-center"><ShoppingBag aria-hidden="true" /><span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center bg-[#a66d54] text-[9px] leading-none text-white">{cartCount}</span></Link>
        </div>
      </div>
      {menuOpen && <div className="absolute inset-x-0 top-full z-20 border-b border-[#292522]/15 bg-[#f6f2eb] px-5 py-6 shadow-sm md:hidden"><nav aria-label="Mobile navigation" className="flex flex-col gap-5 text-[11px] uppercase tracking-[0.2em]"><Link href="/" onClick={() => setMenuOpen(false)}>Shop candles</Link><Link href="/login" onClick={() => setMenuOpen(false)}>Account</Link><Link href="/shipping" onClick={() => setMenuOpen(false)}>Shipping & returns</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></nav></div>}
    </header>
  </>
}

export function Footer() {
  return <footer className="mt-20 bg-[#e8e1d6] px-5 py-12 md:px-10"><div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-4"><div><Logo /><p className="mt-4 max-w-xs text-xs leading-6 text-[#756f67]">Sculptural fragrance for considered living. Hand poured in small batches.</p></div><div><p className="mb-4 text-[10px] uppercase tracking-[0.2em]">Explore</p><div className="flex flex-col gap-3 text-xs text-[#756f67]"><Link href="/">Shop candles</Link><Link href="/shipping">Shipping & returns</Link><Link href="/contact">Contact</Link></div></div><div><p className="mb-4 text-[10px] uppercase tracking-[0.2em]">Information</p><div className="flex flex-col gap-3 text-xs text-[#756f67]"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/returns">Returns</Link></div></div><div><p className="mb-4 text-[10px] uppercase tracking-[0.2em]">Follow along</p><p className="text-xs leading-6 text-[#756f67]">Instagram<br />Pinterest</p></div></div><div className="mx-auto mt-12 max-w-[1440px] border-t border-[#292522]/15 pt-5 text-[10px] uppercase tracking-[0.12em] text-[#938b81]">© 2026 Noore Studio · Made with intention</div></footer>
}

export function Shell({ children, cartCount }: { children: React.ReactNode; cartCount?: number }) { return <main className="min-h-screen bg-[#f6f2eb] text-[#292522]"><Header cartCount={cartCount} />{children}<Footer /></main> }
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <div className="border-b border-[#292522]/15 bg-[#eee9e1] px-5 py-16 md:px-10 md:py-24"><div className="mx-auto max-w-[1440px]"><p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#a66d54]">{eyebrow}</p><h1 className="max-w-3xl font-serif text-5xl leading-[.95] md:text-7xl">{title}</h1>{children}</div></div> }
export function Field({ label, name, type = 'text', required = true }: { label: string; name: string; type?: string; required?: boolean }) { const [value, setValue] = useState(''); const [touched, setTouched] = useState(false); const invalid = required && touched && !value.trim(); return <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.15em]" data-invalid={invalid || undefined}>{label}<input name={name} type={type} required={required} value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setTouched(true)} aria-invalid={invalid} className="min-h-12 border-b border-[#292522]/30 bg-transparent px-0 text-sm normal-case tracking-normal outline-none focus:border-[#a66d54]" />{invalid && <span className="text-[10px] normal-case tracking-normal text-[#a66d54]">This field is required.</span>}</label> }
export function OrderSummary({ total = 3760 }: { total?: number }) { return <section className="bg-[#eee9e1] p-6 md:p-8"><p className="mb-6 text-[10px] uppercase tracking-[0.2em]">Order summary</p><div className="flex flex-col gap-5">{cartItems.map((item) => <div key={item.id} className="flex gap-4"><img src={item.image} alt={`${item.name} candle`} className="size-16 object-cover" /><div className="flex-1"><p className="font-serif text-lg">{item.name}</p><p className="text-xs text-[#756f67]">{item.size} · Qty {item.quantity}</p></div><p className="text-sm">{formatPrice(item.price)}</p></div>)}</div><div className="mt-8 flex flex-col gap-3 border-t border-[#292522]/15 pt-5 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(total - 180)}</span></div><div className="flex justify-between"><span>Shipping</span><span>{total > 2500 ? 'Complimentary' : formatPrice(180)}</span></div><div className="mt-2 flex justify-between border-t border-[#292522]/15 pt-4 font-serif text-2xl"><span>Total</span><span>{formatPrice(total)}</span></div></div></section> }
export function Quantity({ quantity = 1 }: { quantity?: number }) { return <div className="flex items-center border border-[#292522]/20"><button className="flex size-9 items-center justify-center" aria-label="Decrease quantity"><Minus className="size-3" /></button><span className="w-8 text-center text-sm">{quantity}</span><button className="flex size-9 items-center justify-center" aria-label="Increase quantity"><Plus className="size-3" /></button></div> }
export function BackLink({ href = '/' }: { href?: string }) { return <Link href={href} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#756f67]"><ArrowLeft className="size-3" /> Back</Link> }
